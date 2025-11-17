let num = [1, 2, 3];

const ArrayList = {
  length: 0,
  arr: [],
  size: 100
};

const ArrayList1 = {
  length: 5,
  arr: [1, 2, 3, 4, 5],
  size: 10
};

const ArrayList2 = {
  length: 5,
  arr: [6, 7, 8, 9, 10],
  size: 10
};


function insertAtEnding(List, newvalue) {
  if (List.size === List.length) {
    console.log("List is Full");
    return;
  }

  List.arr[List.length] = newvalue;
  List.length += 1;
}
function insertAtBeginning(List, newValue) {
  if (List.size === List.length) {
    console.log("List is Full");
    return;
  }

  let i = List.length;
  for (; i > 0; i--) {
    List.arr[i] = List.arr[i - 1];
  }
  List.arr[i] = newValue;
  List.length += 1;

  // let i = List.length-1;
  // for(; i>=0; i--) {
  //   List.arr[i+1] = List.arr[i];
  // }
  // List.arr[0] = newValue;
}
function insertAtAPos(List, pos, newValue) {

  if (pos < 0 || pos > List.length - 1) {
    return;
  }
  for (let i = List.length; i > pos; i--) {
    List.arr[i] = List.arr[i - 1];
  }
  List.arr[pos] = newValue;
  List.length += 1;
}
function deleteAtEnding(List) {
  const deletedEl = List.arr[--List.length];
  // const deletedEl = List.arr[List.length - 1];
  // List.length -= 1;
  return deletedEl;
}
function deleteAtBeginning(List) {
  for (let i = 0; i < List.length - 1; i++) {
    List.arr[i] = List.arr[i + 1];
  }
  List.length--;
}
function deleteAtPos(List, pos) {
  if (pos < 0 || pos > List.length - 1) return;
  for (let i = pos; i < List.length - 1; i++) {
    List.arr[i] = List.arr[i + 1];
  }
  List.length--;
}
function displayArray(List) {
  let list = '';
  for (let i = 0; i < List.length; i++) {
    list += `${List.arr[i]} `;
  }
  console.log(list);
}
function getArrEl(List, pos) {
  if (pos < 0 || pos > List.length - 1) return;
  return List.arr[pos];
}
function setArrEl(List, pos, val) {
  if (pos < 0 || pos > List.length - 1) return;
  List.arr[pos] = val;
}
function searchEl(List, val) {
  for (let i = 0; i < List.length; i++) {
    console.log(List.arr[i], "   ", val);
    if (List.arr[i] === val) return i;
  }

  return -1;
}
function doubleElements(List) {
  for (let i = 0; i < List.length; i++) {
    List.arr[i] *= 2;
  }
}
function concatArrays(List1, List2) {
  if ((List1.size - List1.length) < List2.length) return;
  for (let i = List1.length, j = 0; j < List2.length; i++, j++) {
    List1.arr[i] = List2.arr[j];
    List1.length++;
  }
}
function concatInAThirdArray(List1, List2) {
  const newArray = [];
  let i = 0;
  for (; i < List1.length; i++) {
    newArray[i] = List1.arr[i];
  }

  for (let j = 0; j < List2.length; j++, i++) {
    newArray[i] = List2.arr[j];
  }
  return newArray;
}
function binarySearch(List, val) {
  let l = 0; let h = List.length - 1;

  let index = -1;
  while (l <= h) {
    let mid = Math.floor((h + l) / 2);
    if (List.arr[mid] === val) {
     index = mid;
     break; 
    }
    else if (List.arr[mid] < val) l = mid + 1;
    else if (List.arr[mid] > val) h = mid - 1;
  }

  return index;
}


console.log("Display the array: ", ArrayList1.arr);
console.log("Binary Search: ", binarySearch(ArrayList1, 1));
console.log("Binary Search: ", binarySearch(ArrayList1, 2));
console.log("Binary Search: ", binarySearch(ArrayList1, 2));
console.log("Binary Search: ", binarySearch(ArrayList1, 3));
console.log("Binary Search: ", binarySearch(ArrayList1, 4));
console.log("Binary Search: ", binarySearch(ArrayList1, 7));



// console.log("We are looking for: ", binarySearch(ArrayList1, 6));



/*
List made with array.

Operations
 - insertion
 - deletion
 - display
 - transversal
 - search
 - get
 - set
 - merge
*/ 