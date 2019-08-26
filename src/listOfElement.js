/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Element = require('./element.js');

/**
 * @constructs ListOfElement
 * @example <caption>Example usage of 'contructor'</caption>
 * let listOfElement = new ListOfElement();
 * // returns an instance of ListOfElement with properties :
 * // - list : [List]
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
 * @example <caption>Example usage of 'all' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   listOfElement = new ListOfElement();
 * listOfElement.addItem(item);
 * listOfElement.all(); // returns [item]
 * @returns {Array} - An array containing all items
 */
ListOfElement.prototype.all = function() {
  return this.list.all();
};

/**
 * Find items of ListOfElement with matching identifier
 * @example <caption>Example usage of 'findByIdentifier' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   listOfElement = new ListOfElement();
 * listOfElement.addItem(item);
 * listOfElement.findByIdentifier('xxx-xxx-xxx'); // returns [item]
 * listOfElement.findByIdentifier('x'); // returns []
 * @param {number} identifier - Item identifier
 * @returns {Object} - Items with given identifier
 */
ListOfElement.prototype.findByIdentifier = function(identifier) {
  return this.list.findBy('identifier', identifier);
};

/**
 * Add item to ListOfElement
 * @example <caption>Example usage of 'addItem' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   listOfElement = new ListOfElement();
 * listOfElement.addItem(item); // returns true
 * listOfElement.addItem({'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}); // returns false (because you must use an instance of Element to success)
 * @param {Element} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
ListOfElement.prototype.addItem = function(item) {
  if (Element.isValid(item)) return this.list.addItem(item) > 0;
  return false;
};

/**
 * Add item to ListOfElement
 * @example <caption>Example usage of 'removeItem' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   listOfElement = new ListOfElement();
 * listOfElement.addItem(item);
 * listOfElement.addItem(item);
 * listOfElement.addItem(item); // will contain 3 copies of 'item'
 * listOfElement.removeItem(item, true); // returns true (remove first copy of item)
 * listOfElement.removeItem(item); // returns true (remove all copy of item)
 * listOfElement.removeItem(item); // returns false (because there is not anymore copy of item)
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
 * @example <caption>Example usage of 'load' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   data = new ListOfElement(),
 *   listOfElement = new ListOfElement();
 * data.addItem(item);
 * listOfElement.load(data.save()); // returns true
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = [{'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}], // invalid data, only use .save() function to build correct data structure that can be loaded
 *   listOfElement = new Classification();
 * listOfElement.load(data); // returns false
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
 * @example <caption>Example usage of 'save' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   listOfElement = new ListOfElement();
 * listOfElement.addItem(item);
 * listOfElement.save(); // returns [{"identifier": 1, "classifications": [Classification]]
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
