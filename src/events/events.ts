/**
 * @ Author: Daniel Lin
 * @ Create Time: 2019-04-09 18:20:22
 * @ Modified by: Daniel Lin
 * @ Modified time: 2019-04-10 16:05:37
 * @ Description:
 */

import { workspace } from 'vscode';

import { onDidSaveTextDocument } from './workspace/index';

/**
 * Handle events
 */
const handleEvents = () => {
  // Handle workspace events
  workspace.onDidSaveTextDocument(onDidSaveTextDocument);
};

export default handleEvents;
