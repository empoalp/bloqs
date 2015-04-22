/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'variableSetDeclare',
    content: [
        [{
            alias: 'text',
            value: 'Declarar variable'
        }, {
            alias: 'varInput',
            value: '',
            placeholder: 'Nombre'
        }, {
            alias: 'text',
            value: '='
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ]
});

module.exports = bloq;