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

function getRadioValue() {
  if (document.getElementById("house").checked) {
    return "Casa";
  }
  return "Apartamento";
}

function validateDate() {
  const date = document.getElementById("date").innerText;
  const day = parseInt(date.substr(0, 2));
  const month = parseInt(date.substr(3, 2));
  const year = parseInt(date.substr(6, 4));

  if (day === NaN || month === NaN || year === NaN) {
    return "<strong>Data no formato errado!</strong> Formato certo: 12/12/2012";
  }
  return `${day}/${month}/${year}`;
}

function getFormData() {
  const formData = {
    Nome: document.getElementById("name").value,
    Email: document.getElementById("email").value,
    CPF: document.getElementById("cpf").value,
    Endereço: document.getElementById("adress").value,
    Cidade: document.getElementById("city").value,
    Estado: document.getElementById("state").value,
    Morada: getRadioValue(),
    Resumo: document.getElementById("resume").value,
    Cargo: document.getElementById("office").value,
    Descrição: document.getElementById("description").value,
    Data: validateDate(),
  };

  displayFormData(formData);
}

function displayFormData(formData) {
  const displayDiv = document.createElement("div");
  for (const key in formData) {
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = `${key}: ${formData[key]}`;
    displayDiv.appendChild(newParagraph);
  }
  document.body.appendChild(displayDiv);
}

function handleSubmitButton(event) {
  event.preventDefault();
  getFormData();
}

window.onload = () => {
  fillStateSelect();

  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", handleSubmitButton);
};
