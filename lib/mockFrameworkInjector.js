/**
 * @file mockFrameworkInjector
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

const Injector = require('magnum-di')
const frmwkUtils = require('@pomegranate/framework-utils')
const PomModules = require('@pomegranate/common-modules')
const _ = require('lodash')
const path = require('path')
const chalk = require('chalk')
/**
 *
 * @module mockFrameworkInjector
 */

class InternalVersions{
  log(){}
}

module.exports = function(verbose, opts, parentDir) {

  let builtOpts = {
    logLevel: opts.logLevel || 0,
    prefix: opts.prefix || 'pomegranate',
    additionalPrefix: opts.additionalPrefix || [],
    logger: console,
    parentDirectory: parentDir,
    applicationDirectory: path.join(parentDir,'./application'),
    pluginDirectory: (_.isBoolean(opts.pluginDirectory) && !opts.pluginDirectory) ? false : path.join(parentDir,'./plugins'),
    pluginSettingsDirectory: path.join(parentDir, './pluginSettings')
  };

  let FwkLogger = PomModules.FrameworkLogger.module
  let LogManager = FwkLogger.LogManager
  let logManager = new LogManager()

  let injector = new Injector()
  let EventEmitter = require('events').EventEmitter;
  let FrameworkEvents = new EventEmitter()

  let FrameworkOptions = frmwkUtils.frameworkOptionParser(builtOpts, frmwkUtils.frameworkErrors)
  let currentPrefixes = frmwkUtils.prefixGenerator(builtOpts.prefix, builtOpts.additionalPrefix)

  let LogFactory = frmwkUtils.loggerFactory({
    Logger: builtOpts.logger,
    verbocity: builtOpts.logLevel,
    logColor: 'green',
    chalk:chalk
  })

  injector.service('Prefixes', currentPrefixes)
  injector.service('PrefixSelector', frmwkUtils.prefixSelector(currentPrefixes))
  injector.service('Options', FrameworkOptions)
  injector.service('NameGenerator', frmwkUtils.nameGenerator);
  injector.service('FrameworkErrors', frmwkUtils.frameworkErrors)
  injector.service('FrameworkEvents', FrameworkEvents)

  injector.service('Output', frmwkUtils.frameworkMessages);


  injector.service('LogManager', logManager)

  injector.service('LoggerFactory', LogFactory);
  injector.service('Logger', mockConsole(verbose))
  injector.service('FrameworkLogger', mockConsole(verbose))
  injector.service('SystemLogger', mockConsole(verbose))
  injector.service('InternalVersions', new InternalVersions(mockConsole(verbose)))

  injector.service('PomModules', PomModules)
  return injector
}

function mockConsole(verbose){

  if(verbose) return console

  return {
    log: function(){},
    error: function(){},
    info: function(){},
    warn: function(){},
  }
}