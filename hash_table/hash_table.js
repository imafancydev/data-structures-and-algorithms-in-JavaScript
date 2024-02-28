function HashTable(size) {
  let table = new Array(size);

  return ({
    table,
    hash,
    set,
    get,
    remove,
    toString
  });

  function hash(key) {
    return key.toString().length % size;
  };

  function set(key, value) {
    const index = hash(key);
    table[index] = value;
  };

  function get(key) {
    const index = hash(key);
    return table[index];
  };

  function remove(key) {
    const index = hash(key);
    return table[index] = undefined;
  };

  function toString() {
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        console.log(i, table[i]);
      };
    };
  };

};

const table = HashTable(20);

table.set(1, 'LUCAS');
table.set(2, 'Giovanna');
table.set(3, 'Light sword')

table.toString();


table.remove(3);

table.toString();

console.log(
  table.get(1),
  table.get(2),
  table.get(3)
);
