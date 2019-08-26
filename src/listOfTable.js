/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Table = require('./table.js');

/**
 * @constructs ListOfTable
 * @example <caption>Example usage of 'contructor'</caption>
 * let listOfTable = new ListOfTable();
 * // returns an instance of ListOfTable with properties :
 * // - list : [List]
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
 * @example <caption>Example usage of 'all' function</caption>
 * let item = new Table(),
 *   listOfTable = new ListOfTable();
 * // According item (instance of Table) has been fit with your data
 * listOfTable.addItem(item);
 * listOfTable.all(); // returns [item]
 * @returns {Array} - An array containing all items
 */
ListOfTable.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfTable with matching identifier
 * @example <caption>Example usage of 'findByIdentifier' function</caption>
 * let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
 *   listOfTable = new ListOfTable();
 * listOfTable.addItem(item);
 * listOfTable.findByIdentifier('xxx-xxx-xxx'); // returns [item]
 * listOfTable.findByIdentifier('x'); // returns []
 * @param {number} identifier - Item identifier
 * @returns {Object} - Items with given identifier
 */
ListOfTable.prototype.findByIdentifier = function(identifier) {
  return this.list.findBy('identifier', identifier);
};

/**
 * Add item to ListOfTable
 * @example <caption>Example usage of 'addItem' function</caption>
 * let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
 *   listOfTable = new ListOfTable();
 * listOfTable.addItem(item); // returns true
 * listOfTable.addItem({'xxx-xxx-xxx': {'title': 'Description of this table'}}); // returns false (because you must use an instance of Table to success)
 * @param {Table} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfTable.prototype.addItem = function(item) {
  if (Table.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Remove item to ListOfTable
 * @example <caption>Example usage of 'removeItem' function</caption>
 * let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
 *   listOfTable = new ListOfTable();
 * listOfTable.addItem(item);
 * listOfTable.addItem(item);
 * listOfTable.addItem(item); // will contain 3 copies of 'item'
 * listOfTable.removeItem(item, true); // returns true (remove first copy of item)
 * listOfTable.removeItem(item); // returns true (remove all copy of item)
 * listOfTable.removeItem(item); // returns false (because there is not anymore copy of item)
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
 * @example <caption>Example usage of 'load' function</caption>
 * let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save(),
 *   data = new ListOfTable(),
 *   listOfTable = new ListOfTable();
 * data.addItem(item);
 * listOfTable.load(data.save()); // returns true
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = [{'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}], // invalid data, only use .save() function to build correct data structure that can be loaded
 *   listOfTable = new Classification();
 * listOfTable.load(data); // returns false
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
 * @example <caption>Example usage of 'save' function</caption>
 * let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
 *   listOfTable = new ListOfTable();
 * listOfTable.addItem(item);
 * listOfTable.save(); // returns [[Table]]
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
