let n = 5;
let lineText = "*";
let emptySpaces = "    ";

for (let i = 0; i < n; i += 1) {
  console.log(emptySpaces + lineText);

  lineText += "*";
  emptySpaces = emptySpaces.substring(0, emptySpaces.length - 1);
}
