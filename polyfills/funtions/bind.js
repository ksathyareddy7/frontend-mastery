// returns a new function that will be invoked with the passed in context
Function.prototype.myBind = function (context) {
  const originalFunction = this;
  return function (...args) {
    // Create a unique property name to avoid overriding existing properties
    const uniqueId = Symbol("fn");
    context[uniqueId] = originalFunction;
    const result = context[uniqueId](...args);
    // Delete the temporary function property
    delete context[uniqueId];
    return result;
  };
};

const person = {
  name: "john doe",
  greet() {
    console.log(this.name);
  },
};

const user = {
  name: "sathya reddy",
};

const originalBind = person.greet.bind(user);
originalBind();

const myBind = person.greet.myBind(user);
myBind();
