import { MyPromise } from "./promise";

MyPromise.all = function (promises) {
  return new MyPromise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError("MyPromise.all accepts an array or iterable.");
    }

    var results = [];
    var remaining = promises.length;

    if (remaining === 0) {
      resolve(results);
      return;
    }

    // Handle the array of promises
    promises.forEach(function (promise, index) {
      // If the item is not a promise, make it one (implicitly wrapped)
      MyPromise.resolve(promise).then(
        function (value) {
          results[index] = value;
          remaining -= 1;

          // If all promises are resolved, return the results
          if (remaining === 0) {
            resolve(results);
          }
        },
        function (reason) {
          // If any promise is rejected, reject the entire Promise.all
          reject(reason);
        }
      );
    });
  });
};
