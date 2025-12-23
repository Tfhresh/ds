
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
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
    this.size++;
  }

  insertAtPos(data, pos) {
    if (pos < 0 || pos > this.size) return;

    if (!this.head) {
      this.head = new Node(data, null);
      this.size++;
      return
    }

    let temp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }
    const newNode = new Node(data, null);
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++
  }

  deleteAtBegin() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  deleteAtEndTwoPointer() {
    if (!this.head) return;
    let temp, temp2 = null;
    temp = temp2 = this.head;

    while (temp.next) {
      temp2 = temp;
      temp = temp.next;
    }
    temp2.next = null;
  }

  deleteAtEnd() {
    if (!this.head) return;

    let temp = this.head;
    while (temp.next && temp.next.next) {
      temp = temp.next;
    }
    delete temp.next.next;
    temp.next = null
  }

  deleteAtPos(pos) {
    if (pos < 0 || pos > this.length() - 1) return;
    let temp = this.head;
    let i;
    for (i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }

    if(i === 0) {
      this.head = this.head.next;
      return;
    }
    temp.next = temp.next ? temp.next.next : null;
  }

  length() {
    let count = 0;
    let temp = this.head;

    while (temp) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  display() {
    const arr = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    console.log(arr);
  }

  search(val) {
    let temp = this.head;
    let pos = 0;
    while(temp && temp.data !== val) {
      temp = temp.next;
      pos++;
    }

    return temp?.data === val ? pos : -1;
  }
}

const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(9);
console.log(ll.search(10));
// ll.display();
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