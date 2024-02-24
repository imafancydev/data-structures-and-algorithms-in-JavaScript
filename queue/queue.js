function Queue() {
  let dataStore = [];

  //Fifo first in first out

  return ({
    enqueue,
    dequeue,
    front,
    end,
    clear,
    toString,
    isEmpty
  });

  function enqueue(value) {
    return dataStore.unshift(value);
  };

  function dequeue() {
    return dataStore.pop();
  };

  function front() {
    return dataStore[0];
  };

  function end() {
    return dataStore[dataStore.length - 1];
  };

  function clear() {
    return dataStore = [];
  };

  function toString() {
    console.log(dataStore);
  };

  function isEmpty(){
    if(dataStore.length === 0){
      return console.log('Is empty');
    };
  };

};

let queue = Queue();

queue.enqueue("Giovanna");
queue.enqueue("Lucas");
queue.enqueue("Tito");
queue.enqueue("Titus");

queue.dequeue();
queue.dequeue();

queue.toString();

queue.clear();

queue.isEmpty();
