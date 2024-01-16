//v1
Function.prototype.apply1 = function (context, arg) {
  if (typeof context === "undefined" || context === null) {
    context = window;
  }

  context.fn = this;

  let result;
  if (arg) {
    result = context.fn(...arg);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

//v2
Function.prototype.apply2 = function (context, arg) {
  if (typeof context === "undefined" || context === null) {
    context = window;
  }

  let syb = Symbol();
  context[syb] = this;
  let result = context[syb](...arg);
  delete context[syb];
  return result;
};
