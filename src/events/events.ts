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
