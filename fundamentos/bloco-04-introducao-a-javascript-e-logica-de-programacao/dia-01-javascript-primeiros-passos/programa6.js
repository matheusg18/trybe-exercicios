let piece = "pAWn";
piece = piece.toLowerCase();

switch (piece) {
  case "pawn":
    console.log("Moves forward one or two squares");
    break;

  case "bishop":
    console.log("Moves diagonally");
    break;

  case "knight":
    console.log("Moves in an 'L-shape'");
    break;

  case "rook":
    console.log("Moves like a '+' sign");
    break;

  case "queen":
    console.log("Moves is that it moves like a rook and a bishop combined");
    break;

  case "king":
    console.log("Moves one square in any direction");
    break;

  default:
    console.log("error");
    break;
}
