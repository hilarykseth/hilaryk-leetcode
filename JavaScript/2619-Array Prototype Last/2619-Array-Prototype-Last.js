/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let lastSlot = this.length - 1;
    let result;
    
    lastSlot < 0 ? result = -1 : result = this[lastSlot];

    return result;
    
};


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */