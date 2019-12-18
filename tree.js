class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.rigth = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);
    if(this.root === null){
      this.root = newNode;
    } else {
        let temp = this.root;
        while(true){
          // check right branch of tree
          if(temp < temp.value){
            if(temp.rigth === null){
             temp.rigth = newNode;
             return this;
            }
            temp = temp.right;
          } else {
            if(temp.left === null){
              temp.left = newNode;
              return this;
            }
            temp = temp.left;
        }
      }
    }
  }

}

const binaryTree = new BinaryTree();
binaryTree.insert(9)
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(20)
binaryTree.insert(170)
binaryTree.insert(15)
binaryTree.insert(1)
//JSON.stringify(traverse(binaryTree.root))

// //     9
// //  4     20
// //1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}