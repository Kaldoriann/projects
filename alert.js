function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

alert(sum()); // 0
alert(sum(1)); // 1
alert(sum(1, h)); // 3
alert(sum(1, h, 3)); // 6
alert(sum(1, h, 3, 4)); // 10
asadasdS;
