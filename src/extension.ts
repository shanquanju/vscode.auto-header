/**
 * @ Author: Daniel Lin
 * @ Create Time: 2019-04-08 17:21:36
 * @ Modified by: Ziyi Cao
 * @ Modified time: 2022-07-02 11:09:30
 * @ Description:
 */

import { commands, ExtensionContext } from 'vscode';

import commandList from './commands/commands';
import handleEvents from './events/events';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  // Register commands
  for (const [key, value] of commandList) {
    const command = commands.registerCommand(key, value.handler);
    context.subscriptions.push(command);
  }

  // Handle events
  handleEvents();
}

// this method is called when your extension is deactivated
export function deactivate() {
  // tslint:disable-next-line:no-empty
}
