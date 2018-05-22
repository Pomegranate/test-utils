/**
 * @file mockPlugin
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module mockPlugin
 */

module.exports = function(name, parent){
  return {
    metadata: {
      frameworkVersion: 6,
      name: name,
      type: 'service',
      param: name
    },
    plugin: {
      load: function(Options, Context){
        return {parent: parent || 'None'}
      },
      start: function(Options, Context){
      },
      stop: function(Options, Context){

      }
    }
  }
}