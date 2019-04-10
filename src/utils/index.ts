import * as fs from 'fs';
import * as moment from 'moment';
import * as path from 'path';

import FileType from '../enums/fileType';
import ItemType from '../enums/itemType';
import IConfig from '../models/config';

/**
 * Get Format config
 * @param {string} extname file extname
 * @param {object} format format config
 */
const getFormat = (extname: string, format: any) => {
  let result = format;
  switch (extname) {
    case FileType.Ejs:
    case FileType.Html:
    case FileType.Xml:
    case FileType.Vue:
      result = {
        startWith: '<!--',
        middleWith: '*',
        endWith: '-->',
        headerPrefix: '@',
      };
      break;
    case FileType.Python:
      result = {
        startWith: `'''`,
        middleWith: '#',
        endWith: `'''`,
        headerPrefix: '@',
      };
      break;
    case FileType.Javascript:
    case FileType.Typescript:
      result = {
        startWith: `/**`,
        middleWith: '*',
        endWith: `*/`,
        headerPrefix: '@',
      };
      break;
    default:
      break;
  }

  return result;
};

/**
 * Get config option count
 * @param {object} headerConfig header config
 */
export const getConfigOptionCount = (headerConfig: any) => {
  // Cantians top and footer
  let result = 2;

  for (const key in headerConfig) {
    if (headerConfig.hasOwnProperty(key)) {
      result++;
    }
  }

  return result;
};

/**
 * Generate header template
 * @param {object} config config
 * @param {string} filePath file path
 */
export const generateHeaderTemplate = (config: IConfig, filePath: string) => {
  let result = '';

  const fileCreateTime = fs.statSync(filePath).birthtime;
  const extname = path.extname(filePath);

  const format = getFormat(extname, config.format);

  // Add top comment
  result += `${format.startWith}\n`;

  const header = config.header;
  for (const key in header) {
    if (header.hasOwnProperty(key)) {
      const element = header[key];
      if (typeof element === 'string') {
        result += ` ${format.middleWith} ${format.headerPrefix} ${key}: ${element}\n`;
        continue;
      }

      if (typeof element === 'object') {
        let timeFormat;
        switch (element.type) {
          case ItemType.CreateTime:
            timeFormat = element.format || 'YYYY-MM-DD HH:mm:ss';
            const createTime = moment(fileCreateTime).format(timeFormat);
            result += ` ${format.middleWith} ${format.headerPrefix} ${key}: ${createTime}\n`;
            break;
          case ItemType.ModifyTime:
            timeFormat = element.format || 'YYYY-MM-DD HH:mm:ss';
            const modifyTime = moment().format(timeFormat);
            result += ` ${format.middleWith} ${format.headerPrefix} ${key}: ${modifyTime}\n`;
            break;
          case ItemType.Modifier:
            result += ` ${format.middleWith} ${format.headerPrefix} ${key}: ${element.value}\n`;
            break;
          default:
            break;
        }
      }
    }
  }

  // Add footer comment
  result += `${format.endWith}\n`;

  return result;
};

/**
 * Get mofidy entity
 * @param {object} config config
 * @param {string} filePath file path
 */
export const getModify = (config: IConfig, filePath: string) => {
  const result = {
    modifyTime: {
      key: '',
      value: '',
    },
    modifier: {
      key: '',
      value: '',
    },
  };

  const extname = path.extname(filePath);
  const format = getFormat(extname, config.format);

  const header = config.header;
  for (const key in header) {
    if (header.hasOwnProperty(key)) {
      const element = header[key];
      if (typeof element === 'string') {
        continue;
      }

      if (typeof element === 'object') {
        switch (element.type) {
          case  ItemType.ModifyTime:
            const timeFormat = element.format || 'YYYY-MM-DD HH:mm:ss';
            const modifyTime = moment().format(timeFormat);
            result.modifyTime = {
              key,
              value: ` ${format.middleWith} ${format.headerPrefix} ${key}: ${modifyTime}`,
            };
            break;
          case ItemType.Modifier:
            result.modifier = {
              key,
              value: ` ${format.middleWith} ${format.headerPrefix} ${key}: ${element.value}`,
            };
            break;
          default:
            break;
        }
      }
    }
  }

  return result;
};

/**
 * Check line starts with
 * @param {object} config config
 */
export const checkLineStartsWith = (target: string, match: string) => {
  if (target.startsWith(match)) {
    return true;
  }

  return false;
};
