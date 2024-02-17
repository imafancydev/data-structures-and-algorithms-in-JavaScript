function Stack() {
  let dataStore = [];

  //Lifo Last in First out

  return ({
    pop,
    push,
    toString,
    clear,
  });

  function push(value) {
    return dataStore.push(value);
  }

  function pop() {
    return dataStore.pop();
  }

  function toString() {
    console.log(dataStore);
  }

  function clear() {
    dataStore = [];
  }

}

let stack = Stack();

stack.push('Eu');
stack.push('Amei');
stack.push('Você');

stack.toString();
stack.pop();
stack.toString();
stack.clear();
stack.toString();
