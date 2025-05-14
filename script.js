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

function greet(name) {
  return `Hello, ${name || "stranger"}`;
}

console.log(greet("Alice"));
console.log(greet(""));
console.log(greet(null));

function getCity(user) {
  return user && user.address && user.address.city;
}

console.log(getCity({ address: { city: "Kyiv" } }));
console.log(getCity({}));
console.log(getCity(null));

function explainComparison(a, b) {
  return {
    result: a == b,
    typeA: typeof a,
    typeB: typeof b,
  };
}

console.log(explainComparison(false, 0)); // 0 flasy
console.log(explainComparison("", 0)); // empty string and 0 are falsy
console.log(explainComparison(null, undefined)); // equal in non strict equality
console.log(explainComparison([], false));
// [] converts to empty string and its flasy
console.log(explainComparison([1], 1)); // [1] converts to 1

function isEmpty(val) {
  if (val == null) return true;
  if (typeof val === "boolean") return !val;
  if (typeof val === "number") return val === 0 || Number.isNaN(val);
  if (typeof val === "string") return val.trim() === "";
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === "object") return Object.keys(val).length === 0;
  return false;
}

console.log(isEmpty({}));

console.log([] + []); // empty string cause [] is ''
console.log([] + {}); // object Object toString returns object
console.log({} + []); // object // in node js is 0
console.log({} + {}); // object object

function toBoolean(val) {
  if (val === null || val === undefined) return false;
  if (typeof val === "string") return !(val === "");
  if (typeof val === "number") return val !== 0 && !Number.isNaN(val);
  if (typeof val === "object") return !(Object.keys(val).length === 0);
  if (Array.isArray(val)) return !(val.length === 0);
  return Boolean(val);
}

console.log(toBoolean(""));        // false
console.log(toBoolean("hello"));   // true
console.log(toBoolean(0));         // false
console.log(toBoolean(NaN));       // false
console.log(toBoolean(5));         // true
console.log(toBoolean([]));        // false
console.log(toBoolean([1]));       // true
console.log(toBoolean({}));        // false
console.log(toBoolean({ a: 1 }));  // true
console.log(toBoolean(false));     // false
console.log(toBoolean(true));      // true
console.log(toBoolean(null));      // false
console.log(toBoolean(undefined)); // false