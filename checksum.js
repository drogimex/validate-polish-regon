const checksum = ( number, weights ) => {
    //Number is the string contains only digits (9 or 14)
    //Weights is the array with weights for all digits
    const max = number.length - 1;
    let sum = 0;
        
    for( let i = 0; i < max; i++ ) {
        const n = parseInt( number[i], 10 );
        sum += n * weights[i];
    }
        
    //If sum % 11 equal 10, then resultSum will equal 0:
    const resultSum = ( sum % 11 ) !== 10 ? sum % 11 : 0;
        
    //Control digit (last digit in REGON number):
    const lastDigit = parseInt( number.slice( -1 ), 10 );

    return resultSum === lastDigit;
};

module.exports = checksum;