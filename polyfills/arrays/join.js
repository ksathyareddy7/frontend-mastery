Array.prototype.myJoin = function (separator = ",") {
  if (this == null) {
    throw new TypeError("Array.prototype.myJoin called on null or undefined");
  }
  const len = this.length;
  let result = "";
  // Iterate through the array starting from the adjusted index
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      result += this[i];
    } else {
      result += this[i] + separator;
    }
  }

  return result;
};

const elements = ["Fire", "Air", "Water"];

console.log(elements.myJoin());
// Expected output: "Fire,Air,Water"

console.log(elements.myJoin(""));
// Expected output: "FireAirWater"

console.log(elements.myJoin("-"));
// Expected output: "Fire-Air-Water"
