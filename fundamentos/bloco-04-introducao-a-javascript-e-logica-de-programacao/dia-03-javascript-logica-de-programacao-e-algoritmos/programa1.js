let n = 29;

if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    let lineText = "";

    for (let j = 0; j < n; j += 1) {
      lineText += "*";
    }

    console.log(lineText);
  }
} else {
  console.log("Número inválido!");
}
