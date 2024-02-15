function Node(element) {
  return ({
    element,
    next: null
  });
};

function LinkedList() {
  const head = Node('Head');

  return ({
    push_back,
    push_front,
    pop_back,
    pop_front,
    insert,
    find,
    remove,
    toString,
    findPrevious
  });

  function push_back(value) {
    let newNode = Node(value);
    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  function push_front(value) {
    let currentNode = head;
    let newNode = Node(value);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  function pop_back() {
    let currentNode = head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    };
    currentNode.next = null;
  };

  function pop_front() {
    let currentNode = head;
    if (currentNode.next !== null) {
      currentNode.next = currentNode.next.next;
    } else {
      console.log("There's no element to remove");
    };
  };

  function findPrevious(value) {
    let currentNode = head;
    while (currentNode.next !== null && currentNode.next.element !== value) {
      currentNode = currentNode.next;
    };
    return currentNode;
  };

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
    let prevNode = findPrevious(value);

    if (prevNode !== null) {
      prevNode.next = prevNode.next.next;
    };
  };

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



linkedList.remove('DarkMoonBlade');

linkedList.toString();
linkedList.push_front("Deus");
linkedList.push_back("Anjos");
linkedList.toString();
