/**
 * 默认配置项
 */
const defaultConfig = {
  format: {
    startWith: '/**',
    middleWith: '*',
    endWith: '*/',
    headerPrefix: '@',
  },
  header: {
    'Author': 'Your name',
    'Create Time': {
      type: 'createTime',
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    'Modified by': {
      type: 'modifier',
      value: 'Your name',
    },
    'Modified time': {
      type: 'modifyTime',
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    'Description': '',
  },
};

export default defaultConfig;
