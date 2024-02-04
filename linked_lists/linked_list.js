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

  function insert() { }
  function find() { }
  function remove() { }
  function toString() { }
}
