/**
 * @prettier
 */
'use strict';

/* Module Require */
const utils = require('tdm-utils'),
  Classifier = require('../../../src/classifier.js'),
  List = require('../../../src/list.js'),
  Element = require('../../../src/element.js'),
  ListOfElement = require('../../../src/listOfElement.js'),
  Classification = require('../../../src/classification.js'),
  ListOfClassification = require('../../../src/listOfClassification.js'),
  Table = require('../../../src/table.js'),
  ListOfTable = require('../../../src/listOfTable.js');

/**
 * Wrapper of functions :
 */
const wrappers = {};

/**
 * - classifier
 *   - load()
 *   - save()
 *   - getClassifications()
 *   - getClassificationsOf()
 *   - getElements()
 *   - getElementsOf()
 */
wrappers.classifier = {
  'load': function(fn, item, cb) {
    return fn(item.arguments.filePath, function(err, res) {
      if (err) return cb(err.toString());
      return cb(res);
    });
  },
  'save': function(fn, item, cb) {
    return fn(item.arguments.filePath, function(err, res) {
      if (err) return cb(err.toString());
      return cb(res);
    });
  },
  'getClassifications': function(fn, item, cb) {
    return cb(fn(item.arguments.elementId));
  },
  'getClassificationsOf': function(fn, item, cb) {
    return cb(fn(item.arguments.tableId, item.arguments.elementId));
  },
  'getElements': function(fn, item, cb) {
    let classification = new Classification();
    classification.load(item.arguments.classification);
    return cb(fn(classification));
  },
  'getElementsOf': function(fn, item, cb) {
    let classification = new Classification();
    classification.load(item.arguments.classification);
    return cb(fn(item.arguments.tableId, classification));
  }
};

/**
 * - List
 *   - check()
 */
wrappers.List = {
  'check': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  }
};

/**
 * - list
 *   - getKey()
 *   - all()
 *   - indexesOf()
 *   - findBy()
 *   - findItem()
 *   - addItem()
 *   - removeItem()
 *   - addIndex()
 *   - removeIndex()
 *   - refreshIndexes()
 *   - all()
 */
wrappers.list = {
  'getKey': function(fn, item, cb) {
    return cb(fn(item.arguments.value));
  },
  'all': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'indexesOf': function(fn, item, cb) {
    return cb(fn(item.arguments.index, item.arguments.value));
  },
  'findBy': function(fn, item, cb) {
    return cb(fn(item.arguments.index, item.arguments.value));
  },
  'findItem': function(fn, item, cb) {
    let result = fn(item.arguments.item),
      res = result.length > 0 ? result[0].score : result.length;
    return cb(res);
  },
  'addItem': function(fn, item, cb) {
    return cb(fn(item.arguments.item));
  },
  'removeItem': function(fn, item, cb) {
    return cb(fn(item.arguments.item, item.arguments.unique));
  },
  'addIndex': function(fn, item, cb) {
    return cb(fn(item.arguments.index, item.arguments.value, item.arguments.collectionIndex));
  },
  'removeIndex': function(fn, item, cb) {
    return cb(fn(item.arguments.index, item.arguments.value, item.arguments.collectionIndex));
  },
  'load': function(fn, item, cb) {
    return cb(JSON.stringify(fn(item.arguments.data)));
  }
};

/**
 * - Classification
 *   - check()
 *   - isValid()
 */
wrappers.Classification = {
  'check': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'isValid': function(fn, item, cb) {
    let _item = new Classification();
    _item.load(item.arguments.data);
    item.arguments.data = _item;
    return cb(fn(item.arguments.data));
  }
};

/**
 * - classification
 *   - load()
 *   - save()
 */
wrappers.classification = {
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  }
};

/**
 * - listOfClassification
 *   - all()
 *   - load()
 *   - save()
 *   - findByLevel()
 *   - findByValue()
 *   - addItem()
 *   - removeItem()
 */
wrappers.listOfClassification = {
  'all': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'findByLevel': function(fn, item, cb) {
    let result = fn(item.arguments.level),
      res = result.length > 0 ? result[0].level : result.length;
    return cb(res);
  },
  'findByValue': function(fn, item, cb) {
    let result = fn(item.arguments.value),
      res = result.length > 0 ? result[0].value : result.length;
    return cb(res);
  },
  'addItem': function(fn, item, cb) {
    let _item = new Classification();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item));
  },
  'removeItem': function(fn, item, cb) {
    let _item = new Classification();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item, item.arguments.unique));
  }
};

/**
 * - Element
 *   - check()
 *   - isValid()
 */
wrappers.Element = {
  'check': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'isValid': function(fn, item, cb) {
    let _item = new Element();
    _item.load(item.arguments.data);
    item.arguments.data = _item;
    return cb(fn(item.arguments.data));
  }
};

/**
 * - element
 *   - load()
 *   - save()
 */
wrappers.element = {
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  }
};

/**
 * - listOfElement
 *   - all()
 *   - load()
 *   - save()
 *   - findByIdentifier()
 *   - addItem()
 *   - removeItem()
 */
wrappers.listOfElement = {
  'all': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'findByIdentifier': function(fn, item, cb) {
    let result = fn(item.arguments.identifier),
      res = result.length > 0 ? result[0].identifier : result.length;
    return cb(res);
  },
  'addItem': function(fn, item, cb) {
    let _item = new Element();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item));
  },
  'removeItem': function(fn, item, cb) {
    let _item = new Element();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item, item.arguments.unique));
  }
};

/**
 * - Table
 *   - check()
 *   - isValid()
 */
wrappers.Table = {
  'check': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'isValid': function(fn, item, cb) {
    let _item = new Table();
    _item.load(item.arguments.data);
    item.arguments.data = _item;
    return cb(fn(item.arguments.data));
  }
};

/**
 * - table
 *   - load()
 *   - save()
 *   - addItem()
 *   - removeItem()
 */
wrappers.table = {
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'addItem': function(fn, item, cb) {
    let _item = new Element();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item));
  },
  'removeItem': function(fn, item, cb) {
    let _item = new Element();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item, item.arguments.unique));
  }
};

/**
 * - listOfTable
 *   - all()
 *   - load()
 *   - save()
 *   - findByIdentifier()
 *   - addItem()
 *   - removeItem()
 */
wrappers.listOfTable = {
  'all': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'load': function(fn, item, cb) {
    return cb(fn(item.arguments.data));
  },
  'save': function(fn, item, cb) {
    return cb(JSON.stringify(fn()));
  },
  'findByIdentifier': function(fn, item, cb) {
    let result = fn(item.arguments.identifier),
      res = result.length > 0 ? result[0].identifier : result.length;
    return cb(res);
  },
  'addItem': function(fn, item, cb) {
    let _item = new Table();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item));
  },
  'removeItem': function(fn, item, cb) {
    let _item = new Table();
    _item.load(item.arguments.item);
    item.arguments.item = _item;
    return cb(fn(item.arguments.item, item.arguments.unique));
  }
};

module.exports = wrappers;
