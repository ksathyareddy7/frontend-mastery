Object.myAssign = function (target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const to = Object(target);
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    if (source != null) {
      for (let key of Object.keys(source)) {
        to[key] = source[key];
      }
    }
  }
  return to;
};
