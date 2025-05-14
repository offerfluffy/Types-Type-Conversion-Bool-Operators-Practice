function checkTypes(a, b) {
  console.log(typeof a, typeof b);
}

checkTypes(42, "hello");
checkTypes(true, null);
checkTypes(undefined, {});

function toNumber(val) {
  return {
    number: Number(val),
    parse: parseInt(val),
    unary: +val,
  };
}

console.log(toNumber("4"));
console.log(toNumber(""));
console.log(toNumber(null));
