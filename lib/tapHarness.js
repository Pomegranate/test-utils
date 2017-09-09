/**
 * @file tapHarness
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-plugin-test-harness
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

"use strict";
const assert = require('assert')
const _ = require('@pomegranate/framework-utils').lodash

module.exports = function(tap, plugin){
  assert.equal(tap.name, 'TAP', 'You must pass an instance of tap in to this harness.')

  tap.test('Plugin Metadata', (t) => {
    t.type(plugin.metadata, 'object', 'Metadata is an object.')
    t.type(plugin.metadata.name, 'string','Has a name.')
    t.type(plugin.metadata.type, 'string','Has a type.')
    t.end()
  })

  if(plugin.metadata.type !== 'installer'){
    tap.test('Plugin Hooks', (t) => {
      t.type(plugin.plugin, 'object', 'Plugin is an object.')
      t.type(plugin.plugin.load, 'function','Has a load hook.')
      t.type(plugin.plugin.start, 'function','Has a start hook.')
      t.type(plugin.plugin.stop, 'function','Has a stop hook.')
      t.end()
    })
  }

  if(plugin.metadata.type === 'installer'){
    tap.test('Plugin Installer', (t) => {
      t.type(plugin.installer, 'function', 'Installer is a function.')
      t.end()
    })
  }

  if(plugin.options){
    tap.test('Options (Optional)', (t) => {
      t.type(plugin.options, 'object', 'Options is an object.')
      t.end()
    })
  }

  if(plugin.errors){
    tap.test('Errors (Optional)', (t) => {
      t.type(plugin.errors, 'object', 'Errors is an object.')
    })
  }

}