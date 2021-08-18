function fillStateSelect() {
  const selectState = document.getElementById("state");

  for (let i = 0; i < states.length; i++) {
    const actualState = states[i];
    const option = document.createElement("option");

    option.setAttribute("value", actualState.sigla);
    option.innerText = actualState.nome;

    if (i === 0) {
      option.setAttribute("selected", "selected");
    }

    selectState.appendChild(option);
  }
}

window.onload = () => {
  fillStateSelect();
};
