let n = 5;

let emptySpacesBySide = parseInt(n / 2);
for (let i = 1; i <= n; i += 2, emptySpacesBySide -= 1) {
  let lineText = "";

  for (let j = 0; j < emptySpacesBySide; j += 1) {
    lineText += " ";
  }

  for (let j = 0; j < i; j += 1) {
    lineText += "*";
  }

  for (let j = 0; j < emptySpacesBySide; j += 1) {
    lineText += " ";
  }

  console.log(lineText);
}
