/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    let call_times = 0;
    return function() {  
        call_times < 1 ? call_times++ : n++;
        console.log(n);
        return n;
    };
};

 
 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12
