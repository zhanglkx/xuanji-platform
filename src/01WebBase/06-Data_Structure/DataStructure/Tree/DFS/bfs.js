// obj
let obj = {
  children: [{
    index: 0,
    children: [{
      index: 1,
      children: [{
        index: 3
      }]
    }]
  }, {
    index: 4
  }, {
    index: 5,
    children: [{
      index: 7,
      children: [{
        index: 8
      }]
    }]
  }, {
    index: 6
  }]
};

/**
 * 广度优先搜索
 * @param node
 * @returns {[]}
 */
let breadth = (node) => {
  let nodes = [];
  let stack = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      //取第一个
      let item = stack.shift();
      let children = item.children || [];
      nodes.push(item);
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i]);
      }
    }
  }
  return nodes;
};

console.log(breadth(obj));
