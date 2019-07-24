/**
 * @prettier
 */
'use strict';

/* Module Require */

/**
 * @constructs Classification
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
 * @param {Object} data - Data that will be validated
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
 * @returns {Object} - An object representation of save
 */
Classification.prototype.save = function() {
  return { 'level': this.level, 'value': this.value };
};

module.exports = Classification;
