/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Classification = require('./classification.js');

/**
 * @constructs ListOfClassification
 * @returns {ListOfClassification} - An instance of ListOfClassification
 */
const ListOfClassification = function() {
  this.list = ListOfClassification.DEFAULT.list();
  return this;
};

/* Default values */
ListOfClassification.DEFAULT = {
  'list': function() {
    return new List();
  }
};

/**
 * Get all items of ListOfClassification
 * @returns {Array} - An array containing all items
 */
ListOfClassification.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfClassification with matching level
 * @param {number} level - Item level
 * @returns {Object} - Items with given level
 */
ListOfClassification.prototype.findByLevel = function(level) {
  return this.list.findBy('level', level);
};

/**
 * Find item of ListOfClassification with matching value
 * @param {string} value - Item value
 * @returns {Object} - Item with given value
 */
ListOfClassification.prototype.findByValue = function(value) {
  return this.list.findBy('value', value);
};

/**
 * Add item to ListOfClassification
 * @param {Classification} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfClassification.prototype.addItem = function(item) {
  if (Classification.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Add item to ListOfClassification
 * @param {Classification} item - Item that will be removed
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
ListOfClassification.prototype.removeItem = function(item, unique = false) {
  if (Classification.isValid(item)) return this.list.removeItem(item, unique);
  return false;
};

/**
 * Load data
 * @param {Array} data - Data that will be loaded (call all function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
ListOfClassification.prototype.load = function(data) {
  if (!Array.isArray(data)) return false;
  let result = true;
  this.list = ListOfClassification.DEFAULT.list();
  for (var i = 0; i < data.length; i++) {
    let item = new Classification();
    result = result && item.load(data[i]) && this.addItem(item);
  }
  return result;
};

/**
 * Save data
 * @returns {Array} - An array representation of save
 */
ListOfClassification.prototype.save = function() {
  let result = [],
    items = this.list.all();
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    result.push(item.save());
  }
  return result;
};

module.exports = ListOfClassification;