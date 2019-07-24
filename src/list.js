/**
 * @prettier
 */
'use strict';

/* Module Require */
const md5 = require('md5');

/**
 * @constructs List
 * @param {Object} [options] - Options of constructor
 * @param {Object} [options.index] - An object containing indexes
 * @param {Object} [options.blackListKey] - An object containing blacklisted keys (it will no be indexed)
 * @param {Array} [options.collection] - An array containing items
 * @returns {List} - An instance of List
 */
const List = function(options) {
  let check = typeof options === 'object';
  this.index = check && typeof options.index === 'object' ? options.index : List.DEFAULT.index();
  this.blackListKey =
    check && typeof options.blackListKey === 'object' ? options.blackListKey : List.DEFAULT.blackListKey();
  this.collection = check && Array.isArray(options.collection) ? options.collection : List.DEFAULT.collection();
  return this;
};

/* Default values */
List.DEFAULT = {
  'index': function() {
    return {};
  },
  'blackListKey': function() {
    return {};
  },
  'collection': function() {
    return [];
  }
};

/**
 * Check data before load
 * @param {Object} data - Data that will be checked (call save function to generate this data)
 * @returns {boolean} - True if it succed, else return false
 */
List.check = function(data) {
  return (
    typeof data === 'object' &&
    (typeof data.collection !== 'undefined' && Array.isArray(data.collection)) &&
    (typeof data.index === 'undefined' || typeof data.index === 'object') &&
    (typeof data.blackListKey === 'undefined' || typeof data.blackListKey === 'object')
  );
};

/**
 * Get all items of List
 * @returns {Array} - An array containing all items
 */
List.prototype.all = function() {
  return this.collection;
};

/**
 * Get key of a given value
 * @param {Object|number|string} value - Given value
 * @returns {string} - Generated key
 */
List.prototype.getKey = function(value) {
  let type = typeof value,
    res = type === 'object' ? md5(JSON.stringify(value)) : value;
  return type + ':' + res;
};

/**
 * Return indexes of items with property 'index' having value 'value'
 * @param {string} index - Which index will be used to search for
 * @param {string} value - Wich value of index will be used to search for
 * @returns {Array} Return - An array of items indexes, or null if given index do not exist
 */
List.prototype.indexesOf = function(index, value) {
  let result = [],
    _index = this.index[index];
  if (typeof _index === 'undefined') return null;
  let key = this.getKey(value),
    _value = this.index[index][key];
  if (typeof _value === 'undefined') return result;
  return this.index[index][key];
};

/**
 * Find item of List with matching index 'index' with value 'value'
 * @param {string} index - Which index will be used
 * @param {string} value - Wich value of given index will be used
 * @returns {Array} - An array of items indexes founded
 */
List.prototype.findBy = function(index, value) {
  let result = [];
  if (typeof value === 'function') return result;
  let indexes = this.indexesOf(index, value);
  if (indexes === null) return result;
  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i];
    result.push(this.collection[index]);
  }
  return result;
};

/**
 * Return item of List matching with given item
 * @param {string|number|boolean|Object} item - Item you search for
 * @returns {Array} - An array of items found, or empty Array
 */
List.prototype.findItem = function(item) {
  let result = [],
    stats = {};
  if (typeof item !== 'object') return result;
  // Get all index returned for each key of item
  let max = Object.keys(item).length;
  for (let key in item) {
    let value = item[key];
    if (typeof item[key] === 'function') continue;
    if (typeof this.blackListKey[key] !== 'undefined') {
      max -= 1;
      continue;
    }
    let indexes = this.indexesOf(key, value);
    if (indexes === null) return result;
    if (indexes.length > 0) {
      for (let i = 0; i < indexes.length; i++) {
        let index = indexes[i];
        stats[index] = typeof stats[index] !== 'undefined' ? stats[index] + 1 : 1;
      }
    }
  }
  // If not a single item index has been return previoulsy, then return result
  if (!Object.keys(stats)) return result;
  // Build result of all index returned previously
  for (let key in stats) {
    result.push({
      item: this.collection[key],
      score: stats[key] / max,
      index: parseInt(key)
    });
  }
  return result;
};

/**
 * Add item
 * @param {Object} item - Item you want to add
 * @returns {number} - Length of collection
 */
List.prototype.addItem = function(item) {
  let copy = Object.assign(Object.create(Object.getPrototypeOf(item)), item);
  this.collection.push(copy);
  let value = this.collection.length - 1;
  for (let key in copy) {
    if (typeof this.blackListKey[key] === 'undefined' && typeof copy[key] !== 'function')
      this.addIndex(key, this.getKey(copy[key]), value);
  }
  return this.collection.length;
};

/**
 * Remove item
 * @param {Object} item - Item you want to remove
 * @param {boolean} [unique=false] - Will delete all items found by default, set true to delete only fisrt item found
 * @returns {boolean} - True if it succed, else return false
 */
List.prototype.removeItem = function(item, unique = false) {
  let items = this.findItem(item);
  if (items.length > 0) {
    let results = items.filter(function(el) {
      return el.score === 1;
    });
    if (results.length === 0) return false;
    if (unique) {
      results = [results[0]];
    }
    for (var i = 0; i < results.length; i++) {
      let result = results[i];
      for (let key in result.item) {
        if (typeof this.blackListKey[key] === 'undefined')
          this.removeIndex(key, this.getKey(result.item[key]), result.index);
      }
      this.collection[result.index] = null;
    }
  } else return false;
  return true;
};

/**
 * Add index
 * @param {string} index - Index name
 * @param {string} value - Index Value
 * @param {string} collectionIndex - Index (in collection) of item
 * @returns {number} - Length of Index collection
 */
List.prototype.addIndex = function(index, value, collectionIndex) {
  let _index = this.index[index];
  if (typeof _index === 'undefined') this.index[index] = {};
  let _key = this.index[index][value];
  if (typeof _key === 'undefined') this.index[index][value] = [];
  this.index[index][value].push(collectionIndex);
  return this.index[index][value].length;
};

/**
 * Remove index
 * @param {string} index - Index name
 * @param {string} value - Index Value
 * @param {string} collectionIndex - Index (in collection) of item
 * @returns {number} - Length of Index collection, or null
 */
List.prototype.removeIndex = function(index, value, collectionIndex) {
  let _index = this.index[index];
  if (typeof _index === 'undefined') return null;
  let _value = this.index[index][value];
  if (typeof _value === 'undefined') return null;
  let i = this.index[index][value].indexOf(collectionIndex);
  if (i < 0) return null;
  this.index[index][value].splice(i, 1);
  return this.index[index][value].length;
};

/**
 * Refresh all indexes
 * @returns {undefined} - undefined
 */
List.prototype.refreshIndexes = function() {
  let save = JSON.parse(JSON.stringify(this.collection));
  this.index = List.DEFAULT.index();
  this.collection = List.DEFAULT.collection();
  for (var i = 0; i < save.length; i++) {
    let item = save[i];
    this.addItem(item);
  }
};

/**
 * Load data
 * @param {Object} data - Data that will be loaded
 * @returns {List} - this
 */
List.prototype.load = function(data) {
  if (!List.check(data)) return false;
  this.collection = data.collection;
  this.index = data.index;
  if (typeof this.index === 'undefined') this.refreshIndexes();
  return this;
};

module.exports = List;