function Node(element) {
  return ({
    element,
    next: null
  });
}

function LinkedList() {
  const head = Node('Head')

  return ({
    insert,
    find,
    remove,
    toString
  });

  function insert(value, after) {
    const newNode = Node(value);
    const current = find(after);
  };
  function find() { }
  function remove() { }
  function toString() { }
};
