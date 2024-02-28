function HashTable(size) {
  const buckets = Array(size).fill(null);
  const numBuckets = buckets.length;

  function hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    };
    const bucket = total % numBuckets;
    return bucket;
  };

  function set(key, value) {
    const newHashNode = new HashNode(key, value);
    const index = hash(key);

    if (!buckets[index]) {
      buckets[index] = newHashNode;
    } else if (buckets[index].key === key) {
      buckets[index].value = value;
    } else {
      let currentNode = buckets[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        };
        currentNode = currentNode.next;
      };
      currentNode.next = newHashNode;
    };
  };

  function get(key) {
    const index = hash(key);
    let currentNode = buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    };
    return null;
  };

  function retrieveAll() {
    const result = [];
    for (let i = 0; i < numBuckets; i++) {
      let currentNode = buckets[i];
      while (currentNode) {
        result.push(currentNode);
        currentNode = currentNode.next;
      };
    };
    return result;
  };

  return {
    set,
    get,
    retrieveAll
  };

  function HashNode(key, value, next = null) {
    return {
      key,
      value,
      next
    };
  };
};

const table = HashTable(20);

table.set(1, 'LUCAS');
table.set(2, 'Giovanna');
table.set(3, 'Light sword')

table.toString();

console.log(
  table.get(1),
  table.get(2),
  table.get(3)
);

console.log(table.retrieveAll());
