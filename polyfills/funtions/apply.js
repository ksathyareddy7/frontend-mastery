//calls the function with the given context, arguments as ARRAY and returns result
Function.prototype.myApply = function (context, argsArray) {
  const originalFunction = this;
  // Create a unique property name to avoid overriding existing properties
  const uniqueId = Symbol("fn");
  context[uniqueId] = originalFunction;
  argsArray = argsArray || [];
  const result = context[uniqueId](...argsArray);
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

person.greet.apply(user, [18]);
person.greet.myApply(user, [18]);
