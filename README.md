# tdm-multicat

**tdm-multicat** is a tdm module for classification by matching identifier. It can be used to store classifications of documents.

## Installation

Using npm :

```shell
$ npm i -g tdm-multicat
$ npm i --save tdm-multicat
```
## Uses

Using Node :

```js
/* require of Multicat module */
const Multicat = require('tdm-multicat');

/* Build new Instance of Classifier */
let classifier = new Multicat.Classifier();

/* Build new Instance of List */
let list = new Multicat.List();

/* Build new Instance of Classification */
let classification = new Multicat.Classification();

/* Build new Instance of ListOfClassification */
let listOfClassification = new Multicat.ListOfClassification();

/* Build new Instance of Element */
let element = new Multicat.Element();

/* Build new Instance of ListOfElement */
let listOfElement = new Multicat.ListOfElement();

/* Build new Instance of Table */
let table = new Multicat.Table();

/* Build new Instance of ListOfTable */
let listOfTable = new Multicat.ListOfTable();
```

## Launch tests

```shell
$ npm run test
```

## Build documentation

```shell
$ npm run docs
```

## API Documentation

Following classes are packaged into 'Multicat' variable.

You must access it adding 'Multicat.' prefix in your code (see Uses section for more details)

## Classes

<dl>
<dt><a href="#Classification">Classification</a></dt>
<dd></dd>
<dt><a href="#Classifier">Classifier</a></dt>
<dd></dd>
<dt><a href="#Element">Element</a></dt>
<dd></dd>
<dt><a href="#List">List</a></dt>
<dd></dd>
<dt><a href="#ListOfClassification">ListOfClassification</a></dt>
<dd></dd>
<dt><a href="#ListOfElement">ListOfElement</a></dt>
<dd></dd>
<dt><a href="#ListOfTable">ListOfTable</a></dt>
<dd></dd>
<dt><a href="#Table">Table</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>Function called when procces end</p>
</dd>
</dl>

<a name="Classification"></a>

## Classification
**Kind**: global class  

* [Classification](#Classification)
    * [new Classification([level], [value])](#new_Classification_new)
    * _instance_
        * [.load(data)](#Classification+load) ⇒ <code>boolean</code>
        * [.save()](#Classification+save) ⇒ <code>Object</code>
        * [.toString()](#Classification+toString) ⇒ <code>string</code>
    * _static_
        * [.check(data)](#Classification.check) ⇒ <code>boolean</code>
        * [.isValid(data)](#Classification.isValid) ⇒ <code>boolean</code>

<a name="new_Classification_new"></a>

### new Classification([level], [value])
**Returns**: [<code>Classification</code>](#Classification) - - An instance of Classifier  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [level] | <code>number</code> | <code>-1</code> | Classification Level |
| [value] | <code>string</code> |  | Classification Value |

**Example** *(Example usage of &#x27;contructor&#x27; (with paramters))*  
```js
let classification = new Classification(1, 'geology');
// returns an instance of Classification with properties :
// - level : 1
// - value : geology
```
**Example** *(Example usage of &#x27;contructor&#x27; (with default values))*  
```js
let classification = new Classification();
// returns an instance of Classification with properties :
// - level : -1
// - value : undefined
```
<a name="Classification+load"></a>

### classification.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function (success))*  
```js
let data = new Classification(1, 'geology').save(),
  classification = new Classification();
classification.load(data); // returns true
console.log(classification.toString()); // outuput : '1 - geology'
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = {'1' :'geology'}, // invalid data, only use .save() function to build correct data structure that can be loaded
  classification = new Classification();
classification.load(data); // returns false
console.log(classification.toString()); // outuput : '-1 - undefined'
```
<a name="Classification+save"></a>

### classification.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Classification</code>](#Classification)  
**Returns**: <code>Object</code> - - An object representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let classification = new Classification(1, 'geology');
classification.save(); // returns {'level': 1, 'value': 'geology'}
```
<a name="Classification+toString"></a>

### classification.toString() ⇒ <code>string</code>
Return String representation of this

**Kind**: instance method of [<code>Classification</code>](#Classification)  
**Returns**: <code>string</code> - - String representation of this  
**Example** *(Example usage of &#x27;toString&#x27; function)*  
```js
let classification = new Classification(1, 'geology');
classification.toString(); // returns '1 - geology'
```
<a name="Classification.check"></a>

### Classification.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

**Example** *(Example usage of &#x27;check&#x27; function (success))*  
```js
let classification = new Classification(1, 'geology').save();
Classification.check(classification); // returns true
```
**Example** *(Example usage of &#x27;check&#x27; function (fail))*  
```js
let classification = {'1', 'geology'}; // invalid data, only use .save() function to build correct data structure that can be loaded
Classification.check(classification); // returns false
```
<a name="Classification.isValid"></a>

### Classification.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be validated (call Classification constructor to generate this data) |

**Example** *(Example usage of &#x27;isValid&#x27; function (success))*  
```js
let classification = new Classification(1, 'geology');
Classification.isValid(classification); // returns true
```
**Example** *(Example usage of &#x27;isValid&#x27; function (fail))*  
```js
let classification = {'level' : 1, 'value' : 'geology'}; // invalid data, only use new Classification() to build valid data
Classification.isValid(classification); // returns false
```
<a name="Classifier"></a>

## Classifier
**Kind**: global class  

* [Classifier](#Classifier)
    * [new Classifier([options])](#new_Classifier_new)
    * [.getClassifications(elementId)](#Classifier+getClassifications) ⇒ <code>Array</code>
    * [.getClassificationsOf(tableId, elementId)](#Classifier+getClassificationsOf) ⇒ <code>Array</code>
    * [.getElements(classification)](#Classifier+getElements) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
    * [.getElementsOf(tableId, classification)](#Classifier+getElementsOf) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
    * [.getRegisters()](#Classifier+getRegisters) ⇒ <code>Object</code>
    * [.getRegistersOf(tableId)](#Classifier+getRegistersOf) ⇒ <code>Object</code>
    * [.load(filePath, cb)](#Classifier+load) ⇒ <code>undefined</code>
    * [.save(filePath, cb)](#Classifier+save) ⇒ <code>undefined</code>

<a name="new_Classifier_new"></a>

### new Classifier([options])
**Returns**: [<code>Classifier</code>](#Classifier) - - An instance of Classifier  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options of constructor |
| [options.tables] | [<code>ListOfTable</code>](#ListOfTable) | An instance of listOfTable |

**Example** *(Example usage of &#x27;contructor&#x27; (with paramters))*  
```js
let options = { 'tables': myTables }, // According myTables (instance of ListOfTable) contain your data
  classifier = new Classifier(options);
// returns an instance of Classifier with properties :
// - tables : [ListOfTable]
```
**Example** *(Example usage of &#x27;contructor&#x27; (with default values))*  
```js
let classifier = new Classifier();
// returns an instance of Classifier with properties :
// - tables : new ListOfTable() (empty)
```
<a name="Classifier+getClassifications"></a>

### classifier.getClassifications(elementId) ⇒ <code>Array</code>
Return categories of all Tables with given elementId

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Array</code> - - An array containing all classification associated with this elementId  

| Param | Type | Description |
| --- | --- | --- |
| elementId | <code>string</code> | Identifier of given element |

**Example** *(Example usage of &#x27;getClassifications&#x27; function (success))*  
```js
// According there is an element identified by 'xxx-xxx-xxx'
classifier.getClassifications('xxx-xxx-xxx'); // returns : [Object, Object, ...]
```
**Example** *(Example usage of &#x27;getClassifications&#x27; function (fail))*  
```js
// According there is no element identified by 'xxx-xxx-xxx'
classifier.getClassifications('xxx-xxx-xxx'); // returns : []
```
<a name="Classifier+getClassificationsOf"></a>

### classifier.getClassificationsOf(tableId, elementId) ⇒ <code>Array</code>
Get categories of given Table

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Array</code> - - An array containing all classification associated with this elementId of given classification  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Identifier of classification |
| elementId | <code>string</code> | Identifier of given element |

**Example** *(Example usage of &#x27;getClassificationsOf&#x27; function (success))*  
```js
// According there is an element identified by 'xxx-xxx-xxx' in table 'myTable'
classifier.getClassificationsOf('myTable', 'xxx-xxx-xxx'); // returns : [Object, Object, ...]
```
**Example** *(Example usage of &#x27;getClassificationsOf&#x27; function (fail))*  
```js
// According there is no element identified by 'xxx-xxx-xxx' in table 'myTable'
classifier.getClassificationsOf('myTable', 'xxx-xxx-xxx'); // returns : []
```
<a name="Classifier+getElements"></a>

### classifier.getElements(classification) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
Return Elements of all Tables with given classification

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: [<code>Array.&lt;Element&gt;</code>](#Element) - - An array containing all elements associated with this classification  

| Param | Type | Description |
| --- | --- | --- |
| classification | [<code>Classification</code>](#Classification) | Classification of element |

**Example** *(Example usage of &#x27;getElements&#x27; function (success))*  
```js
// According there is at least one element with this classification
classifier.getElements(new Classification(1, 'geology')); // returns : [Element, Element, ...]
```
**Example** *(Example usage of &#x27;getElements&#x27; function (fail))*  
```js
// According there is no element identified with this classification
classifier.getElements(new Classification(1, 'geology')); // returns : [] (no record)
classifier.getElements({'1', 'geology'}); // returns : [] (bad parameter)
```
<a name="Classifier+getElementsOf"></a>

### classifier.getElementsOf(tableId, classification) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
Get Elements of given Table with given classification

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: [<code>Array.&lt;Element&gt;</code>](#Element) - - An array containing all elements associated with this classification  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Identifier of classification |
| classification | [<code>Classification</code>](#Classification) | Classification of element |

**Example** *(Example usage of &#x27;getElementsOf&#x27; function (success))*  
```js
// According there is at least one element with this classification in table 'myTable'
classifier.getElementsOf('myTable', new Classification(1, 'geology')); // returns : [Element, Element, ...]
```
**Example** *(Example usage of &#x27;getElementsOf&#x27; function (fail))*  
```js
// According there is no element identified with this classification in table 'myTable'
classifier.getElementsOf('myTable', new Classification(1, 'geology')); // returns : []
classifier.getElementsOf('myTable', {'1', 'geology'}); // returns : []
```
<a name="Classifier+getRegisters"></a>

### classifier.getRegisters() ⇒ <code>Object</code>
Get alls registers
Get Elements of given Table with given classification

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Object</code> - - An Object containing all registers  
**Example** *(Example usage of &#x27;getRegisters&#x27; function)*  
```js
// According there is at least one element
classifier.getRegisters(); // returns : { '1 - geology': [Element, Element, ...] }
```
<a name="Classifier+getRegistersOf"></a>

### classifier.getRegistersOf(tableId) ⇒ <code>Object</code>
Get register of given Table

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Object</code> - - An Object containing register  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Identifier of classification |

**Example** *(Example usage of &#x27;getRegistersOf&#x27; function)*  
```js
// According there is at least one element in table 'myTable'
classifier.getRegistersOf(); // returns : { ... }
```
<a name="Classifier+load"></a>

### classifier.load(filePath, cb) ⇒ <code>undefined</code>
Load data of given file (that must be create by save function)

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>undefined</code> - - undefined  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | Path of file containing saved data |
| cb | [<code>callback</code>](#callback) | Function called when procces end |

**Example** *(Example usage of &#x27;load&#x27; function)*  
```js
classifier.load('./myData.json', function(err, res) {
  if (err) return err; // will contain fs errors
  console.log(res); // output : true if it succed, else false
}); // returns : undefined
```
<a name="Classifier+save"></a>

### classifier.save(filePath, cb) ⇒ <code>undefined</code>
Save data at given filePath (that will be loaded by load function)

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>undefined</code> - - undefined  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | Path of file that will contain saved data |
| cb | [<code>callback</code>](#callback) | Function called when procces end |

**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
classifier.save('./myData.json', function(err, res) {
  if (err) return err; // will contain fs errors
  console.log(res); // output : true if it succed, else false
}); // returns : undefined
```
<a name="Element"></a>

## Element
**Kind**: global class  

* [Element](#Element)
    * [new Element([identifier], [classifications])](#new_Element_new)
    * _instance_
        * [.load(data)](#Element+load) ⇒ <code>boolean</code>
        * [.save()](#Element+save) ⇒ <code>Object</code>
    * _static_
        * [.check(data)](#Element.check) ⇒ <code>boolean</code>
        * [.isValid(data)](#Element.isValid) ⇒ <code>boolean</code>

<a name="new_Element_new"></a>

### new Element([identifier], [classifications])
**Returns**: [<code>Element</code>](#Element) - - An instance of Element  

| Param | Type | Description |
| --- | --- | --- |
| [identifier] | <code>string</code> | Identifier of Element |
| [classifications] | [<code>ListOfClassification</code>](#ListOfClassification) | Classifications of elements |

**Example** *(Example usage of &#x27;contructor&#x27; (with paramters))*  
```js
let element = new Element('xxx-xxx-xxx', myClassification); // According myClassification (instance of ListOfClassification) contain your data
// returns an instance of Element with properties :
// - identifier : 'xxx-xxx-xxx'
// - classifications : [ListOfClassification]
```
**Example** *(Example usage of &#x27;contructor&#x27; (with default values))*  
```js
let element = new Element(); // According myClassification (instance of ListOfClassification) contain your data
// returns an instance of Element with properties :
// - identifier : null
// - classifications : new ListOfClassification() (empty)
```
<a name="Element+load"></a>

### element.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function (success))*  
```js
let data = new Element('xxx-xxx-xxx', myClassification).save();
  element = new Element();
element.load(data); // returns true
console.log(element); // outuput : [Element]
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = {'xxx-xxx-xxx', myClassification}, // invalid data, only use .save() function to build correct data structure that can be loaded
  element = new Classification();
element.load(data); // returns false
console.log(element); // outuput : [Element] (with default values)
```
<a name="Element+save"></a>

### element.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Object</code> - - An object representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let element = new Element('xxx-xxx-xxx', myClassification);
element.save(); // returns {'identifier': 'xxx-xxx-xxx', 'classifications': [{}, ...]}
```
<a name="Element.check"></a>

### Element.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

**Example** *(Example usage of &#x27;check&#x27; function (success))*  
```js
let element = new Element('xxx-xxx-xxx', myClassification).save();
Element.check(element); // returns true
```
**Example** *(Example usage of &#x27;check&#x27; function (fail))*  
```js
let element = {'xxx-xxx-xxx', myClassification}; // invalid data, only use .save() function to build correct data structure that can be loaded
Element.check(element); // returns false
```
<a name="Element.isValid"></a>

### Element.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be validated |

**Example** *(Example usage of &#x27;isValid&#x27; function (success))*  
```js
let element = new Element('xxx-xxx-xxx', myClassification).save();
Element.isValid(element); // returns true
```
**Example** *(Example usage of &#x27;isValid&#x27; function (fail))*  
```js
let element = {'xxx-xxx-xxx', myClassification}; // invalid data, only use new Element() to build valid data
Element.isValid(element); // returns false
```
<a name="List"></a>

## List
**Kind**: global class  

* [List](#List)
    * [new List([options])](#new_List_new)
    * _instance_
        * [.all()](#List+all) ⇒ <code>Array</code>
        * [.indexesOf(index, value)](#List+indexesOf) ⇒ <code>Array</code>
        * [.findBy(index, value)](#List+findBy) ⇒ <code>Array</code>
        * [.findItem(item)](#List+findItem) ⇒ <code>Array</code>
        * [.addItem(item)](#List+addItem) ⇒ <code>number</code>
        * [.removeItem(item, [unique])](#List+removeItem) ⇒ <code>boolean</code>
        * [.addIndex(index, value, collectionIndex)](#List+addIndex) ⇒ <code>number</code>
        * [.removeIndex(index, value, collectionIndex)](#List+removeIndex) ⇒ <code>number</code>
        * [.refreshIndexes()](#List+refreshIndexes) ⇒ <code>undefined</code>
        * [.load(data)](#List+load) ⇒ [<code>List</code>](#List)
    * _static_
        * [.check(data)](#List.check) ⇒ <code>boolean</code>
        * [.isValid(data)](#List.isValid) ⇒ <code>boolean</code>
        * [.getKey(value)](#List.getKey) ⇒ <code>string</code>

<a name="new_List_new"></a>

### new List([options])
**Returns**: [<code>List</code>](#List) - - An instance of List  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options of constructor |
| [options.index] | <code>Object</code> | An object containing indexes |
| [options.blackListKey] | <code>Object</code> | An object containing blacklisted keys (it will no be indexed) |
| [options.collection] | <code>Array</code> | An array containing items |

**Example** *(Example usage of &#x27;contructor&#x27; (with paramters))*  
```js
let options = {
  'index' : index, // Should be set only if you're sure
  'blackListKey': blackListKey, // Setting a property (ex : {'example': true}) will desactivate indexation of 'example' property of all item to the List collection
  'collection': collection // Should be set only if you're sure
  },
  list = new List(options);
// returns an instance of List with properties :
// - index : {}
// - blackListKey : {'example': true}
// - collection : []
```
**Example** *(Example usage of &#x27;contructor&#x27; (with default values))*  
```js
let list = new List();
// returns an instance of List with properties :
// - index : {}
// - blackListKey : {}
// - collection : []
```
<a name="List+all"></a>

### list.all() ⇒ <code>Array</code>
Get all items of List

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array containing all items  
**Example** *(Example usage of &#x27;all&#x27; function)*  
```js
let list = new List();
list.addItem({'test': true});
list.all(); // returns [{'test': true}]
```
<a name="List+indexesOf"></a>

### list.indexesOf(index, value) ⇒ <code>Array</code>
Return indexes of items with property 'index' having value 'value'

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - Return - An array of items indexes, or null if given index do not exist  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Which index will be used to search for |
| value | <code>string</code> | Wich value of index will be used to search for |

**Example** *(Example usage of &#x27;indexesOf&#x27; function)*  
```js
let list = new List();
list.addItem({'test': true});
list.indexesOf('test', true); // returns [0]
list.indexesOf(true, 'test'); // returns null
```
<a name="List+findBy"></a>

### list.findBy(index, value) ⇒ <code>Array</code>
Find item of List with matching index 'index' with value 'value'

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array of items founded  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Which index will be used |
| value | <code>string</code> | Wich value of given index will be used |

**Example** *(Example usage of &#x27;findBy&#x27; function)*  
```js
let list = new List();
list.addItem({'test': true});
list.findBy('test', true); // returns [{'test': true}]
list.findBy(true, 'test'); // returns []
```
<a name="List+findItem"></a>

### list.findItem(item) ⇒ <code>Array</code>
Return item of List matching with given item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array of items found, or empty Array  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Object</code> | Item you search for |

**Example** *(Example usage of &#x27;findItem&#x27; function)*  
```js
let list = new List();
list.addItem({'test': true});
list.findItem({'test': true}); // returns [{'item': {'test': true},'score': 1,'index': 0}]
// - item : item founded
// - score : matching score of item founded (number of properties matching / total number of properties)
// - index : index in collection (list.collection[index] will give you access to founded item)
list.findItem({true: 'test'}); // returns []
```
<a name="List+addItem"></a>

### list.addItem(item) ⇒ <code>number</code>
Add item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>number</code> - - Length of collection  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | Item you want to add |

**Example** *(Example usage of &#x27;addItem&#x27; function)*  
```js
let list = new List();
list.addItem({'test': true}); // return 1
list.addItem({'test': false}); // return 2
```
<a name="List+removeItem"></a>

### list.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Object</code> |  | Item you want to remove |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

**Example** *(Example usage of &#x27;removeItem&#x27; function)*  
```js
let list = new List();

list.addItem({'test': true});
list.addItem({'test': true});
list.all().length // return 2
list.removeItem({'test': true}, true); // return true
list.removeItem({'test': true}); // return false

list.addItem({'test': true});
list.all().length // return 1
list.removeItem({'test': true}); // return true
list.removeItem({'test': true}); // return false
```
<a name="List+addIndex"></a>

### list.addIndex(index, value, collectionIndex) ⇒ <code>number</code>
Add index

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>number</code> - - Length of Index collection  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Index name |
| value | <code>string</code> | Index Value |
| collectionIndex | <code>string</code> | Index (in collection) of item |

**Example** *(Example usage of &#x27;addIndex&#x27; function)*  
```js
let list = new List();
list.addIndex('test', true, 0); // return 1
```
<a name="List+removeIndex"></a>

### list.removeIndex(index, value, collectionIndex) ⇒ <code>number</code>
Remove index

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>number</code> - - Length of Index collection, or null  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Index name |
| value | <code>string</code> | Index Value |
| collectionIndex | <code>string</code> | Index (in collection) of item |

**Example** *(Example usage of &#x27;removeIndex&#x27; function)*  
```js
let list = new List();
list.addIndex('test', true, 0); // return 1
list.removeIndex('test', true, 0); // return 0
```
<a name="List+refreshIndexes"></a>

### list.refreshIndexes() ⇒ <code>undefined</code>
Refresh all indexes (must use it indexes are 'broken')

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>undefined</code> - - undefined  
**Example** *(Example usage of &#x27;refreshIndexes&#x27; function)*  
```js
let list = new List();
list.refreshIndexes(); // return undefined
```
<a name="List+load"></a>

### list.load(data) ⇒ [<code>List</code>](#List)
Load data

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: [<code>List</code>](#List) - - this  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded |

**Example** *(Example usage of &#x27;load&#x27; function)*  
```js
let list = new List();
list.load({'collection': [{'test': true}, {'test': false}]}); // return [List]
```
<a name="List.check"></a>

### List.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

**Example** *(Example usage of &#x27;check&#x27; function (success))*  
```js
let list = new List(options).save();
List.check(list); // returns true
```
**Example** *(Example usage of &#x27;check&#x27; function (fail))*  
```js
let list = {'index': {}, 'blackListKey':{}, 'collection': []}; // invalid data, only use .save() function to build correct data structure that can be loaded
List.check(list); // returns false
```
<a name="List.isValid"></a>

### List.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be validated |

**Example** *(Example usage of &#x27;isValid&#x27; function (success))*  
```js
let list = new List().save();
List.isValid(list); // returns true
```
**Example** *(Example usage of &#x27;isValid&#x27; function (fail))*  
```js
let list = {'index': {}, 'blackListKey':{}, 'collection': []}; // invalid data, only use new List() to build valid data
List.isValid(list); // returns false
```
<a name="List.getKey"></a>

### List.getKey(value) ⇒ <code>string</code>
Build key of a given value

**Kind**: static method of [<code>List</code>](#List)  
**Returns**: <code>string</code> - - Generated key  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> \| <code>number</code> \| <code>string</code> | Given value |

**Example** *(Example usage of &#x27;getKey&#x27; function)*  
```js
List.getKey('test'); // returns 'string:test'
List.getKey(1); // returns 'number:1'
List.getKey({'test': true}); // returns 'object:57c343a1ed724af972e07b93ca203922'
```
<a name="ListOfClassification"></a>

## ListOfClassification
**Kind**: global class  

* [ListOfClassification](#ListOfClassification)
    * [.all()](#ListOfClassification+all) ⇒ <code>Array</code>
    * [.findByLevel(level)](#ListOfClassification+findByLevel) ⇒ <code>Object</code>
    * [.findByValue(value)](#ListOfClassification+findByValue) ⇒ <code>Object</code>
    * [.addItem(item)](#ListOfClassification+addItem) ⇒ <code>boolean</code>
    * [.removeItem(item, [unique])](#ListOfClassification+removeItem) ⇒ <code>boolean</code>
    * [.load(data)](#ListOfClassification+load) ⇒ <code>boolean</code>
    * [.save()](#ListOfClassification+save) ⇒ <code>Array</code>

<a name="ListOfClassification+all"></a>

### listOfClassification.all() ⇒ <code>Array</code>
Get all items of ListOfClassification

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Array</code> - - An array containing all items  
**Example** *(Example usage of &#x27;all&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item);
listOfClassification.all(); // returns [item]
```
<a name="ListOfClassification+findByLevel"></a>

### listOfClassification.findByLevel(level) ⇒ <code>Object</code>
Find items of ListOfClassification with matching level

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Object</code> - - Items with given level  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | Item level |

**Example** *(Example usage of &#x27;findByLevel&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item);
listOfClassification.findByLevel(1); // returns [item]
listOfClassification.findByLevel(0); // returns []
```
<a name="ListOfClassification+findByValue"></a>

### listOfClassification.findByValue(value) ⇒ <code>Object</code>
Find item of ListOfClassification with matching value

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Object</code> - - Item with given value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Item value |

**Example** *(Example usage of &#x27;findByValue&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item);
listOfClassification.findByValue('geology'); // returns [item]
listOfClassification.findByValue('test'); // returns []
```
<a name="ListOfClassification+addItem"></a>

### listOfClassification.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfClassification

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Classification</code>](#Classification) | Item that will be added |

**Example** *(Example usage of &#x27;addItem&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item); // returns true
listOfClassification.addItem({'level': 1, 'value': 'geology'}); // returns false (because you must use an instance of Classification to success)
```
<a name="ListOfClassification+removeItem"></a>

### listOfClassification.removeItem(item, [unique]) ⇒ <code>boolean</code>
Add item to ListOfClassification

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Classification</code>](#Classification) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

**Example** *(Example usage of &#x27;removeItem&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item);
listOfClassification.addItem(item);
listOfClassification.addItem(item); // will contain 3 copies of 'item'
listOfClassification.removeItem(item, true); // returns true (remove first copy of item)
listOfClassification.removeItem(item); // returns true (remove all copy of item)
listOfClassification.removeItem(item); // returns false (because there is not anymore copy of item)
```
<a name="ListOfClassification+load"></a>

### listOfClassification.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function (success))*  
```js
let item = new Classification(1, 'geology'),
  data = new ListOfClassification(),
  listOfClassification = new ListOfClassification();
data.addItem(item);
listOfClassification.load(data.save()); // returns true
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = [{'1' :'geology'}], // invalid data, only use .save() function to build correct data structure that can be loaded
  listOfClassification = new Classification();
listOfClassification.load(data); // returns false
```
<a name="ListOfClassification+save"></a>

### listOfClassification.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Array</code> - - An array representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let item = new Classification(1, 'geology'),
  listOfClassification = new ListOfClassification();
listOfClassification.addItem(item);
listOfClassification.save(); // returns {'level': 1, 'value': 'geology'}
```
<a name="ListOfElement"></a>

## ListOfElement
**Kind**: global class  

* [ListOfElement](#ListOfElement)
    * [.all()](#ListOfElement+all) ⇒ <code>Array</code>
    * [.findByIdentifier(identifier)](#ListOfElement+findByIdentifier) ⇒ <code>Object</code>
    * [.addItem(item)](#ListOfElement+addItem) ⇒ <code>boolean</code>
    * [.removeItem(item, [unique])](#ListOfElement+removeItem) ⇒ <code>boolean</code>
    * [.load(data)](#ListOfElement+load) ⇒ <code>boolean</code>
    * [.save()](#ListOfElement+save) ⇒ <code>Array</code>

<a name="ListOfElement+all"></a>

### listOfElement.all() ⇒ <code>Array</code>
Get all items of ListOfElement

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>Array</code> - - An array containing all items  
**Example** *(Example usage of &#x27;all&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  listOfElement = new ListOfElement();
listOfElement.addItem(item);
listOfElement.all(); // returns [item]
```
<a name="ListOfElement+findByIdentifier"></a>

### listOfElement.findByIdentifier(identifier) ⇒ <code>Object</code>
Find items of ListOfElement with matching identifier

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>Object</code> - - Items with given identifier  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>number</code> | Item identifier |

**Example** *(Example usage of &#x27;findByIdentifier&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  listOfElement = new ListOfElement();
listOfElement.addItem(item);
listOfElement.findByIdentifier('xxx-xxx-xxx'); // returns [item]
listOfElement.findByIdentifier('x'); // returns []
```
<a name="ListOfElement+addItem"></a>

### listOfElement.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfElement

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Element</code>](#Element) | Item that will be added |

**Example** *(Example usage of &#x27;addItem&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  listOfElement = new ListOfElement();
listOfElement.addItem(item); // returns true
listOfElement.addItem({'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}); // returns false (because you must use an instance of Element to success)
```
<a name="ListOfElement+removeItem"></a>

### listOfElement.removeItem(item, [unique]) ⇒ <code>boolean</code>
Add item to ListOfElement

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Element</code>](#Element) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

**Example** *(Example usage of &#x27;removeItem&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  listOfElement = new ListOfElement();
listOfElement.addItem(item);
listOfElement.addItem(item);
listOfElement.addItem(item); // will contain 3 copies of 'item'
listOfElement.removeItem(item, true); // returns true (remove first copy of item)
listOfElement.removeItem(item); // returns true (remove all copy of item)
listOfElement.removeItem(item); // returns false (because there is not anymore copy of item)
```
<a name="ListOfElement+load"></a>

### listOfElement.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  data = new ListOfElement(),
  listOfElement = new ListOfElement();
data.addItem(item);
listOfElement.load(data.save()); // returns true
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = [{'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}], // invalid data, only use .save() function to build correct data structure that can be loaded
  listOfElement = new Classification();
listOfElement.load(data); // returns false
```
<a name="ListOfElement+save"></a>

### listOfElement.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>Array</code> - - An array representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  listOfElement = new ListOfElement();
listOfElement.addItem(item);
listOfElement.save(); // returns [{"identifier": 1, "classifications": [Classification]]
```
<a name="ListOfTable"></a>

## ListOfTable
**Kind**: global class  

* [ListOfTable](#ListOfTable)
    * [.all()](#ListOfTable+all) ⇒ <code>Array</code>
    * [.findByIdentifier(identifier)](#ListOfTable+findByIdentifier) ⇒ <code>Object</code>
    * [.addItem(item)](#ListOfTable+addItem) ⇒ <code>boolean</code>
    * [.removeItem(item, [unique])](#ListOfTable+removeItem) ⇒ <code>boolean</code>
    * [.load(data)](#ListOfTable+load) ⇒ <code>boolean</code>
    * [.save()](#ListOfTable+save) ⇒ <code>Array</code>

<a name="ListOfTable+all"></a>

### listOfTable.all() ⇒ <code>Array</code>
Get all items of ListOfTable

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>Array</code> - - An array containing all items  
**Example** *(Example usage of &#x27;all&#x27; function)*  
```js
let item = new Table(),
  listOfTable = new ListOfTable();
// According item (instance of Table) has been fit with your data
listOfTable.addItem(item);
listOfTable.all(); // returns [item]
```
<a name="ListOfTable+findByIdentifier"></a>

### listOfTable.findByIdentifier(identifier) ⇒ <code>Object</code>
Find items of ListOfTable with matching identifier

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>Object</code> - - Items with given identifier  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>number</code> | Item identifier |

**Example** *(Example usage of &#x27;findByIdentifier&#x27; function)*  
```js
let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
  listOfTable = new ListOfTable();
listOfTable.addItem(item);
listOfTable.findByIdentifier('xxx-xxx-xxx'); // returns [item]
listOfTable.findByIdentifier('x'); // returns []
```
<a name="ListOfTable+addItem"></a>

### listOfTable.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfTable

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Table</code>](#Table) | Item that will be added |

**Example** *(Example usage of &#x27;addItem&#x27; function)*  
```js
let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
  listOfTable = new ListOfTable();
listOfTable.addItem(item); // returns true
listOfTable.addItem({'xxx-xxx-xxx': {'title': 'Description of this table'}}); // returns false (because you must use an instance of Table to success)
```
<a name="ListOfTable+removeItem"></a>

### listOfTable.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item to ListOfTable

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Table</code>](#Table) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

**Example** *(Example usage of &#x27;removeItem&#x27; function)*  
```js
let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
  listOfTable = new ListOfTable();
listOfTable.addItem(item);
listOfTable.addItem(item);
listOfTable.addItem(item); // will contain 3 copies of 'item'
listOfTable.removeItem(item, true); // returns true (remove first copy of item)
listOfTable.removeItem(item); // returns true (remove all copy of item)
listOfTable.removeItem(item); // returns false (because there is not anymore copy of item)
```
<a name="ListOfTable+load"></a>

### listOfTable.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function)*  
```js
let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save(),
  data = new ListOfTable(),
  listOfTable = new ListOfTable();
data.addItem(item);
listOfTable.load(data.save()); // returns true
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = [{'identifier': 'xxx-xxx-xxx', 'classifications': myClassification}], // invalid data, only use .save() function to build correct data structure that can be loaded
  listOfTable = new Classification();
listOfTable.load(data); // returns false
```
<a name="ListOfTable+save"></a>

### listOfTable.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>Array</code> - - An array representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let item = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}),
  listOfTable = new ListOfTable();
listOfTable.addItem(item);
listOfTable.save(); // returns [[Table]]
```
<a name="Table"></a>

## Table
**Kind**: global class  

* [Table](#Table)
    * [new Table([identifier], [description])](#new_Table_new)
    * _instance_
        * [.addItem(item)](#Table+addItem) ⇒ <code>boolean</code>
        * [.removeItem(item, [unique])](#Table+removeItem) ⇒ <code>boolean</code>
        * [.load(data)](#Table+load) ⇒ <code>boolean</code>
        * [.save()](#Table+save) ⇒ <code>Object</code>
    * _static_
        * [.check(data)](#Table.check) ⇒ <code>boolean</code>
        * [.isValid(data)](#Table.isValid) ⇒ <code>boolean</code>

<a name="new_Table_new"></a>

### new Table([identifier], [description])
**Returns**: [<code>Table</code>](#Table) - - An instance of Table  

| Param | Type | Description |
| --- | --- | --- |
| [identifier] | <code>string</code> | Identifier of Table |
| [description] | <code>string</code> | Descripton of Table |

**Example** *(Example usage of &#x27;contructor&#x27; (with paramters))*  
```js
let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
// returns an instance of Table with properties :
// - identifier : 'xxx-xxx-xxx'
// - description : {'title': 'Description of this table'} // Store data desribing this table here (scheme, title, summary, etc); no specific keys
// - elements : [ListOfElement]
// - classifications : [List]
// - register : {}
```
**Example** *(Example usage of &#x27;contructor&#x27; (with default values))*  
```js
let table = new Table(); // According myClassification (instance of ListOfClassification) contain your data
// returns an instance of Table with properties :
// - identifier : null
// - description : null
// - elements : [ListOfElement]
// - classifications : [List]
// - register : {}
```
<a name="Table+addItem"></a>

### table.addItem(item) ⇒ <code>boolean</code>
Add item to Table

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Element</code>](#Element) | Item that will be added |

**Example** *(Example usage of &#x27;addItem&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  table = new Table();
table.addItem(item); // returns true
table.addItem({'xxx-xxx-xxx', myClassification}); // returns false (because you must use an instance of Classification to success)
```
<a name="Table+removeItem"></a>

### table.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item to Table

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Element</code>](#Element) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

**Example** *(Example usage of &#x27;removeItem&#x27; function)*  
```js
let item = new Element('xxx-xxx-xxx', myClassification), // According myClassification (instance of ListOfClassification) contain your data
  table = new Table();
table.addItem(item);
table.addItem(item);
table.addItem(item); // will contain 3 copies of 'item'
table.removeItem(item, true); // returns true (remove first copy of item)
table.removeItem(item); // returns true (remove all copy of item)
table.removeItem(item); // returns false (because there is not anymore copy of item)
```
<a name="Table+load"></a>

### table.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

**Example** *(Example usage of &#x27;load&#x27; function (success))*  
```js
let data = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save();
  table = new Table();
table.load(data); // returns true
console.log(table); // outuput : [Element]
```
**Example** *(Example usage of &#x27;load&#x27; function (fail))*  
```js
let data = {'xxx-xxx-xxx': {'title': 'Description of this table'}}, // invalid data, only use .save() function to build correct data structure that can be loaded
  table = new Table();
table.load(data); // returns false
console.log(table); // outuput : [Element] (with default values)
```
<a name="Table+save"></a>

### table.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>Object</code> - - An object representation of save  
**Example** *(Example usage of &#x27;save&#x27; function)*  
```js
let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
table.save(); // returns {'identifier': 'xxx-xxx-xxx', 'description': {}, ...]}
```
<a name="Table.check"></a>

### Table.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

**Example** *(Example usage of &#x27;check&#x27; function (success))*  
```js
let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'}).save();
Table.check(table); // returns true
```
**Example** *(Example usage of &#x27;check&#x27; function (fail))*  
```js
let table = {'xxx-xxx-xxx': {'title': 'Description of this table'}}; // invalid data, only use .save() function to build correct data structure that can be loaded
Table.check(table); // returns false
```
<a name="Table.isValid"></a>

### Table.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be check (call save function to generate this data) |

**Example** *(Example usage of &#x27;isValid&#x27; function (success))*  
```js
let table = new Table('xxx-xxx-xxx', {'title': 'Description of this table'});
Table.isValid(table); // returns true
```
**Example** *(Example usage of &#x27;isValid&#x27; function (fail))*  
```js
let table = {'xxx-xxx-xxx': {'title': 'Description of this table'}}; // invalid data, only use new Table() to build valid data
Table.isValid(table); // returns false
```
<a name="callback"></a>

## callback : <code>function</code>
Function called when procces end

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Process erros |
| res | <code>string</code> \| <code>number</code> \| <code>Object</code> \| <code>Array</code> | Result data |

