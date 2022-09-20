// Implementation of Stack

class Stack {
  constructor(sizeOfStack) {
    this._sizeOfStack = sizeOfStack;
    this._top = -1;
    this._stack = [];
  }
  push(element) {
    this._top++;
    this._stack[this._top] = element;
  }

  pop() {
    return this._stack[this._top--];
  }

  isEmpty() {
    this._top == -1
      ? console.log("The Stack is empty")
      : console.log("The stack is not empty");
  }
  size() {
    return this._top + 1;
  }

  //This function is written just for the purpose of verification..as this is not stated in the question
  display() {
    for (let i = this._top; i >= 0; i--) {
      console.log(this._stack[i]);
    }
  }
}

//Question 4.a Function to remove all the odd numbers form the stack
const removeOddElements = (stack) => {
  if (stack.size() == 0) {
    return;
  }
  let topElement = stack.pop();
  if (topElement % 2 === 0) {
    removeOddElements(stack);
    return stack.push(topElement);
  } else {
    removeOddElements(stack);
  }
};

//Question 4.b Duplicating given stack
const duplicateStack = (initialStack, newStack) => {
  let topElement = initialStack.pop();
  if (initialStack.size() < 0) {
    return;
  }
  duplicateStack(initialStack, newStack);
  initialStack.push(topElement);
  newStack.push(topElement);
  return;
};

const myStack = new Stack(6);
const newStack = new Stack(6);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);

console.log("-----------Original Stack---------");

removeOddElements(myStack);

console.log(
  "-----------Resulting Stack elements after odd elemets removal---------"
);

myStack.display();

console.log("-------------Result of Duplicate Stack----------");

duplicateStack(myStack, newStack);

newStack.display();
