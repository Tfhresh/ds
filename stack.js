console.log("Stack!!!");

class Stack {
  constructor(size) {
    this.top = -1;
    this.size = size;
    this.list = [];
  }
  push(item) {
    if (this.isFull()) {
      console.log("Stackoverflow");
      return;
    }
    this.top += 1;
    this.list[this.top] = item;
  }
  pop() {
    if(this.isEmpty()) {
      return -1;
    }
    return this.list[this.top--];
  }
  display() {
    for(let i=this.top;i>=0; i--) {
      console.log(this.list[i]);
    }
  }
  isEmpty() {
    return this.top === -1;
  }
  isFull() {
    return this.top+1 === this.size;
  }
  peek() {
    if(this.isEmpty()) {
      console.log("Stack is empty...")
      return
    }

    return this.list[this.top];
    
  }
}


const stack = new Stack(10);
stack.push(3)
stack.push(35)
stack.push(5)
stack.push(2)
stack.push(6)
stack.push(6)
stack.push(6);
console.log("Popping... ", stack.pop());
console.log("Popping... ", stack.pop());
console.log("Popping... ", stack.pop());
console.log("Peeking... ", stack.peek());
stack.display();


