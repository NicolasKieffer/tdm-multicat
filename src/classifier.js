/**
 * @prettier
 */
'use strict';

/* Module Require */
const utils = require('tdm-utils'),
  List = require('./list.js'),
  Classification = require('./classification.js'),
  ListOfClassification = require('./listOfClassification.js'),
  Element = require('./element.js'),
  ListOfElement = require('./listOfElement.js'),
  Table = require('./table.js'),
  ListOfTable = require('./listOfTable.js');

/**
 * @constructs Classifier
 * @param {Object} [options] - Options of constructor
 * @param {ListOfTable} [options.tables] - An instance of listOfTable
 * @returns {Classifier} - An instance of Classifier
 */
const Classifier = function(options) {
  this.tables =
    typeof options === 'object' && typeof options.tables !== 'undefined' ? options.tables : DEFAULT.tables();
  return this;
};

/* Default values */
const DEFAULT = {
  tables: function() {
    return new ListOfTable();
  }
};

/**
 * Return categories of all Tables with given elementId
 * @param {string} elementId - Identifier of given element
 * @returns {Array} - An array containing all classification associated with this elementId
 */
Classifier.prototype.getClassifications = function(elementId) {
  let result = [],
    tables = this.tables.all();
  for (var i = 0; i < tables.length; i++) {
    let table = tables[i];
    let categories = this.getClassificationsOf(table.identifier, elementId);
    if (categories.length) result = result.concat(categories);
  }
  return result;
};

/**
 * Get categories of given Table
 * @param {string} tableId - Identifier of classification
 * @param {string} elementId - Identifier of given element
 * @returns {Array} - An array containing all classification associated with this elementId of given classification
 */
Classifier.prototype.getClassificationsOf = function(tableId, elementId) {
  let result = [],
    _tables = this.tables.findByIdentifier(tableId);
  if (_tables.length > 0) {
    let table = _tables[0];
    let _elements = table.elements.findByIdentifier(elementId);
    if (_elements.length > 0) result = _elements[0].classifications.all();
  }
  return result;
};

/**
 * Return Elements of all Tables with given classification
 * @param {Classification} classification - Classification of element
 * @returns {Array<Element>} - An array containing all elements associated with this classification
 */
Classifier.prototype.getElements = function(classification) {
  let result = [],
    tables = this.tables.all();
  if (!Classification.isValid(classification)) return result;
  for (var i = 0; i < tables.length; i++) {
    let table = tables[i];
    let elements = this.getElementsOf(table.identifier, classification);
    if (elements.length) result = result.concat(elements);
  }
  return result;
};

/**
 * Get categories of given Table
 * @param {string} tableId - Identifier of classification
 * @param {Classification} classification - Classification of element
 * @returns {Array<Element>} - An array containing all elements associated with this classification
 */
Classifier.prototype.getElementsOf = function(tableId, classification) {
  let result = [],
    _tables = this.tables.findByIdentifier(tableId);
  if (!Classification.isValid(classification)) return result;
  if (_tables.length > 0) {
    let table = _tables[0];
    let _elements = table.classifications.findBy('classification', classification);
    if (_elements.length > 0) {
      for (var i = 0; i < _elements.length; i++) {
        let _element = table.elements.findByIdentifier(_elements[i].identifier)[0];
        result.push(_element);
      }
    }
  }
  return result;
};

/**
 * Get alls registers
 * @returns {Object} - An Object containing all registers
 */
Classifier.prototype.getRegisters = function() {
  let result = {},
    tables = this.tables.all();
  for (var i = 0; i < tables.length; i++) {
    let table = tables[i];
    let register = this.getRegistersOf(table.identifier);
    for (var key in register) {
      result[key] = register[key];
    }
  }
  return result;
};

/**
 * Get register of given Table
 * @param {string} tableId - Identifier of classification
 * @returns {Object} - An Object containing register
 */
Classifier.prototype.getRegistersOf = function(tableId) {
  let result = {},
    _tables = this.tables.findByIdentifier(tableId);
  if (_tables.length > 0) result = _tables[0].register;
  return result;
};

/**
 * Function called when procces end
 * @callback callback
 * @param {Error} err - Process erros
 * @param {string|number|Object|Array} res - Result data
 */

/**
 * Load data of given file (that must be create by save function)
 * @param {string} filePath - Path of file containing saved data
 * @param {callback} cb - Function called when procces end
 * @returns {undefined} - undefined
 */
Classifier.prototype.load = function(filePath, cb) {
  let self = this;
  return utils.JSON.load(filePath, function(err, res) {
    if (err) return cb(err);
    let result = true;
    if (typeof res.tables !== 'undefined') result = result && self.tables.load(res.tables);
    return cb(err, result);
  });
};

/**
 * Save data at given filePath (that will be loaded by load function)
 * @param {string} filePath - Path of file that will contain saved data
 * @param {callback} cb - Function called when procces end
 * @returns {undefined} - undefined
 */
Classifier.prototype.save = function(filePath, cb) {
  let result = {
    tables: this.tables.save()
  };
  return utils.io._write(filePath, 'utf8', JSON.stringify(result), function(err, res) {
    if (err) return cb(err);
    return cb(err, true);
  });
};

module.exports = Classifier;
