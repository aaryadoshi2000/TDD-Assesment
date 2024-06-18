export const add = (numbers: string): number => {
  
  let correctedNumbers = numbers.replace(/\\n/g, '\n');
  if (correctedNumbers === '') {
    return 0;
  }

  let delimiter = /[,\n]/;

  // Check for custom delimiter
  if (correctedNumbers.startsWith('//')) {
    const customDelimiter = correctedNumbers.substring(2, correctedNumbers.indexOf('\n'));
    delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    correctedNumbers = correctedNumbers.substring(correctedNumbers.indexOf('\n') + 1);
  }

  // Split numbers by delimiter, parse them to integers
  const nums = correctedNumbers.split(delimiter).map(num => {
    const parsedNum = parseInt(num);
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid number encountered: ${num}`);
    }
    return parsedNum;
  });

  // Check for negative numbers
  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
  }

  // Calculate sum of valid numbers
  return nums.reduce((sum, num) => sum + num, 0);
};
