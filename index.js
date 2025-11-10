let num = [1, 2, 3];

const ArrayList = {
  length: 0,
  arr: [],
  size: 100
};

/////////////////////////////////////////
/////////////////////////////////////////
// All the insertion cases completed
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
  for(; i>0; i--) {
    List.arr[i] = List.arr[i-1];
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

  if(pos < 0 || pos > List.length - 1) {
    return;
  }
  for(let i = List.length; i > pos; i--) {
    List.arr[i] = List.arr[i-1];
  }
  List.arr[pos] = newValue; 
  List.length +=1;
}

/////////////////////////////////////////
/////////////////////////////////////////
// The next is the deletion cases.
function deleteAtEnding(List) {
  const deletedEl = List.arr[--List.length];
  // const deletedEl = List.arr[List.length - 1];
  // List.length -= 1;
  return deletedEl;
}
function deleteAtBeginning(List) {
  for(let i=0; i<List.length - 1; i++) {
    List.arr[i] = List.arr[i+1];
  }
  List.length--;
}
function deleteAtPos(List, pos) {
  if(pos < 0 || pos >= List.length -1) return;
  for(let i = pos; i < List.length - 1; i++) {
    List.arr[i] = List.arr[i+1];
  }
  List.length--;
}
function displayArray(List) {
  let list = '';
  for(let i=0; i<List.length; i++) {
    list += `${List.arr[i]} `;
  }
  console.log(list);
}
function getArrEl(List, pos) {
  if(pos < 0 || pos >= List.length -1) return;
  return List.arr[pos];
}
function setArrEl(List, pos, val) {
  if(pos < 0 || pos >= List.length -1) return;
  List.arr[pos] = val;
}
function searchEl(List, val) {
  for(let i = 0; i< List.length; i++) {
    console.log(List.arr[i], "   ", val);
    if(List.arr[i] === val) return i;
  }

  return -1;
}

// Transversal
function doubleElements(List) {
  for(let i=0; i<List.length; i++) {
    List.arr[i] *= 2;
  }
}

// Search Element

insertAtEnding(ArrayList, 2);
insertAtEnding(ArrayList, 4);
insertAtEnding(ArrayList, 65);
insertAtEnding(ArrayList, 70);
insertAtEnding(ArrayList, 7);
// setArrEl(ArrayList, 3, 50);

// console.log("This is the third element: ", getArrEl(ArrayList, 2))
// deleteAtBeginning(ArrayList);
doubleElements(ArrayList);
// displayArray(ArrayList);

console.log("We are searching for: ", searchEl(ArrayList, 1));



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