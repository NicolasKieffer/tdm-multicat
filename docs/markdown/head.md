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

