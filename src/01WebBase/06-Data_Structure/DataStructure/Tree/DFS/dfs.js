// obj
let obj = {
  children:
    [
      {
        index: 0,
        children:
          [
            {
              index: 1,
              children: [
                {
                  index: 3
                }]
            }]
      },
      {
        index: 4
      },
      {
        index: 5,
        children:
          [
            {
              index: 7,
              children: [
                {
                  index: 8
                }]
            }]
      }, {
      index: 6
    }]
};
/**
 * 深度优先 递归实现
 * @param node
 * @param nodeList
 * @returns {[]}
 */
let depth1 = (node, nodeList = []) => {
  //node不能为null
  if (node !== null) {
    nodeList.push(node);
    let children = node.children || [];
    //如果children.length存在
    for (let i = 0; i < children.length; i++) {
      //递归调用
      depth1(children[i], nodeList);
    }
  }
  return nodeList;
};
/**
 * 非递归实现
 * @param node
 * @returns {[]}
 */
let depth2 = (node) => {
  let stack = [];
  let nodes = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      //每次取最后一个
      let item = stack.pop();
      let children = item.children || [];
      nodes.push(item);
      //判断children的长度
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
  }
  return nodes;
};


console.log(depth1(obj));
