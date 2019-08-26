/**
 * @prettier
 */
'use strict';

/* Module Require */

/**
 * @constructs Classification
 * @example <caption>Example usage of 'contructor' (with paramters)</caption>
 * let classification = new Classification(1, 'geology');
 * // returns an instance of Classification with properties :
 * // - level : 1
 * // - value : geology
 * @example <caption>Example usage of 'contructor' (with default values)</caption>
 * let classification = new Classification();
 * // returns an instance of Classification with properties :
 * // - level : -1
 * // - value : undefined
 * @param {number} [level=-1] - Classification Level
 * @param {string} [value=undefined] - Classification Value
 * @returns {Classification} - An instance of Classifier
 */
const Classification = function(level, value) {
  this.level = typeof level === 'number' && level >= 0 ? level : Classification.DEFAULT.level();
  this.value = typeof value !== 'undefined' ? value : Classification.DEFAULT.value();
  return this;
};

/* Default values */
Classification.DEFAULT = {
  'level': function() {
    return -1;
  },
  'value': function() {
    return undefined;
  }
};

/**
 * Check data before load
 * @example <caption>Example usage of 'check' function (success)</caption>
 * let classification = new Classification(1, 'geology').save();
 * Classification.check(classification); // returns true
 * @example <caption>Example usage of 'check' function (fail)</caption>
 * let classification = {'1', 'geology'}; // invalid data, only use .save() function to build correct data structure that can be loaded
 * Classification.check(classification); // returns false
 * @param {Object} data - Data that will be checked (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Classification.check = function(data) {
  return (
    typeof data === 'object' && typeof data.level === 'number' && data.level >= 0 && typeof data.value !== 'undefined'
  );
};

/**
 * Validate data
 * @example <caption>Example usage of 'isValid' function (success)</caption>
 * let classification = new Classification(1, 'geology');
 * Classification.isValid(classification); // returns true
 * @example <caption>Example usage of 'isValid' function (fail)</caption>
 * let classification = {'level' : 1, 'value' : 'geology'}; // invalid data, only use new Classification() to build valid data
 * Classification.isValid(classification); // returns false
 * @param {Object} data - Data that will be validated (call Classification constructor to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Classification.isValid = function(data) {
  return (
    data instanceof Classification &&
    typeof data.level === 'number' &&
    data.level >= 0 &&
    typeof data.value !== 'undefined'
  );
};

/**
 * Load data
 * @example <caption>Example usage of 'load' function (success)</caption>
 * let data = new Classification(1, 'geology').save(),
 *   classification = new Classification();
 * classification.load(data); // returns true
 * console.log(classification.toString()); // outuput : '1 - geology'
 * @example <caption>Example usage of 'load' function (fail)</caption>
 * let data = {'1' :'geology'}, // invalid data, only use .save() function to build correct data structure that can be loaded
 *   classification = new Classification();
 * classification.load(data); // returns false
 * console.log(classification.toString()); // outuput : '-1 - undefined'
 * @param {Object} data - Data that will be loaded (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
Classification.prototype.load = function(data) {
  if (!Classification.check(data)) return false;
  this.level = data.level;
  this.value = data.value;
  return Classification.isValid(this);
};

/**
 * Save data
 * @example <caption>Example usage of 'save' function</caption>
 * let classification = new Classification(1, 'geology');
 * classification.save(); // returns {'level': 1, 'value': 'geology'}
 * @returns {Object} - An object representation of save
 */
Classification.prototype.save = function() {
  return { 'level': this.level, 'value': this.value };
};

/**
 * Return String representation of this
 * @example <caption>Example usage of 'toString' function</caption>
 * let classification = new Classification(1, 'geology');
 * classification.toString(); // returns '1 - geology'
 * @returns {string} - String representation of this
 */
Classification.prototype.toString = function() {
  return this.level + ' - ' + this.value;
};

module.exports = Classification;
