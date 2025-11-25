
function Nodee(data, next) {
  this.data = data;
  this.next = next;

  this.sayHello = () => {
    console.log("Say Hello")
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBegin(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      this.size++;
      return
    }
    const newNode = new Node(data, null);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtEnd(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      this.size++;
      return
    }

    const newNode = new Node(data, null);
    let temp = this.head;
    while(temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
    this.size++;
  }

  insertAtPos(data, pos) {
    if(pos < 0 || pos > this.size) return;

    if (!this.head) {
      this.head = new Node(data, null);
      this.size++;
      return
    }

    let temp = this.head;
    for(let i=0; i<pos-1; i++) {
      temp = temp.next;
    }
    const newNode = new Node(data, null);
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++
  }

  length() {
    let count = 0;
    let temp = this.head;

    while(temp) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  display() {
    const arr = [];
    let temp = this.head;
    while(temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    console.log(arr);
  }
}

const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(8);
ll.insertAtEnd(9);
ll.insertAtPos(7, 1);
ll.insertAtPos(10, 5);
console.log("The length of the linked list is: ", ll.size)
ll.display();
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