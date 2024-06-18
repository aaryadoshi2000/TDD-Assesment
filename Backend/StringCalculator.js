"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (numbers) {
    var correctedNumbers = numbers.replace(/\\n/g, '\n');
    if (correctedNumbers === '') {
        return 0;
    }
    var delimiter = /[,\n]/;
    // Check for custom delimiter
    if (correctedNumbers.startsWith('//')) {
        var customDelimiter = correctedNumbers.substring(2, correctedNumbers.indexOf('\n'));
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        correctedNumbers = correctedNumbers.substring(correctedNumbers.indexOf('\n') + 1);
    }
    // Split numbers by delimiter, parse them to integers
    var nums = correctedNumbers.split(delimiter).map(function (num) {
        var parsedNum = parseInt(num);
        if (isNaN(parsedNum)) {
            throw new Error("Invalid number encountered: ".concat(num));
        }
        return parsedNum;
    });
    // Check for negative numbers
    var negatives = nums.filter(function (num) { return num < 0; });
    if (negatives.length > 0) {
        throw new Error("Negatives not allowed: ".concat(negatives.join(', ')));
    }
    // Calculate sum of valid numbers
    return nums.reduce(function (sum, num) { return sum + num; }, 0);
};
exports.add = add;
