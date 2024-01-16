/**
 * 数据结构，链表的节点
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * 数据结构 链表
 */
class LinkList {
  /**
   * 构造链表
   */
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 尾插
   * @param val 要插入的元素
   */
  append(val) {
    let node = new Node(val);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  /**
   * 将链表转换为字符串
   */
  toStr() {
    let current = this;
    let string = "";
    while (current) {
      string += current.val + (current.next ? "," : ".");
      current = current.next;
    }
    return string;
  }
}

/**
 * 合并两个有序链表
 */
//创建俩个有序链表
let list1 = new LinkList();
for (let i = 0; i < 10; i++) {
  list1.append(i * 2 + 1);
}

let list2 = new LinkList();
for (let i = 0; i < 10; i++) {
  list2.append(i * 2);
}

/**
 * 递归的思路解决
 * @param l1 有序链表1
 * @param l2 有序链表2
 * @returns {*} 返回值 合并后的有序链表
 */
const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const m1 = mergeTwoLists(list1.head, list2.head);
console.log(m1.tos);
console.log(m1);
console.log(list1.toStr());
console.log(list2.toStr());

// let linkendlis = {
//     head: undefined, tail: undefined, current: undefined, array: [],
//     push: function (item) {
//         if (this.head == undefined) {
//             this.head = item;
//             this.tail = item;
//             this.current = item;
//
//             let items = {
//                 pre: undefined, val: item, next: undefined,
//             };
//             this.array.push(items)
//         } else {
//             let pre = this.array[this.array.length - 1]
//
//             let items = {
//                 pre: pre, val: item, next: undefined,
//             };
//             pre.next = items;
//             this.array.push(items)
//         }
//
//
//     }, reset: function () {
//         this.current = undefined;
//     }
// };
//
// for (let i = 0; i < 10; i++) {
//     linkendlis.push(i * 2 + 1);
// }
//
//
// console.log(linkendlis)
// linkendlis.head.val
//
//
// linkendlis.head.next.next.pre.val
