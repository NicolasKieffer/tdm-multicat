/**
 * @prettier
 */
'use strict';

/* Module Require */
const Classifier = require('./src/classifier.js'),
  List = require('./src/list.js'),
  Classification = require('./src/classification.js'),
  ListOfClassification = require('./src/listOfClassification.js'),
  Element = require('./src/element.js'),
  ListOfElement = require('./src/listOfElement.js'),
  Table = require('./src/table.js'),
  ListOfTable = require('./src/listOfTable.js');

const Multicat = {
  /* Constructor of List */
  'Classifier': Classifier,
  /* Constructor of List */
  'List': List,
  /* Constructor of Classification */
  'Classification': Classification,
  /* Constructor of ListOfClassification */
  'ListOfClassification': ListOfClassification,
  /* Constructor of Element */
  'Element': Element,
  /* Constructor of ListOfElement */
  'ListOfElement': ListOfElement,
  /* Constructor of Table */
  'Table': Table,
  /* Constructor of ListOfTable */
  'ListOfTable': ListOfTable
};

module.exports = Multicat;
