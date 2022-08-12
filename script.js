const btn = document.querySelector("button");
const tbody = document.querySelector("tbody");

btn.onclick = () => {
  tbody.innerHTML = "";
  // limpa o console
  // console.clear();

  // pega os valores dos inputs
  const qtdAdultos = document.querySelector("#quantidade-adultos").value;
  const qtdCriancas = document.querySelector("#quantidade-criancas").value;
  const carnePorAdulto = document.querySelector("#carne-por-adulto").value;
  const edsonEstaIncluso = document.querySelector(
    "#edson-esta-incluso"
  ).checked;

  // calcula os outros valores
  const carnePorCrianca = (carnePorAdulto / 3).toFixed(1);
  const carneParaEdson = carnePorAdulto * 2;
  let edsonSub = 0;

  // consumo de adultos
  const trAdultos = document.createElement("tr");

  const tdAdultosCat = document.createElement("td");
  const tdAdultosCal = document.createElement("td");
  const tdAdultosSub = document.createElement("td");

  tdAdultosCat.textContent = "Adultos";
  tdAdultosCal.textContent = `${qtdAdultos} x ${carnePorAdulto}g`;
  const adultosSub = ((qtdAdultos * carnePorAdulto) / 1000).toFixed(2);
  tdAdultosSub.textContent = `${adultosSub}kg`;

  trAdultos.appendChild(tdAdultosCat);
  trAdultos.appendChild(tdAdultosCal);
  trAdultos.appendChild(tdAdultosSub);

  // consumo das crianças
  const trCrianca = document.createElement("tr");

  const tdCriancaCat = document.createElement("td");
  const tdCriancaCal = document.createElement("td");
  const tdCriancaSub = document.createElement("td");

  tdCriancaCat.textContent = "Crianças";
  tdCriancaCal.textContent = `${qtdCriancas} x ${carnePorCrianca}g`;
  const criancaSub = ((qtdCriancas * carnePorCrianca) / 1000).toFixed(2);
  tdCriancaSub.textContent = `${criancaSub}kg`;

  trCrianca.appendChild(tdCriancaCat);
  trCrianca.appendChild(tdCriancaCal);
  trCrianca.appendChild(tdCriancaSub);

  // consumo de Edson
  if (edsonEstaIncluso) {
    const trEdson = document.createElement("tr");

    const tdEdsonCat = document.createElement("td");
    const tdEdsonCal = document.createElement("td");
    const tdEdsonSub = document.createElement("td");

    tdEdsonCat.textContent = "Edson";
    tdEdsonCal.textContent = `2 x ${carnePorAdulto}g`;
    edsonSub = ((carnePorAdulto * 2) / 1000).toFixed(2);
    tdEdsonSub.textContent = `${edsonSub}kg`;

    trEdson.appendChild(tdEdsonCat);
    trEdson.appendChild(tdEdsonCal);
    trEdson.appendChild(tdEdsonSub);

    tbody.appendChild(trEdson);
  }

  // consumo total
  const trTotal = document.createElement("tr");

  const tdTotalLabel = document.createElement("td");
  const tdTotalResult = document.createElement("td");

  const total = Number(adultosSub) + Number(criancaSub) + Number(edsonSub);
  tdTotalLabel.textContent = "Total";
  tdTotalLabel.setAttribute("colspan", "2");
  tdTotalResult.textContent = `${total}kg`;

  trTotal.appendChild(tdTotalLabel);
  trTotal.appendChild(tdTotalResult);

  tbody.appendChild(trAdultos);
  tbody.appendChild(trCrianca);

  tbody.appendChild(trTotal);
};
