const validate = require( './validate-polish-regon' );

describe( 'Tests of REGON numbres.', () => {
    it( 'Tests of correct REGON numbers.', () => {
        expect( validate( '302690873' ) ).toBeTruthy();
        expect( validate( '235113328' ) ).toBeTruthy();
        expect( validate( '302690873' ) ).toBeTruthy();
        
        //Allowed white chars and dashes:
        expect( validate( '302-690-873' ) ).toBeTruthy();
        expect( validate( '302 690 873' ) ).toBeTruthy();
        
        //Test of REGON contains 14 digits:
        expect( validate( '23511332857188' ) ).toBeTruthy();
    } );
    it( 'Tests of incorrect REGON numbers.', () => {
        expect( validate( '302690875' ) ).toBeFalsy();       //invalid control digit
        expect( validate( '123456789' ) ).toBeFalsy();       //invalid control digit
        expect( validate( '1234567890' ) ).toBeFalsy();      //too more digits (10)
        expect( validate( '235113328571885' ) ).toBeFalsy(); //too more digits (15)
        expect( validate( '12345678' ) ).toBeFalsy();        //not enough digits (8)
        expect( validate( '2351133285718' ) ).toBeFalsy();   //not enough digits (13)
    } );
} );