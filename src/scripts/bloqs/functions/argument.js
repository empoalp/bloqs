/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'Argument',
    content: [
        [{
            alias: 'text',
            value: 'variable'
        }, {
            id: 'TYPE',
            alias: 'staticDropdown',
            options: [{
                label: 'float',
                value: 'float'
            }, {
                label: 'String',
                value: 'String'
            }, {
                label: 'bool',
                value: 'bool'
            }]
        }, {
            id: 'VARNAME',
            alias: 'varInput',
            value: 'x'
        }]
    ],
    code: '{TYPE} {VARNAME}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;