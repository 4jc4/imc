import "./main.css";
import { calculateImc, render } from "./helpers";

const imcForm = document.querySelector("#imc-form");
const inputHeight = document.querySelector("#input-height");
const inputWeight = document.querySelector("#input-weight");
const tbody = document.querySelector("#imc-table tbody");
const imcResult = document.querySelector("#imc-result");

tbody.innerHTML = render(0);

imcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = Number.parseFloat(inputHeight.value);
  const weight = Number.parseFloat(inputWeight.value);
  const imc = calculateImc(weight, height);
  tbody.innerHTML = render(imc);
  imcResult.textContent = `SEU IMC: ${imc.toString()}`;
});
