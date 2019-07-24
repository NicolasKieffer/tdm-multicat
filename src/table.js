/**
 * @prettier
 */
'use strict';

/* Module Require */
const List = require('./list.js'),
  ListOfElement = require('./listOfElement.js');

/**
 * @constructs Table
 * @param {string} [identifier] - Identifier of Table
 * @param {string} [description] - Descripton of Table
 * @returns {Table} - An instance of Table
 */
const Table = function(identifier, description) {
  this.identifier = typeof identifier === 'string' ? identifier : Table.DEFAULT.identifier();
  this.description = typeof description === 'object' ? description : Table.DEFAULT.description();
  this.elements = Table.DEFAULT.elements();
  this.classifications = Table.DEFAULT.classifications();
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
  }
};

/**
 * Check data before load
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
 * @param {Element} item - Item that will be added
 * @returns {boolean} - True if it succed, else return false
 */
Table.prototype.addItem = function(item) {
  let result = this.elements.addItem(item) > 0;
  if (result) {
    let classifications = item.classifications.all();
    for (var i = 0; i < classifications.length; i++) {
      let classification = {
        classification: classifications[i],
        identifier: item.identifier
      };
      result = result && this.classifications.addItem(classification) > 0;
    }
  }
  return result;
};

/**
 * Remove item to Table
 * @param {Element} item - Item that will be removed
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
Table.prototype.removeItem = function(item, unique = false) {
  let result = this.elements.removeItem(item, unique);
  if (result) {
    let classifications = item.classifications.all();
    for (var i = 0; i < classifications.length; i++) {
      let classification = {
        classification: classifications[i],
        identifier: item.identifier
      };
      result = result && this.classifications.removeItem(classification, true);
    }
  }
  return result;
};

/**
 * Load data
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
