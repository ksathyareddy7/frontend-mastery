Object.myCreate = function (proto, propertiesObject) {
  if (proto !== null && typeof proto !== "object") {
    throw new TypeError("Object prototype may only be an object or null");
  }

  function F() {}
  F.prototype = proto;

  var obj = new F();

  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
};
