/**
 * @prettier
 */
'use strict';

/* Module Require */
const md5 = require('md5');

/**
 * @constructs List
 * @example <caption>Example usage of 'contructor' (with paramters)</caption>
 * let options = {
 *   'index' : index, // Should be set only if you're sure
 *   'blackListKey': blackListKey, // Setting a property (ex : {'example': true}) will desactivate indexation of 'example' property of all item to the List collection
 *   'collection': collection // Should be set only if you're sure
 *   },
 *   list = new List(options);
 * // returns an instance of List with properties :
 * // - index : {}
 * // - blackListKey : {'example': true}
 * // - collection : []
 * @example <caption>Example usage of 'contructor' (with default values)</caption>
 * let list = new List();
 * // returns an instance of List with properties :
 * // - index : {}
 * // - blackListKey : {}
 * // - collection : []
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
 * @example <caption>Example usage of 'check' function (success)</caption>
 * let list = new List(options).save();
 * List.check(list); // returns true
 * @example <caption>Example usage of 'check' function (fail)</caption>
 * let list = {'index': {}, 'blackListKey':{}, 'collection': []}; // invalid data, only use .save() function to build correct data structure that can be loaded
 * List.check(list); // returns false
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
 * Validate data
 * @example <caption>Example usage of 'isValid' function (success)</caption>
 * let list = new List().save();
 * List.isValid(list); // returns true
 * @example <caption>Example usage of 'isValid' function (fail)</caption>
 * let list = {'index': {}, 'blackListKey':{}, 'collection': []}; // invalid data, only use new List() to build valid data
 * List.isValid(list); // returns false
 * @param {Object} data - Data that will be validated
 * @returns {boolean} - True if it succed, else return false
 */
List.isValid = function(data) {
  return (
    data instanceof List &&
    typeof data.index === 'object' &&
    typeof data.blackListKey === 'object' &&
    Array.isArray(data.collection)
  );
};

/**
 * Build key of a given value
 * @example <caption>Example usage of 'getKey' function</caption>
 * List.getKey('test'); // returns 'string:test'
 * List.getKey(1); // returns 'number:1'
 * List.getKey({'test': true}); // returns 'object:57c343a1ed724af972e07b93ca203922'
 * @param {Object|number|string} value - Given value
 * @returns {string} - Generated key
 */
List.getKey = function(value) {
  let type = typeof value,
    res = type === 'object' ? md5(JSON.stringify(value)) : value;
  return type + ':' + res;
};

/**
 * Get all items of List
 * @example <caption>Example usage of 'all' function</caption>
 * let list = new List();
 * list.addItem({'test': true});
 * list.all(); // returns [{'test': true}]
 * @returns {Array} - An array containing all items
 */
List.prototype.all = function() {
  return this.collection;
};

/**
 * Return indexes of items with property 'index' having value 'value'
 * @example <caption>Example usage of 'indexesOf' function</caption>
 * let list = new List();
 * list.addItem({'test': true});
 * list.indexesOf('test', true); // returns [0]
 * list.indexesOf(true, 'test'); // returns null
 * @param {string} index - Which index will be used to search for
 * @param {string} value - Wich value of index will be used to search for
 * @returns {Array} Return - An array of items indexes, or null if given index do not exist
 */
List.prototype.indexesOf = function(index, value) {
  let result = [],
    _index = this.index[index];
  if (typeof _index === 'undefined') return null;
  let key = List.getKey(value),
    _value = this.index[index][key];
  if (typeof _value === 'undefined') return result;
  return this.index[index][key];
};

/**
 * Find item of List with matching index 'index' with value 'value'
 * @example <caption>Example usage of 'findBy' function</caption>
 * let list = new List();
 * list.addItem({'test': true});
 * list.findBy('test', true); // returns [{'test': true}]
 * list.findBy(true, 'test'); // returns []
 * @param {string} index - Which index will be used
 * @param {string} value - Wich value of given index will be used
 * @returns {Array} - An array of items founded
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
 * @example <caption>Example usage of 'findItem' function</caption>
 * let list = new List();
 * list.addItem({'test': true});
 * list.findItem({'test': true}); // returns [{'item': {'test': true},'score': 1,'index': 0}]
 * // - item : item founded
 * // - score : matching score of item founded (number of properties matching / total number of properties)
 * // - index : index in collection (list.collection[index] will give you access to founded item)
 * list.findItem({true: 'test'}); // returns []
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
 * @example <caption>Example usage of 'addItem' function</caption>
 * let list = new List();
 * list.addItem({'test': true}); // return 1
 * list.addItem({'test': false}); // return 2
 * @param {Object} item - Item you want to add
 * @returns {number} - Length of collection
 */
List.prototype.addItem = function(item) {
  let copy = Object.assign(Object.create(Object.getPrototypeOf(item)), item);
  this.collection.push(copy);
  let value = this.collection.length - 1;
  for (let key in copy) {
    if (typeof this.blackListKey[key] === 'undefined' && typeof copy[key] !== 'function')
      this.addIndex(key, List.getKey(copy[key]), value);
  }
  return this.collection.length;
};

/**
 * Remove item
 * @example <caption>Example usage of 'removeItem' function</caption>
 * let list = new List();
 *
 * list.addItem({'test': true});
 * list.addItem({'test': true});
 * list.all().length // return 2
 * list.removeItem({'test': true}, true); // return true
 * list.removeItem({'test': true}); // return false
 *
 * list.addItem({'test': true});
 * list.all().length // return 1
 * list.removeItem({'test': true}); // return true
 * list.removeItem({'test': true}); // return false
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
          this.removeIndex(key, List.getKey(result.item[key]), result.index);
      }
      this.collection[result.index] = null;
    }
  } else return false;
  return true;
};

/**
 * Add index
 * @example <caption>Example usage of 'addIndex' function</caption>
 * let list = new List();
 * list.addIndex('test', true, 0); // return 1
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
 * @example <caption>Example usage of 'removeIndex' function</caption>
 * let list = new List();
 * list.addIndex('test', true, 0); // return 1
 * list.removeIndex('test', true, 0); // return 0
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
 * Refresh all indexes (must use it indexes are 'broken')
 * @example <caption>Example usage of 'refreshIndexes' function</caption>
 * let list = new List();
 * list.refreshIndexes(); // return undefined
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
 * @example <caption>Example usage of 'load' function</caption>
 * let list = new List();
 * list.load({'collection': [{'test': true}, {'test': false}]}); // return [List]
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
