/**
 * @prettier
 */
'use strict';

/* Module Require */
const ListOfClassification = require('./listOfClassification.js');

/**
 * @constructs Element
 * @param {string} [identifier] - Identifier of Element
 * @param {ListOfClassification} [classifications] - Classifications of elements
 * @returns {Element} - An instance of Element
 */
const Element = function(identifier, classifications) {
  this.identifier = typeof identifier === 'string' ? identifier : Element.DEFAULT.identifier();
  this.classifications =
    classifications instanceof ListOfClassification ? classifications : Element.DEFAULT.classifications();
  return this;
};

/* Default values */
Element.DEFAULT = {
  'identifier': function() {
    return null;
  },
  'classifications': function() {
    return new ListOfClassification();
  }
};

/**
 * Check data before load
 * @param {Object} data - Data that will be checked (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Element.check = function(data) {
  return typeof data === 'object' && typeof data.identifier === 'string' && Array.isArray(data.classifications);
};

/**
 * Validate data
 * @param {Object} data - Data that will be validated
 * @returns {boolean} - True if it succed, else return false
 */
Element.isValid = function(data) {
  return (
    data instanceof Element &&
    typeof data.identifier === 'string' &&
    data.classifications instanceof ListOfClassification
  );
};

/**
 * Load data
 * @param {Object} data - Data that will be loaded (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Element.prototype.load = function(data) {
  if (!Element.check(data)) return false;
  let result = true;
  this.identifier = data.identifier;
  this.classifications = Element.DEFAULT.classifications();
  result = result && this.classifications.load(data.classifications) && Element.isValid(this);
  return result;
};

/**
 * Save data
 * @returns {Object} - An object representation of save
 */
Element.prototype.save = function() {
  return {
    'identifier': this.identifier,
    'classifications': this.classifications.save()
  };
};

module.exports = Element;
