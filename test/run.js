/**
 * @prettier
 */
'use strict';

/* Module Require */
const pkg = require('../package.json'),
  Multicat = require('../index.js'),
  utils = require('tdm-utils'),
  TU = require('auto-tu'),
  fs = require('fs'),
  path = require('path');

// Test data
const dataset = {
  'classifier': require('./dataset/in/data/classifier.json'),
  'List': require('./dataset/in/data/_list.json'),
  'list': require('./dataset/in/data/list.json'),
  'Classification': require('./dataset/in/data/_classification.json'),
  'classification': require('./dataset/in/data/classification.json'),
  'Element': require('./dataset/in/data/_element.json'),
  'element': require('./dataset/in/data/element.json'),
  'Table': require('./dataset/in/data/_table.json'),
  'table': require('./dataset/in/data/table.json'),
  'listOfClassification': require('./dataset/in/data/listOfClassification.json'),
  'listOfElement': require('./dataset/in/data/listOfElement.json'),
  'listOfTable': require('./dataset/in/data/listOfTable.json')
};

// Map of functions used in test
const wrapper = require('./dataset/in/wrapper.js');

// Tested Objects
const myObject = {
  'classifier': new Multicat.Classifier(),
  'list': new Multicat.List(),
  'List': { 'check': Multicat.List.check, 'isValid': Multicat.List.isValid },
  'Classification': {
    'check': Multicat.Classification.check,
    'isValid': Multicat.Classification.isValid
  },
  'classification': new Multicat.Classification(),
  'Element': {
    'check': Multicat.Element.check,
    'isValid': Multicat.Element.isValid
  },
  'element': new Multicat.Element(),
  'Table': { 'check': Multicat.Table.check, 'isValid': Multicat.Table.isValid },
  'table': new Multicat.Table(),
  'listOfClassification': new Multicat.ListOfClassification(),
  'listOfElement': new Multicat.ListOfElement(),
  'listOfTable': new Multicat.ListOfTable()
};

/**
 * Start test
 */
TU.start({
  'description': pkg.name + '/index.js',
  'root': 'Multicat',
  'object': myObject,
  'wrapper': wrapper,
  'dataset': dataset
});
