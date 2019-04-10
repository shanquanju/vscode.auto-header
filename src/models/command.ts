/**
 * @ Author: Daniel Lin
 * @ Create Time: 2019-04-09 15:04:51
 * @ Modified by: Daniel Lin
 * @ Modified time: 2019-04-10 16:05:47
 * @ Description:
 */

/**
 * ICommand Interface
 */
interface ICommand {
  handler: () => void;
}

export default ICommand;
