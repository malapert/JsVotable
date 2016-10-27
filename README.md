[![Npm Downloads](https://nodei.co/npm/jsvotable.png?downloads=true&stars=true)](https://nodei.co/npm/jsvotable.png?downloads=true&stars=true)
<table><tr valign="middle"><td><img src="jsvotable_logo.png"></td><td><b>A JavaScript parser for Votable</b></td></tr></table>
JsVotable a JavaScript library, that allows to parse the [VOTable](http://www.ivoa.net/documents/VOTable/20130920/) format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisities

You need to install nodejs to deploy the library

```
sudo apt-get update
sudo apt-get install nodejs npm
```

### Installing for a production environment

There are two ways to install the library :

#### Using github

```
npm install https://github.com/malapert/JsVotable.git
```

#### Using npm repository

```
npm install jsvotable
```

### Installing for a development environment

There are two ways to install the library :

#### Using github

```
npm install https://github.com/malapert/JsVotable.git
cd node_modules/jsvotable
npm install
```

#### Using npm repository

```
npm install jsvotable
cd node_modules/jsvotable
npm install
```

## How to use it

### for a production environment

First, you need to include the JsVotable library :
```
 <script src="JsVotable.min.js"></script>
```

Then, you can use it on your script :
```
var votable = new JsVotable.Votable(xhr.responseXML);
```

One the VOTable is loaded in the library, simply use the available getters.
For instance, if you want to load the data from a tabledata, use the following code :
```
// gets the first resource
var resource  = votable.getResources()[0];

// gets the table from the resource
var table = resource.getResourcesOrTables()[0]["TABLE"];

// gets the fields
var fields = table.getFields();

// gets the data : it could be tabledata, fits, binary or binary2
var data = table.getData();
if (data!=null && data.getDataImplementationName() == 'TableData') {
    var tabledata = data.getData();
    var trs = tabledata.getTrs();    
}
```


Look to the example :

 * [example2](https://github.com/malapert/JsVotable/blob/master/example/example2.html)

### for a development environment

Look to the example :

 * [example1](https://github.com/malapert/JsVotable/blob/master/example/example1.html) 

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


## Built With

* requirejs ^2.3.2 for development and testing 
* chai ^3.5.0 for testing
* domparser ^0.1.1 for testing
* mocha ^3.1.1 for testing
* uglify-js ^2.7.3 for minifying
* xmlhttprequest ^1.8.0 for testing
* brfs ^1.4.3 for testing
* jsdom-global ~2.1.0 for testing
* jsdom ~9.6.0 for testing
* jsdoc ^3.4.2 for documentation
* ink-docstrap ^1.3.0 for documentation

## Contributing

Please read [CONTRIBUTING.md](https://github.com/malapert/JsVotable/blob/master/CONTRIBUTING.md) for details on the process for submitting pull requests to me.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/malapert/JsVotable/tags). 

## Copyright & Credits

All names are listed in alphabetical order

### Development

#### Main Code

Jean-Christophe Malapert

#### Additional Codes

Thomas Rolling (CDS / UTBM) for base64 encoding 

## License

This project is licensed under the GPLV3 License - see the [LICENSE](https://github.com/malapert/JsVotable/blob/master/LICENSE) file for details

