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

function reverseArr(arr) {
  const reverse = [];
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    reverse[j] = arr[i];
  }

  console.log(reverse);
}

function swapWiththirdVariable(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;

  return [num1, num2];
}

function swapNumbers(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  return [num1, num2];
}

function inPlaceReverse(arr) {
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    // const swap = swapNumbers(arr[high], arr[low]);
    // arr[low] = swap[1];
    // arr[high] = swap[0];

    low++;
    high--;
  }
  return arr;
}

function rotateArrLeft(arr) {
  let first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first;

  return arr;
}

function rotateArrRight(arr) {
  let last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = last;
  return arr;
}

function iterativeFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

function reduceFactorial (n) {
  return Array.from(new Array(n)).reduce((acc, _, curIn) => acc * (curIn + 1), 1);
}

function isPalindrome(number) {

  let num = number;
  let reverse = 0;
  let length = numberLength(num)-1;

  while(num !== 0) {
    let rem = num % 10;
    reverse += (rem * (10**(length--)));
    num = Math.floor(num/10);
  }

  return reverse === number;
}

