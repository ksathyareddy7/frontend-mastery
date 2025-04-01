//calls the function with the given context and returns result
Function.prototype.myCall = function (context, ...args) {
  const originalFunction = this;
  // Create a unique property name to avoid overriding existing properties
  const uniqueId = Symbol("fn");
  context[uniqueId] = originalFunction;
  const result = context[uniqueId](...args);
  // Delete the temporary function property
  delete context[uniqueId];
  return result;
};

const person = {
  name: "john doe",
  greet(age) {
    console.log(`My name is ${this.name}, and I am ${age} years old.`);
  },
};

const user = {
  name: "sathya reddy",
};

person.greet.call(user, 18);
person.greet.myCall(user, 18);
