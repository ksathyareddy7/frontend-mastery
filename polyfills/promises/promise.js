export function MyPromise(executor) {
  let value,
    state = "pending",
    handlers = [];

  function resolve(result) {
    if (state !== "pending") return;
    state = "fulfilled";
    value = result;
    handlers.forEach();
  }
}
