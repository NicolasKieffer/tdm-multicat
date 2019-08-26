/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  Element = require('./element.js'),
  ListOfElement = require('./listOfElement.js');

/**
 * @constructs Table
 * @example <caption>Example usage of 'contructor' (with paramters)</caption>
 * let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
 * // returns an instance of Table with properties :
 * // - identifier : 'xxx-xxx-xxx'
 * // - description : {'title': 'Description of this table'} // Store data desribing this table here (scheme, title, summary, etc); no specific keys
 * // - elements : [ListOfElement]
 * // - classifications : [List]
 * // - register : {}
 * @example <caption>Example usage of 'contructor' (with default values)</caption>
 * let table = new Table(); // According myClassification (instance of ListOfClassification) contain your data
 * // returns an instance of Table with properties :
 * // - identifier : null
 * // - description : null
 * // - elements : [ListOfElement]
 * // - classifications : [List]
 * // - register : {}
 * @param {string} [identifier] - Identifier of Table
 * @param {string} [description] - Descripton of Table
 * @returns {Table} - An instance of Table
 */
const Table = function(identifier, description) {
  this.identifier = typeof identifier === 'string' ? identifier : Table.DEFAULT.identifier();
  this.description = typeof description === 'object' ? description : Table.DEFAULT.description();
  this.elements = Table.DEFAULT.elements();
  this.classifications = Table.DEFAULT.classifications();
  this.register = Table.DEFAULT.register();
  return this;
};

/* Default values */
Table.DEFAULT = {
  'identifier': function() {
    return null;
  },
  'description': function() {
    return null;
  },
  'elements': function() {
    return new ListOfElement();
  },
  'classifications': function() {
    return new List();
  },
  'register': function() {
    return {};
  }
};

/**
 * Check data before load
 * @example <caption>Example usage of 'check' function (success)</caption>
 * let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save();
 * Table.check(table); // returns true
 * @example <caption>Example usage of 'check' function (fail)</caption>
 * let table = {'xxx-xxx-xxx': {'title': 'Description of this table'}}; // invalid data, only use .save() function to build correct data structure that can be loaded
 * Table.check(table); // returns false
 * @param {Object} data - Data that will be checked (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Table.check = function(data) {
  return (
    typeof data === 'object' &&
    typeof data.identifier === 'string' &&
    typeof data.description === 'object' &&
    Array.isArray(data.elements)
  );
};

/**
 * Validate data
 * @example <caption>Example usage of 'isValid' function (success)</caption>
 * let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
 * Table.isValid(table); // returns true
 * @example <caption>Example usage of 'isValid' function (fail)</caption>
 * let table = {'xxx-xxx-xxx': {'title': 'Description of this table'}}; // invalid data, only use new Table() to build valid data
 * Table.isValid(table); // returns false
 * @param {Object} data - Data that will be check (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Table.isValid = function(data) {
  return (
    data instanceof Table &&
    typeof data.identifier === 'string' &&
    typeof data.description === 'object' &&
    data.elements instanceof ListOfElement
  );
};

/**
 * Add item to Table
 * @example <caption>Example usage of 'addItem' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   table = new Table();
 * table.addItem(item); // returns true
 * table.addItem({'xxx-xxx-xxx', myClassification}); // returns false (because you must use an instance of Classification to success)
 * @param {Element} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
Table.prototype.addItem = function(item) {
  if (!Element.isValid(item)) return false;
  let result = this.elements.addItem(item) > 0;
  if (result) {
    let classifications = item.classifications.all();
    for (var i = 0; i < classifications.length; i++) {
      let classification = {
          classification: classifications[i],
          identifier: item.identifier
        },
        str = classifications[i].toString();
      if (typeof this.register[str] === 'undefined')
        this.register[str] = Object.assign(
          Object.create(Object.getPrototypeOf(classifications[i])),
          classifications[i]
        );
      result = result && this.classifications.addItem(classification) > 0;
    }
  }
  return result;
};

/**
 * Remove item to Table
 * @example <caption>Example usage of 'removeItem' function</caption>
 * let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
 *   table = new Table();
 * table.addItem(item);
 * table.addItem(item);
 * table.addItem(item); // will contain 3 copies of 'item'
 * table.removeItem(item, true); // returns true (remove first copy of item)
 * table.removeItem(item); // returns true (remove all copy of item)
 * table.removeItem(item); // returns false (because there is not anymore copy of item)
 * @param {Element} item - Item that will be removed
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
Table.prototype.removeItem = function(item, unique = false) {
  if (!Element.isValid(item)) return false;
  let result = this.elements.removeItem(item, unique);
  if (result) {
    let classifications = item.classifications.all();
    for (var i = 0; i < classifications.length; i++) {
      let classification = {
          classification: classifications[i],
          identifier: item.identifier
        },
        str = classifications[i].toString();
      result = result && this.classifications.removeItem(classification, true);
      if (!this.classifications.findItem(classification).length) delete this.register[str];
    }
  }
  return result;
};

/**
 * Load data
 * @example <caption>Example usage of 'load' function (success)</caption>
 * let data = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save();
 *   table = new Table();
 * table.load(data); // returns true
 * console.log(table); // outuput : [Element]
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = {'xxx-xxx-xxx': {'title': 'Description of this table'}}, // invalid data, only use .save() function to build correct data structure that can be loaded
 *   table = new Table();
 * table.load(data); // returns false
 * console.log(table); // outuput : [Element] (with default values)
 * @param {Object} data - Data that will be loaded (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Table.prototype.load = function(data) {
  if (!Table.check(data)) return false;
  let result = true,
    elements = new ListOfElement();
  result = result && elements.load(data.elements);
  if (result) {
    elements = elements.all();
    this.elements = Table.DEFAULT.elements();
    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      result = result && this.addItem(element);
    }
    this.identifier = data.identifier;
    this.description = data.description;
    result = result && Table.isValid(this);
  }
  return result;
};

/**
 * Save data
 * @example <caption>Example usage of 'save' function</caption>
 * let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
 * table.save(); // returns {'identifier': 'xxx-xxx-xxx', 'description': {}, ...]}
 * @returns {Object} - An object representation of save
 */
Table.prototype.save = function() {
  return {
    'identifier': this.identifier,
    'description': this.description,
    'elements': this.elements.save()
  };
};

module.exports = Table;
