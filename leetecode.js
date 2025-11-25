// This is the find the sum of the digits that make up a number using string and array methods
function addNum(num) {
  return num.toString().split("").reduce((sum, cur) => sum + Number(cur), 0)
}

// This function sums up the digits of a number without converting it to a string.
function addNum2(num) {
  let sum = 0;
  while (num !== 0) {
    const rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10)
  }
  return sum;
}

// This function reverses a number using array and string methods
function reverseNum(num) {
  return num.toString().split("").reverse().join("")
}

// This function finds the length of digits in a number
function numberLength(num) {
  let length = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    length += 1;
  }
  return length;
}

// This function reverses a number without using array and string methods
function reverseNum2(num) {
  let count = numberLength(num);
  let reverse = 0;

  while (num !== 0) {
    const rem = num % 10;
    reverse += rem * (10 ** (count - 1));
    count--;
    num = Math.floor(num / 10)
  }
  return reverse;
}

