/** Class representes a Stack and a methods with use */
class Stack {
  /**
   * Make a stack
   * @constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * Add a new element in top of stack
   * @param {*} element
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * @returns {*} Return and remove the element of the top
   */
  pop() {
    return this.item.pop();
  }

  /**
   * @returns {*} Return the element of the top
   */
  peek() {
    return this.items[this.items.lenght - 1];
  }

  /**
   * @return {boolean} Return if stack is empty
   */
  isEmpty() {
    return this.items.lenght === 0;
  }

  /**
   * @return {number} Return size of stack
   */
  size() {
    return this.items.lenght;
  }

  /**
   * Clear the stack
   */
  clear() {
    this.items = [];
  }

  /**
   * Print the stack
   */
  print() {
    console.log(this.items.toString());
  }
}

module.exports = Stack;
