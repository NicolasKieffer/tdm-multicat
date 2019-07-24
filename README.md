# tdm-multicat

**tdm-multicat** is a tdm module for classification by matching identifier. It can be used to store classifications of documents.

## Installation

Using npm :

```shell
$ npm i -g tdm-multicat
$ npm i --save tdm-multicat
```

Using Node :

```js
/* require of Multicat module */
const Multicat = require('tdm-multicat');

/* Constructor of List */
let Classifier = new Multicat.Classifier();

/* Constructor of List */
let list = new Multicat.List();

/* Constructor of Classification */
let classification = new Multicat.Classification();

/* Constructor of ListOfClassification */
let listOfClassification = new Multicat.ListOfClassification();

/* Constructor of Element */
let element = new Multicat.Element();

/* Constructor of ListOfElement */
let listOfElement = new Multicat.ListOfElement();

/* Constructor of Table */
let table = new Multicat.Table();

/* Constructor of ListOfTable */
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

<a name="Classification+load"></a>

### classification.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

<a name="Classification+save"></a>

### classification.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Classification</code>](#Classification)  
**Returns**: <code>Object</code> - - An object representation of save  
<a name="Classification.check"></a>

### Classification.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

<a name="Classification.isValid"></a>

### Classification.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Classification</code>](#Classification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be validated |

<a name="Classifier"></a>

## Classifier
**Kind**: global class  

* [Classifier](#Classifier)
    * [new Classifier([options])](#new_Classifier_new)
    * [.getClassifications(elementId)](#Classifier+getClassifications) ⇒ <code>Array</code>
    * [.getClassificationsOf(tableId, elementId)](#Classifier+getClassificationsOf) ⇒ <code>Array</code>
    * [.getElements(classification)](#Classifier+getElements) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
    * [.getElementsOf(tableId, classification)](#Classifier+getElementsOf) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
    * [.load(filePath, cb)](#Classifier+load) ⇒ <code>undefined</code>
    * [.save(filePath, cb)](#Classifier+save) ⇒ <code>undefined</code>

<a name="new_Classifier_new"></a>

### new Classifier([options])
**Returns**: [<code>Classifier</code>](#Classifier) - - An instance of Classifier  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options of constructor |
| [options.tables] | [<code>ListOfTable</code>](#ListOfTable) | An instance of listOfTable |

<a name="Classifier+getClassifications"></a>

### classifier.getClassifications(elementId) ⇒ <code>Array</code>
Return categories of all Tables with given elementId

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Array</code> - - An array containing all classification associated with this elementId  

| Param | Type | Description |
| --- | --- | --- |
| elementId | <code>string</code> | Identifier of given element |

<a name="Classifier+getClassificationsOf"></a>

### classifier.getClassificationsOf(tableId, elementId) ⇒ <code>Array</code>
Get categories of given Table

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>Array</code> - - An array containing all classification associated with this elementId of given classification  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Identifier of classification |
| elementId | <code>string</code> | Identifier of given element |

<a name="Classifier+getElements"></a>

### classifier.getElements(classification) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
Return Elements of all Tables with given classification

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: [<code>Array.&lt;Element&gt;</code>](#Element) - - An array containing all elements associated with this classification  

| Param | Type | Description |
| --- | --- | --- |
| classification | [<code>Classification</code>](#Classification) | Classification of element |

<a name="Classifier+getElementsOf"></a>

### classifier.getElementsOf(tableId, classification) ⇒ [<code>Array.&lt;Element&gt;</code>](#Element)
Get categories of given Table

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: [<code>Array.&lt;Element&gt;</code>](#Element) - - An array containing all elements associated with this classification  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Identifier of classification |
| classification | [<code>Classification</code>](#Classification) | Classification of element |

<a name="Classifier+load"></a>

### classifier.load(filePath, cb) ⇒ <code>undefined</code>
Load data of given file (that must be create by save function)

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>undefined</code> - - undefined  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | Path of file containing saved data |
| cb | [<code>callback</code>](#callback) | Function called when procces end |

<a name="Classifier+save"></a>

### classifier.save(filePath, cb) ⇒ <code>undefined</code>
Save data at given filePath (that will be loaded by load function)

**Kind**: instance method of [<code>Classifier</code>](#Classifier)  
**Returns**: <code>undefined</code> - - undefined  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | Path of file that will contain saved data |
| cb | [<code>callback</code>](#callback) | Function called when procces end |

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

<a name="Element+load"></a>

### element.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

<a name="Element+save"></a>

### element.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Object</code> - - An object representation of save  
<a name="Element.check"></a>

### Element.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

<a name="Element.isValid"></a>

### Element.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Element</code>](#Element)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be validated |

<a name="List"></a>

## List
**Kind**: global class  

* [List](#List)
    * [new List([options])](#new_List_new)
    * _instance_
        * [.all()](#List+all) ⇒ <code>Array</code>
        * [.getKey(value)](#List+getKey) ⇒ <code>string</code>
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

<a name="new_List_new"></a>

### new List([options])
**Returns**: [<code>List</code>](#List) - - An instance of List  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options of constructor |
| [options.index] | <code>Object</code> | An object containing indexes |
| [options.blackListKey] | <code>Object</code> | An object containing blacklisted keys (it will no be indexed) |
| [options.collection] | <code>Array</code> | An array containing items |

<a name="List+all"></a>

### list.all() ⇒ <code>Array</code>
Get all items of List

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array containing all items  
<a name="List+getKey"></a>

### list.getKey(value) ⇒ <code>string</code>
Get key of a given value

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>string</code> - - Generated key  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> \| <code>number</code> \| <code>string</code> | Given value |

<a name="List+indexesOf"></a>

### list.indexesOf(index, value) ⇒ <code>Array</code>
Return indexes of items with property 'index' having value 'value'

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - Return - An array of items indexes, or null if given index do not exist  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Which index will be used to search for |
| value | <code>string</code> | Wich value of index will be used to search for |

<a name="List+findBy"></a>

### list.findBy(index, value) ⇒ <code>Array</code>
Find item of List with matching index 'index' with value 'value'

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array of items indexes founded  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>string</code> | Which index will be used |
| value | <code>string</code> | Wich value of given index will be used |

<a name="List+findItem"></a>

### list.findItem(item) ⇒ <code>Array</code>
Return item of List matching with given item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>Array</code> - - An array of items found, or empty Array  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Object</code> | Item you search for |

<a name="List+addItem"></a>

### list.addItem(item) ⇒ <code>number</code>
Add item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>number</code> - - Length of collection  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | Item you want to add |

<a name="List+removeItem"></a>

### list.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Object</code> |  | Item you want to remove |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

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

<a name="List+refreshIndexes"></a>

### list.refreshIndexes() ⇒ <code>undefined</code>
Refresh all indexes

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>undefined</code> - - undefined  
<a name="List+load"></a>

### list.load(data) ⇒ [<code>List</code>](#List)
Load data

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: [<code>List</code>](#List) - - this  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded |

<a name="List.check"></a>

### List.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

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
<a name="ListOfClassification+findByLevel"></a>

### listOfClassification.findByLevel(level) ⇒ <code>Object</code>
Find items of ListOfClassification with matching level

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Object</code> - - Items with given level  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | Item level |

<a name="ListOfClassification+findByValue"></a>

### listOfClassification.findByValue(value) ⇒ <code>Object</code>
Find item of ListOfClassification with matching value

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Object</code> - - Item with given value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Item value |

<a name="ListOfClassification+addItem"></a>

### listOfClassification.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfClassification

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Classification</code>](#Classification) | Item that will be added |

<a name="ListOfClassification+removeItem"></a>

### listOfClassification.removeItem(item, [unique]) ⇒ <code>boolean</code>
Add item to ListOfClassification

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Classification</code>](#Classification) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

<a name="ListOfClassification+load"></a>

### listOfClassification.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

<a name="ListOfClassification+save"></a>

### listOfClassification.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfClassification</code>](#ListOfClassification)  
**Returns**: <code>Array</code> - - An array representation of save  
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
<a name="ListOfElement+findByIdentifier"></a>

### listOfElement.findByIdentifier(identifier) ⇒ <code>Object</code>
Find items of ListOfElement with matching identifier

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>Object</code> - - Items with given identifier  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>number</code> | Item identifier |

<a name="ListOfElement+addItem"></a>

### listOfElement.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfElement

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Element</code>](#Element) | Item that will be added |

<a name="ListOfElement+removeItem"></a>

### listOfElement.removeItem(item, [unique]) ⇒ <code>boolean</code>
Add item to ListOfElement

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Element</code>](#Element) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

<a name="ListOfElement+load"></a>

### listOfElement.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

<a name="ListOfElement+save"></a>

### listOfElement.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfElement</code>](#ListOfElement)  
**Returns**: <code>Array</code> - - An array representation of save  
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
<a name="ListOfTable+findByIdentifier"></a>

### listOfTable.findByIdentifier(identifier) ⇒ <code>Object</code>
Find items of ListOfTable with matching identifier

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>Object</code> - - Items with given identifier  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>number</code> | Item identifier |

<a name="ListOfTable+addItem"></a>

### listOfTable.addItem(item) ⇒ <code>boolean</code>
Add item to ListOfTable

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Table</code>](#Table) | Item that will be added |

<a name="ListOfTable+removeItem"></a>

### listOfTable.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item to ListOfTable

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Table</code>](#Table) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

<a name="ListOfTable+load"></a>

### listOfTable.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Data that will be loaded (call all function to generate this data) |

<a name="ListOfTable+save"></a>

### listOfTable.save() ⇒ <code>Array</code>
Save data

**Kind**: instance method of [<code>ListOfTable</code>](#ListOfTable)  
**Returns**: <code>Array</code> - - An array representation of save  
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

<a name="Table+addItem"></a>

### table.addItem(item) ⇒ <code>boolean</code>
Add item to Table

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Element</code>](#Element) | Item that will be added |

<a name="Table+removeItem"></a>

### table.removeItem(item, [unique]) ⇒ <code>boolean</code>
Remove item to Table

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>Element</code>](#Element) |  | Item that will be removed |
| [unique] | <code>boolean</code> | <code>false</code> | Will delete all items found by default, set true to delete only fisrt item found |

<a name="Table+load"></a>

### table.load(data) ⇒ <code>boolean</code>
Load data

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be loaded (call save function to generate this data) |

<a name="Table+save"></a>

### table.save() ⇒ <code>Object</code>
Save data

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>Object</code> - - An object representation of save  
<a name="Table.check"></a>

### Table.check(data) ⇒ <code>boolean</code>
Check data before load

**Kind**: static method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be checked (call save function to generate this data) |

<a name="Table.isValid"></a>

### Table.isValid(data) ⇒ <code>boolean</code>
Validate data

**Kind**: static method of [<code>Table</code>](#Table)  
**Returns**: <code>boolean</code> - - True if it succed, else return false  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data that will be check (call save function to generate this data) |

<a name="callback"></a>

## callback : <code>function</code>
Function called when procces end

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Process erros |
| res | <code>string</code> \| <code>number</code> \| <code>Object</code> \| <code>Array</code> | Result data |

