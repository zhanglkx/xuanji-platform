Function.prototype.call2 = function (conntext) {
  var context = context || window;
  conntext.fn = this;
  arr = [...arguments];
  let res = conntext.fn(...arr);
  delete conntext.fn;
  return res;
};
