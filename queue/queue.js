function Queue() {
  let dataStore = [];

  //Fifo first in first out

  return ({
    enqueue,
    dequeue,
    front,
    end,
    clear,
    toString
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
  }

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
