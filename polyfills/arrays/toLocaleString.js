Array.prototype.myToLocaleString = function (locales, options) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myToLocaleString called on null or undefined"
    );
  }
  locales = locales || "en-US";
  options = options || {};

  // Convert each element in the array to a string
  const elements = this.map((item) => {
    if (item != null && typeof item.toLocaleString === "function") {
      return item.toLocaleString(locales, options);
    }
    return String(item);
  });

  return elements.join(",");
};
