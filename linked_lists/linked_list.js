function Node(element) {
  return ({
    element,
    next: null
  });
};

function LinkedList() {
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

  function remove(value) {

  }

  function toString() {
    let currentNode = head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    };
  };
};

const linkedList = LinkedList();

linkedList.insert('Lucas', 'Head');
linkedList.insert('Gioavanna', 'Lucas');
linkedList.insert('DarkMoonBlade', 'Gioavanna');

linkedList.toString();
