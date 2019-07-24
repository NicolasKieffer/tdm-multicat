/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Table = require('./table.js');

/**
 * @constructs ListOfTable
 * @returns {ListOfTable} - An instance of ListOfTable
 */
const ListOfTable = function() {
  this.list = ListOfTable.DEFAULT.list();
  return this;
};

/* Default values */
ListOfTable.DEFAULT = {
  'list': function() {
    return new List({
      'blackListKey': {
        'description': true,
        'elements': true,
        'classifications': true
      }
    });
  }
};
/**
 * Get all items of ListOfTable
 * @returns {Array} - An array containing all items
 */
ListOfTable.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfTable with matching identifier
 * @param {number} identifier - Item identifier
 * @returns {Object} - Items with given identifier
 */
ListOfTable.prototype.findByIdentifier = function(identifier) {
  return this.list.findBy('identifier', identifier);
};

/**
 * Add item to ListOfTable
 * @param {Table} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfTable.prototype.addItem = function(item) {
  if (Table.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Remove item to ListOfTable
 * @param {Table} item - Item that will be removed
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
ListOfTable.prototype.removeItem = function(item, unique = false) {
  if (Table.isValid(item)) {
    let result = this.list.removeItem(item, unique);
    return result;
  }
  return false;
};

/**
 * Load data
 * @param {Array} data - Data that will be loaded (call all function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
ListOfTable.prototype.load = function(data) {
  if (!Array.isArray(data)) return false;
  let result = true;
  this.list = ListOfTable.DEFAULT.list();
  for (var i = 0; i < data.length; i++) {
    let item = new Table();
    result = result && item.load(data[i]) && this.addItem(item);
  }
  return result;
};

/**
 * Save data
 * @returns {Array} - An array representation of save
 */
ListOfTable.prototype.save = function() {
  let result = [],
    items = this.list.all();
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    result.push(item.save());
  }
  return result;
};

module.exports = ListOfTable;
