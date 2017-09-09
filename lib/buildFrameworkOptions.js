/**
 * @file buildFrameworkOptions
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project test-utils
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module buildFrameworkOptions
 */
const path = require('path')

const silentLogger = {
  log: function(){},
  warn: function() {},
  error: function() {},
  info: function(){}
}


module.exports = function(parentDir= __dirname,logging){

  let appDir = path.join(parentDir, './application')
  let pluginDir = path.join(parentDir, './plugins')
  let pluginSettingsDir = path.join(parentDir, './pluginSettings')
  return {
    applicationDirectory: appDir,
    parentDirectory: parentDir,
    pluginDirectory: pluginDir,
    pluginSettingsDirectory: pluginSettingsDir,
    prefix: 'pomegranate',
    additionalPrefix: [],
    logger: logging ? console : silentLogger,
    timeout: 5000,
    verbose: true,
    colors: true,
    commandMode: false,
    wrapperVersion: "0.0.0"
  }
}