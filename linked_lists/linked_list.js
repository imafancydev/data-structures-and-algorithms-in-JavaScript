export function Node(element) {
  return ({
    element,
    next: null
  });
};

export function LinkedList() {
  const head = Node('Head');

  return ({
    insert,
    find,
    remove,
    toString,
  });

  function insert(value, after) {
    const newNode = Node(value);
    const current = find(after);

    newNode.next = current.next;
    current.next = newNode;
  };

  function find(valueAfter) {
    let currentNode = head;
    while (currentNode.element !== valueAfter) {
      currentNode = currentNode.next;
    };
    return currentNode;
  };

  function remove() { }

  function toString() {

  }
};
