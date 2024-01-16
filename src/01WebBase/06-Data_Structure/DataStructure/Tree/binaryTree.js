class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 插入节点
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 删除节点
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // 搜索节点
  search(value) {
    return this.searchNode(this.root, value);
  }

  // 遍历节点（前序遍历）
  traverse() {
    this.traverseNode(this.root);
  }

  // 辅助方法：插入节点
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 辅助方法：删除节点
  deleteNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.deleteNode(node.right, minNode.value);
        return node;
      }
    }
  }

  // 辅助方法：搜索节点
  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // 辅助方法：遍历节点（前序遍历）
  traverseNode(node) {
    if (node !== null) {
      console.log(node.value); // 访问根节点值（前序遍历）
      this.traverseNode(node.left); // 遍历左子树（前序遍历）
      this.traverseNode(node.right); // 遍历右子树（前序遍历）
    }
  }

  // 辅助方法：查找最小节点（用于删除操作）
  findMinNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
}
