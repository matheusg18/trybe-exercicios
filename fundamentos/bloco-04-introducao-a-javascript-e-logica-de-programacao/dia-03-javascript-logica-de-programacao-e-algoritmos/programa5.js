let n = 7;

let emptySpacesBySide = parseInt(n / 2);
for (let i = 1; i <= n; i += 2, emptySpacesBySide -= 1) {
  let lineText = "";

  if (emptySpacesBySide > 0) {
    for (let j = 0; j < emptySpacesBySide; j += 1) {
      lineText += " ";
    }

    for (let j = 0; j < i; j += 1) {
      if (j === 0 || j === i - 1) {
        lineText += "*";
      } else {
        lineText += " ";
      }
    }

    for (let j = 0; j < emptySpacesBySide; j += 1) {
      lineText += " ";
    }
  } else {
    for (let j = 0; j < n; j += 1) {
      lineText += "*";
    }
  }

  console.log(lineText);
}
