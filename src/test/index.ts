/**
 * @ Author: Daniel Lin
 * @ Create Time: 2019-04-08 17:21:36
 * @ Modified by: Daniel Lin
 * @ Modified time: 2019-04-10 16:06:57
 * @ Description:
 */

// tslint:disable-next-line:no-submodule-imports
import * as testRunner from 'vscode/lib/testrunner';

testRunner.configure({
  // the TDD UI is being used in extension.test.ts (suite, test, etc.)
  ui: 'tdd',
  // colored output from test results
  useColors: true,
});

module.exports = testRunner;
