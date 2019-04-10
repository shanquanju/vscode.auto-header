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
