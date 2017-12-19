/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project test-utils
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module index
 */


exports.mockFrameworkInjector = require('./lib/mockFrameworkInjector')
exports.buildPkgJson = require('./lib/buildPkgJson')
exports.findMockDir = require('./lib/findMockDir')
exports.registerMocks = require('./lib/registerMocks')
exports.mockPlugin = require('./lib/mockPlugin')
exports.mockPluginDI = require('./lib/mockPluginDI')
exports.tapHarness = require('./lib/tapHarness')
exports.buildFrameworkOptions = require('./lib/buildFrameworkOptions')