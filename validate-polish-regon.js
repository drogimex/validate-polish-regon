const checksum = require( './checksum' );

//Public function for validate REGON:
function validatePolishRegon( regon ) {
    //Remove white chars and dashes, and convert to string:
    regon = regon.replace( /[\s-]+/g, '' );
    
    //Test with regular expression:
    const regexp = /^(?:\d{9}|\d{14})$/; 
    if( !regexp.test( regon ) ) {
        return false;
    }

    //Algorithm of validate regon with 9 and 14 digits:
    const weights9 = [8,9,2,3,4,5,6,7];
    const weights14 = [2,4,8,5,0,9,7,3,6,1,2,4,8];
    
    //For regon contains 9 digits:
    if ( regon.length === 9 ) {
        return checksum( regon, weights9 );
    }
    //For regon contains 14 digits (validate in 2 steeps):
    else {
        return checksum( regon.slice( 0, 9 ), weights9 ) //for first 9 digits
            && checksum( regon, weights14 );             //for whole regon number (14 digits)
    }

}

module.exports = validatePolishRegon;