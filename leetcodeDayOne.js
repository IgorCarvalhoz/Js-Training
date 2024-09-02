/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    
    let total = 0;
    let values = s.split("");

    for (let i = 0; i < values.length; i++) {
        let currentValue = map.get(values[i]);
        let nextValue = map.get(values[i + 1]);

        if (nextValue && currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }
    
    return total;
};

console.log(romanToInt("LV"));
