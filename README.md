# Simple ISBN validator

[![NPM Version][npm-version]][npm-url]
[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][npm-url]

Validator check polish REGON number contains 9 or 14 digits.

## Instalation ##
```javascript
npm install validate-polish-regon
```


## Simple using ##
For use validator you have to import 'validate-polish-regon' and call function with one argument - regon as number or string. REGON can contains spaces and dashes.

*Validator always returns boolean value TRUE or FALSE.*

**Example:**
```javascript
const validate = require( 'validate-polish-regon' );

validate( '302690873' );      //true, regon contains of 9 digits
validate( '23511332857188' ); //true, regon contains of 14 digits
validate( '302-690-873' );    //true, allowed white chars and dashes

validate( '302690875' );      //false, invalid control digit
validate( '1234567890' );     //false, too more digits
validate( '12345678' );       //false, not enough digits
```

<!-- vars -->
[npm-version]:https://img.shields.io/npm/v/validate-polish-regon.svg?style=flat-square
[npm-url]: https://npmjs.org/package/validate-polish-regon
[license-image]:https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: #license
[travis-image]:https://img.shields.io/travis/drogimex/validate-polish-regon.svg?style=flat-square
[travis-url]:https://travis-ci.org/drogimex/validate-polish-regon
[downloads-image]: http://img.shields.io/npm/dm/validate-polish-regon.svg?style=flat-square
