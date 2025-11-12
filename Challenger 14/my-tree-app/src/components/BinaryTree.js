import TreeNode from "./TreeNode";

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  search(value, node = this.root) {
    if (!node) return false;
    if (node.value === value) return true;
    return value < node.value
      ? this.search(value, node.left)
      : this.search(value, node.right);
  }

  toD3Tree(node = this.root) {
    if (!node) return null;
    return {
      name: String(node.value),
      children: [this.toD3Tree(node.left), this.toD3Tree(node.right)].filter(Boolean)
    };
  }
}
