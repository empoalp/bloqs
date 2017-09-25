/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../build-utils'),
    StatementBloq = require('./../../../statementBloq');

/**
 * Bloq name: 
 *
 * Bloq type: Statement
 *
 * Description:
 * Return type: none
 */

var mkbShowFaceOnLedMatrix = _.merge(_.clone(StatementBloq, true), {

    name: 'mkbShowFaceOnLedMatrix',
    bloqClass: 'bloq-mbot-color',
    content: [
        [{
            alias: 'text',
            value: 'Mostrar una cara'
        }, {
            id: 'GESTURE',
            alias: 'staticDropdown',
            options: [{
                label: 'alegre',
                value: '0x0, 0x0, 0x40, 0x84, 0x82, 0x41, 0x1, 0x1, 0x1, 0x1, 0x41, 0x82, 0x84, 0x40, 0x0, 0x0'
            }, {
                label: 'seria',
                value: '0x0, 0x0, 0x0, 0x62, 0x64, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x64, 0x62, 0x0, 0x0, 0x0'
            }, {
                label: 'triste',
                value: '0x0, 0x0, 0x80, 0x41, 0x42, 0x84, 0x4, 0x4, 0x4, 0x4, 0x84, 0x42, 0x41, 0x80, 0x0, 0x0'
            }, {
                label: 'enfadada',
                value: '0x0, 0x0, 0x0, 0x80, 0x41, 0x22, 0x2, 0x2, 0x2, 0x2, 0x22, 0x41, 0x80, 0x0, 0x0, 0x0'
            }, {
                label: 'enamorada',
                value: '0x0, 0x30, 0x78, 0x3c, 0x78, 0x30, 0x2, 0x1, 0x1, 0x2, 0x30, 0x78, 0x3c, 0x78, 0x30, 0x0'
            }, {
                label: 'confundida',
                value: '0x0, 0x0, 0x0, 0xc3, 0xc4, 0x4, 0x4, 0x4, 0x2, 0x1, 0x1, 0xc1, 0xc6, 0x0, 0x0, 0x0'
            }]
        }, {
            alias: 'text',
            value: 'in-the'
        }, {
            id: 'LEDMATRIX',
            alias: 'dynamicDropdown',
            options: 'ledMatrix'
        }]
    ],
    code: '',
    arduino: {
        code: '{LEDMATRIX}.draw({GESTURE});'
    }
});
utils.preprocessBloq(mkbShowFaceOnLedMatrix);

module.exports = mkbShowFaceOnLedMatrix;
