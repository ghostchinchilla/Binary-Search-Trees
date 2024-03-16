class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
  
    insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let prev = null;
      let curr = this.root;
      while (curr) {
        prev = curr;
        if (curr.val > val) {
          curr = curr.left;
        } else if (curr.val < val) {
          curr = curr.right;
        }
      }
  
      if (prev.val > val) prev.left = newNode;
      else prev.right = newNode;
      return this;
    }
  
    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
  
    insertRecursively(val) {
      function helper(root) {
        if (!root) {
          root = new Node(val);
          return root;
        }
  
        if (val < root.val) {
          root.left = helper(root.left)
        } else if (val > root.val) {
          root.right = helper(root.right)
        }
  
        return root;
      }
  
      if (!this.root) {
        this.root = new Node(val);
        return this;
      }
  
      helper(this.root);
      console.log(this);
      return this;
    }
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
  
    find(val) {
      let curr = this.root;
      while (curr) {
        if (curr.val < val) {
          curr = curr.right;
        } else if (curr.val > val) {
          curr = curr.left;
        } else {
          return curr;
        }
      }
      return undefined;
    }
  
    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
  
    findRecursively(val) {
      function helper(root) {
        if (!root) return undefined;
  
        if (root.val < val) {
          return helper(root.right);
        } else if (root.val > val) {
          return helper(root.left);
        } else {
          return root;
        }
      }
      return helper(this.root);
    }
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
  
    dfsPreOrder() {
      const retArr = [];
      function helper(root) {
        if (root) {
          retArr.push(root.val);
          helper(root.left);
          helper(root.right);
        }
      }
      helper(this.root);
      return retArr;
    }
  
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
  
    dfsInOrder() {
      const retArr = [];
      function helper(root) {
        if (root) {
          helper(root.left);
          retArr.push(root.val);
          helper(root.right);
        }
      }
      helper(this.root);
      return retArr;
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
  
    dfsPostOrder() {
      const retArr = [];
      function helper(root) {
        if (root) {
          helper(root.left);
          helper(root.right);
          retArr.push(root.val);
        }
      }
      helper(this.root);
      return retArr;
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
  
    bfs() {
      const retArr = [];
      const queue = [this.root];
      while (queue.length > 0) {
        const curr = queue.shift();
        retArr.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
      return retArr;
    }
  
    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */
  
    remove(val) {
  
    }
  
    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  
    isBalanced() {
  
    }
  
    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */
  
    findSecondHighest() {
      
    }
  }
  
  module.exports = BinarySearchTree;