function List() {
  let dataStore = [];
  let pos = 0;

  return {
    prev,
    next,
    getByPosition,
    getCurrent,
    length,
    clear,
    insert,
    append,
    remove,
    front,
    end,
    moveTo,
    toString,
    isEmpty
  };

  function isEmpty() {
    if (dataStore.length <= 0) {
      return console.log("The array is empty")
    } else {
      return console.log("The array is not empty")
    };

  };

  function find(value) {
    return dataStore.findIndex(el => {
      return el === value
    });
  }

  function prev() {
    if (pos <= 0) {
      pos--;
    };
  };

  function next() {
    if (pos < (dataStore.length - 1)) {
      pos++;
    };
  };

  function getByPosition(index) {
    if (index > dataStore.length - 1) {
      console.log(`${index} invalid`);
    } else {
      return console.log(dataStore[index]);
    };
  };

  function getCurrent(pos) {
    return dataStore[pos];
  };

  function length() {
    return dataStore.length;
  };

  function clear() {
    if (dataStore.length === 0) {
      console.log("array already clear");
    } else {
      dataStore = [];
    };
  };

  function insert(value, after) {
    const index = find(after);

    dataStore.splice(index + 1, 0, value);
  };

  function append(element) {
    return dataStore.push(element);
  };

  function remove(value) {
    const indexOfValue = find(value);

    dataStore.splice(indexOfValue, 1);
  };

  function front() {
    return dataStore[0];
  };

  function end() {
    return dataStore[dataStore.length - 1];
  };

  function moveTo(position) {
    pos = position;
  }

  function toString() {
    return console.log(dataStore);
  };
};


// Testing
const myArr = List();

myArr.append("Sophia");
myArr.append("Love");
myArr.append("DarkMoon");
myArr.toString();
myArr.insert("Lucas ama", "Sophia");
myArr.toString();
console.log(myArr.length());
myArr.remove("DarkMoon");
myArr.toString();
myArr.getByPosition(2);
