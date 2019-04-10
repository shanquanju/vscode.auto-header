import { Position, TextEditorEdit, window, workspace } from 'vscode';

import defaultConfig from '../../config/default.config';
import ErrorType from '../../enums/errorType';
import { generateHeaderTemplate } from '../../utils/index';

/**
 * Auto header handler
 */
const autoHeader = () => {
  // Get configuration from user settings
  const autoHeaderConfig = workspace.getConfiguration('autoHeader');
  const format = (autoHeaderConfig && autoHeaderConfig.format) || defaultConfig.format;
  const header = (autoHeaderConfig && autoHeaderConfig.header) || defaultConfig.header;

  // Selected activated file the very first time the command is executed
  const activeTextEditor = window.activeTextEditor;

  activeTextEditor.edit((editBuilder: TextEditorEdit) => {
    try {
      const filePath = activeTextEditor.document.fileName;
      const headerTemplate = generateHeaderTemplate({format, header}, filePath);

      // Insert Header
      editBuilder.insert(new Position(0, 0), headerTemplate);
    } catch (error) {
      throw (new Error(ErrorType.InsertFailure));
    }
  });
};

export default autoHeader;
