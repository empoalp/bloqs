/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: botbloqSnakeRotate
 *
 * Bloq type: Statement
 *
 * Description: roll the snake
 *
 */

var botbloqSnakeRotate = _.merge(_.clone(StatementBloq, true), {

    name: 'botbloqSnakeRotate',
    bloqClass: 'bloq-botbloq-snake-rotate',
    content: [
        [{
            alias: 'text',
            value: 'Rotar hacia la'
        }, {
            id: 'SIDE',
            alias: 'staticDropdown',
            options: [{
                label: 'derecha',
                value: 'RIGHT'
            }, {
                label: 'izquierda',
                value: 'LEFT'
            }]
        }]
    ],
    code: '',
    python: {
        libraries: ['BotbloqSnake'],
        needInstanceOf: [{
            name: 'snake',
            type: 'BotbloqSnake'
        }],
        codeLines: [{
            code: 'snake.rotate("{SIDE}")'
        }]
    }
});

utils.preprocessBloq(botbloqSnakeRotate);

module.exports = botbloqSnakeRotate;