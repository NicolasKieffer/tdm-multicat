/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Classification = require('./classification.js');

/**
 * @constructs ListOfClassification
 * @example <caption>Example usage of 'contructor'</caption>
 * let listOfClassification = new ListOfClassification();
 * // returns an instance of ListOfClassification with properties :
 * // - list : [List]
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
 * @example <caption>Example usage of 'all' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item);
 * listOfClassification.all(); // returns [item]
 * @returns {Array} - An array containing all items
 */
ListOfClassification.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfClassification with matching level
 * @example <caption>Example usage of 'findByLevel' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item);
 * listOfClassification.findByLevel(1); // returns [item]
 * listOfClassification.findByLevel(0); // returns []
 * @param {number} level - Item level
 * @returns {Object} - Items with given level
 */
ListOfClassification.prototype.findByLevel = function(level) {
  return this.list.findBy('level', level);
};

/**
 * Find item of ListOfClassification with matching value
 * @example <caption>Example usage of 'findByValue' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item);
 * listOfClassification.findByValue('geology'); // returns [item]
 * listOfClassification.findByValue('test'); // returns []
 * @param {string} value - Item value
 * @returns {Object} - Item with given value
 */
ListOfClassification.prototype.findByValue = function(value) {
  return this.list.findBy('value', value);
};

/**
 * Add item to ListOfClassification
 * @example <caption>Example usage of 'addItem' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item); // returns true
 * listOfClassification.addItem({'level': 1, 'value': 'geology'}); // returns false (because you must use an instance of Classification to success)
 * @param {Classification} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfClassification.prototype.addItem = function(item) {
  if (Classification.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Add item to ListOfClassification
 * @example <caption>Example usage of 'removeItem' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item);
 * listOfClassification.addItem(item);
 * listOfClassification.addItem(item); // will contain 3 copies of 'item'
 * listOfClassification.removeItem(item, true); // returns true (remove first copy of item)
 * listOfClassification.removeItem(item); // returns true (remove all copy of item)
 * listOfClassification.removeItem(item); // returns false (because there is not anymore copy of item)
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
 * @example <caption>Example usage of 'load' function (success)</caption>
 * let item = new Classification(1, 'geology'),
 *   data = new ListOfClassification(),
 *   listOfClassification = new ListOfClassification();
 * data.addItem(item);
 * listOfClassification.load(data.save()); // returns true
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = [{'1' :'geology'}], // invalid data, only use .save() function to build correct data structure that can be loaded
 *   listOfClassification = new Classification();
 * listOfClassification.load(data); // returns false
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
 * @example <caption>Example usage of 'save' function</caption>
 * let item = new Classification(1, 'geology'),
 *   listOfClassification = new ListOfClassification();
 * listOfClassification.addItem(item);
 * listOfClassification.save(); // returns {'level': 1, 'value': 'geology'}
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
