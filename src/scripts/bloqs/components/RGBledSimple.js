/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'rgbLedSimple',
    bloqClass: 'bloq-rgbLed-simple',
    content: [
        [{
            alias: 'text',
            value: 'bloq-rgbLed-simple'
        }, {
            id: 'LED',
            alias: 'dynamicDropdown',
            options: 'leds'
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-simple-color'
        }, {
            id: 'COLOR',
            alias: 'staticDropdown',
            //'Raíz cuadrada', 'Valor absoluto', '-', 'ln', 'log10', 'e^', '10^']
            options: [ {
                label: 'bloq-rgbLed-simple-white',
                value: '255,255,255'
            }, {
                label: 'bloq-rgbLed-simple-yellow',
                value: '255,255,0'
            }, {
                label: 'bloq-rgbLed-simple-orange',
                value: '200,50,0'
            }, {
                label: 'bloq-rgbLed-simple-red',
                value: '255,0,0'
            }, {
                label: 'bloq-rgbLed-simple-green',
                value: '0,255,0'
            }, {
                label: 'bloq-rgbLed-simple-dark-green',
                value: '0,60,102'
            }, {
                label: 'bloq-rgbLed-simple-blue',
                value: '40,40,255'
            }, {
                label: 'bloq-rgbLed-simple-dark-blue',
                value: '0,0,255'
            }, {
                label: 'bloq-rgbLed-simple-pink',
                value: '255,0,255'
            }]
        }]
    ],
    code: '{LED}.setRGBcolor({COLOR});'

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;