const fs = require("fs");

function getChar() {
  const buffer = Buffer.alloc(1);
  process.stdout.write("Enter char: ");
  fs.readSync(0, buffer, 0, 1);
  return buffer.toString("utf8");
}

module.exports = getChar;
