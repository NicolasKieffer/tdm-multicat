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

