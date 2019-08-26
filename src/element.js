/**
 * @prettier
 */
'use strict';

/* Module Require */
const ListOfClassification = require('./listOfClassification.js');

/**
 * @constructs Element
 * @example <caption>Example usage of 'contructor' (with paramters)</caption>
 * let element = new Element('xxx-xxx-xxx', myClassification); // According myClassification (instance of ListOfClassification) contain your data
 * // returns an instance of Element with properties :
 * // - identifier : 'xxx-xxx-xxx'
 * // - classifications : [ListOfClassification]
 * @example <caption>Example usage of 'contructor' (with default values)</caption>
 * let element = new Element(); // According myClassification (instance of ListOfClassification) contain your data
 * // returns an instance of Element with properties :
 * // - identifier : null
 * // - classifications : new ListOfClassification() (empty)
 * @param {string} [identifier] - Identifier of Element
 * @param {ListOfClassification} [classifications] - Classifications of elements
 * @returns {Element} - An instance of Element
 */
const Element = function(identifier, classifications) {
  this.identifier = typeof identifier === 'string' ? identifier : Element.DEFAULT.identifier();
  this.classifications =
    typeof classifications !== 'undefined' && ListOfClassification.isValid(classifications)
      ? classifications
      : Element.DEFAULT.classifications();
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
 * @example <caption>Example usage of 'check' function (success)</caption>
 * let element = new Element('xxx-xxx-xxx', myClassification).save();
 * Element.check(element); // returns true
 * @example <caption>Example usage of 'check' function (fail)</caption>
 * let element = {'xxx-xxx-xxx', myClassification}; // invalid data, only use .save() function to build correct data structure that can be loaded
 * Element.check(element); // returns false
 * @param {Object} data - Data that will be checked (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Element.check = function(data) {
  return typeof data === 'object' && typeof data.identifier === 'string' && Array.isArray(data.classifications);
};

/**
 * Validate data
 * @example <caption>Example usage of 'isValid' function (success)</caption>
 * let element = new Element('xxx-xxx-xxx', myClassification).save();
 * Element.isValid(element); // returns true
 * @example <caption>Example usage of 'isValid' function (fail)</caption>
 * let element = {'xxx-xxx-xxx', myClassification}; // invalid data, only use new Element() to build valid data
 * Element.isValid(element); // returns false
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
 * @example <caption>Example usage of 'load' function (success)</caption>
 * let data = new Element('xxx-xxx-xxx', myClassification).save();
 *   element = new Element();
 * element.load(data); // returns true
 * console.log(element); // outuput : [Element]
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = {'xxx-xxx-xxx', myClassification}, // invalid data, only use .save() function to build correct data structure that can be loaded
 *   element = new Classification();
 * element.load(data); // returns false
 * console.log(element); // outuput : [Element] (with default values)
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
 * @example <caption>Example usage of 'save' function</caption>
 * let element = new Element('xxx-xxx-xxx', myClassification);
 * element.save(); // returns {'identifier': 'xxx-xxx-xxx', 'classifications': [{}, ...]}
 * @returns {Object} - An object representation of save
 */
Element.prototype.save = function() {
  return {
    'identifier': this.identifier,
    'classifications': this.classifications.save()
  };
};

module.exports = Element;
