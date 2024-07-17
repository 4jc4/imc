export const imcs = [
  {
    condition: "imc < 18.5",
    imc: "imc < 18.5",
    classification: "MAGREZA",
    obesity: "0",
  },
  {
    condition: "imc >= 18.5 && imc <= 24.9",
    imc: "18.5 <= imc <= 24.9",
    classification: "NORMAL",
    obesity: "0",
  },
  {
    condition: "imc >= 25.0 && imc <= 29.9",
    imc: "25.0 <= imc <= 29.9",
    classification: "SOBREPESO",
    obesity: "I",
  },
  {
    condition: "imc >= 30.0 && imc <= 39.9",
    imc: "30.0 <= imc <= 39.9",
    classification: "OBESIDADE",
    obesity: "II",
  },
  {
    condition: "imc >= 40.0",
    imc: "imc >= 40.0",
    classification: "OBESIDADE GRAVE",
    obesity: "III",
  },
];
