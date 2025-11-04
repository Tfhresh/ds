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
function deleteAtEnding() {}
function deleteAtBeginning() {}
function deleteAtPos() {}

function displayArray(List) {
  let list = '';
  for(let i=0; i<List.length; i++) {
    list += `${List.arr[i]} `;
  }
  console.log(list);
}

insertAtEnding(ArrayList, 2);
insertAtEnding(ArrayList, 4);
insertAtBeginning(ArrayList, 65);
insertAtBeginning(ArrayList, 70);
insertAtAPos(ArrayList, 1, 7); 
displayArray(ArrayList);



/*
List made with array.

Operations
 - insertion
 - deletion
 - display
 - transversal
 - find
 - modify
 - merge
*/ 