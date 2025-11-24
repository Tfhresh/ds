
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
ll.insertAtBegin(1);
ll.insertAtBegin(2);
ll.insertAtBegin(3);
ll.insertAtBegin(4);
ll.insertAtBegin(5);
ll.insertAtEnd(1);
ll.insertAtEnd(8);
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