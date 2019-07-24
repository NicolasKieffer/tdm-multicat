/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Element = require('./element.js');

/**
 * @constructs ListOfElement
 * @returns {ListOfElement} - An instance of ListOfElement
 */
const ListOfElement = function() {
  this.list = ListOfElement.DEFAULT.list();
  return this;
};

/* Default values */
ListOfElement.DEFAULT = {
  'list': function() {
    return new List({
      'blackListKey': {
        'classifications': true
      }
    });
  }
};

/**
 * Get all items of ListOfElement
 * @returns {Array} - An array containing all items
 */
ListOfElement.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfElement with matching identifier
 * @param {number} identifier - Item identifier
 * @returns {Object} - Items with given identifier
 */
ListOfElement.prototype.findByIdentifier = function(identifier) {
  return this.list.findBy('identifier', identifier);
};

/**
 * Add item to ListOfElement
 * @param {Element} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfElement.prototype.addItem = function(item) {
  if (Element.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Add item to ListOfElement
 * @param {Element} item - Item that will be removed
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
ListOfElement.prototype.removeItem = function(item, unique = false) {
  if (Element.isValid(item)) return this.list.removeItem(item, unique);
  return false;
};

/**
 * Load data
 * @param {Array} data - Data that will be loaded (call all function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
ListOfElement.prototype.load = function(data) {
  if (!Array.isArray(data)) return false;
  let result = true;
  this.list = ListOfElement.DEFAULT.list();
  for (var i = 0; i < data.length; i++) {
    let item = new Element();
    result = result && item.load(data[i]) && this.addItem(item);
  }
  return result;
};

/**
 * Save data
 * @returns {Array} - An array representation of save
 */
ListOfElement.prototype.save = function() {
  let result = [],
    items = this.list.all();
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    result.push(item.save());
  }
  return result;
};

module.exports = ListOfElement;
