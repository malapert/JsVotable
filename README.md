# JsVotable

JsVotable a pure JavaScript library, that allows to parse the [VOTable](http://www.ivoa.net/documents/VOTable/20130920/) format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

You need to install nodejs to deploy the library

```
sudo apt-get update
sudo apt-get install nodejs npm
```

### Installing

There are two ways to install the library :

#### Using github

```
npm install https://github.com/malapert/JsVotable.git
```

#### Using npm repository

```
npm install jsvotable
```


## Running the tests

To run the tests, run simply :
```
npm test
```

## Generating documentation

To generate the documentation, run simply :
```
npm run doc
```


## Minify the library

To minify the library, run simply ;
```
npm run uglify
```


## Deployment

To deploy the library without installing the dependency for unit tests, run :
```
npm install jsvotable --only=production
``` 

## Built With

* requirejs ^2.3.2 for source code and tests
* chai ^3.5.0 for tests
* domparser ^0.1.1 for tests
* mocha ^3.1.1 for tests
* uglify-js ^2.7.3 for tests
* xmlhttprequest ^1.8.0 for tests
* jsdoc ^3.4.2 for documentation
* ink-docstrap ^1.3.0 for documentation

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/malapert/JsVotable/tags). 

## Authors

* **Jean-Christophe Malapert <jcmalapert@gmail.com>**

## License

This project is licensed under the GPLV3 License - see the [LICENSE.md](LICENSE.md) file for details

