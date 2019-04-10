/**
 * @ Author: Daniel Lin
 * @ Create Time: 2019-04-09 14:48:24
 * @ Modified by: Daniel Lin
 * @ Modified time: 2019-04-10 16:04:25
 * @ Description:
 */

import CommandType from '../enums/commandType';
import ICommand from '../models/command';
import autoHeader from './autoHeader/autoHeader';

/**
 * Commands Map
 */
const commandList = new Map<CommandType, ICommand>([
  [CommandType.AutoHeader, {handler: autoHeader}],
]);

export default commandList;
