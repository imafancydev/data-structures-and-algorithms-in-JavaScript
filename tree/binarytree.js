function Node(data) {
  return ({
    data,
    left: null,
    right: null,
    show
  });


  function show() {
    return data;
  };

};

function BST() {
  let root = null;
  return ({
    insert,
    remove,
    findMin,
    findMax,
    find,
    getBST,
    inOrder,
    preOrder,
    postOrder,
    invertBT
  });

  function insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      };

    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      };
    };
  };

  function insert(value) {
    const newNode = Node(value);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    };
  };

  function remove() { };

  function findMin() { };

  function findMax() { };

  function find() { };

  function getBST() {
    return root;
  };

  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      console.log(node.show());
      inOrder(node.right);
    };


  };

  function preOrder(node) {
    if (node !== null) {
      console.log(node.show());
      preOrder(node.left);
      preOrder(node.right);
    };
  };

  function postOrder(node) {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show());
    };
  };

};

const nums = BST();

nums.insert(17);
nums.insert(21);
nums.insert(9);
nums.insert(5);
nums.insert(32);
nums.insert(15);
nums.insert(20);
nums.insert(88);
nums.insert(10);
nums.insert(68);
nums.insert(90);

nums.postOrder(nums.getBST());




