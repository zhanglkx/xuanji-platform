(function() {
  const root = this;

  function watch(obj, name, func) {
    let value = obj[name];

    Object.defineProperty(obj, name, {
      get: function() {
        return value;
      },
      set: function(newValue) {
        value = newValue;
        func(value);
      }
    });

    if (value) obj[name] = value;
  }

  this.watch = watch;
})();

const obj = {
  value: 1
};

watch(obj, "value", function(newvalue) {
  document.getElementById("container").innerHTML = newvalue;
});

document.getElementById("button").addEventListener("click", function() {
  obj.value += 1;
});
