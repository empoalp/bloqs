/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: elseif
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code only if the previous conditions
 *              are not met and the new one does.
 *
 * Return type: none
 */

var elseif = _.merge(_.clone(StatementInputBloq, true), {

    name: 'elseif',
    bloqClass: 'bloq-else-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-else-if-if'
        }, {
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: ['all']
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                    label: '=',
                    value: '=='
                }, {
                    label: '!=',
                    value: '!='
                }, {
                    label: '>',
                    value: '>'
                }, {
                    label: '>=',
                    value: '>='
                }, {
                    label: '<',
                    value: '<'
                }, {
                    label: '<=',
                    value: '<='
                }] //'=', '≠', '>', '≥', '<', '≤']
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: ['all']
        }, {
            alias: 'text',
            value: 'bloq-else-if-else'
        }]
    ],
    code: 'else if ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}',
    python: {
        codeLines: [{
            code: 'elif({ARG1} {OPERATOR} {ARG2}):'
        }, {
            indentation: 1,
            code: '{STATEMENTS}'
        }]
    }
});

utils.generateBloqInputConnectors(elseif);

elseif.connectors[0].acceptedAliases = ['ifDown', 'elseifDown'];
elseif.connectors[1].acceptedAliases = ['all', 'elseifDown'];

elseif.connectors[3].suggestedBloqs = ['number', 'string', 'selectVariable'];
elseif.connectors[4].suggestedBloqs = ['number', 'string', 'selectVariable'];


module.exports = elseif;