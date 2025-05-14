function checkTypes(a, b) {
  console.log(typeof a, typeof b);
}

checkTypes(42, "hello");
checkTypes(true, null);
checkTypes(undefined, {});

function toNumber(val) {
  return {
    input: val,
    number: Number(val),
    parse: parseInt(val),
    unary: +val,
  };
}

console.log(toNumber("123"));
console.log(toNumber("123abc"));
console.log(toNumber(true));
console.log(toNumber(null));

function testTruthyFalsy(val) {
  return {
    input: val,
    bool: Boolean(val),
    trenary: val ? "thruthy" : "falsy",
  };
}

console.log(testTruthyFalsy(0));
console.log(testTruthyFalsy(""));
console.log(testTruthyFalsy(" "));
console.log(testTruthyFalsy([]));
console.log(testTruthyFalsy({}));
console.log(testTruthyFalsy(null));
