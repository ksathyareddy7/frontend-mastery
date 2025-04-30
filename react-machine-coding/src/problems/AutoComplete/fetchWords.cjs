const https = require("https");
const fs = require("fs");
const path = require("path");

const WORDS_URL =
  "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
const OUTPUT_FILE = path.join(__dirname, "words.js");

https
  .get(WORDS_URL, (res) => {
    let data = "";

    // Collect data chunks
    res.on("data", (chunk) => {
      data += chunk;
    });

    // Once all data is received
    res.on("end", () => {
      // Split the data by newline to create an array of words
      const wordsArray = data
        .split("\n")
        .map((word) => word.trim())
        .filter(Boolean);

      // Convert the array into a JavaScript module export
      const fileContent = `export const words = ${JSON.stringify(
        wordsArray,
        null,
        2
      )};\n`;

      // Write the content to the output file
      fs.writeFile(OUTPUT_FILE, fileContent, "utf8", (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log(
            `Successfully written ${wordsArray.length} words to ${OUTPUT_FILE}`
          );
        }
      });
    });
  })
  .on("error", (err) => {
    console.error("Error fetching the word list:", err);
  });
