import { imcs } from "./consts";

export const render = (imc) => {
  return imcs
    .map((item) => {
      if (imc) {
        if (eval(item.condition)) {
          return `<tr class="text-sm text-gray-500 font-medium bg-green-200"><td class="p-3">${item.imc}</td><td class="p-3">${item.classification}</td><td class="text-center">${item.obesity}</td></tr>`;
        } else {
          return `<tr class="text-sm text-gray-500 font-medium"><td class="p-3">${item.imc}</td><td class="p-3">${item.classification}</td><td class="text-center">${item.obesity}</td></tr>`;
        }
      } else {
        return `<tr class="text-sm text-gray-500 font-medium"><td class="p-3">${item.imc}</td><td class="p-3">${item.classification}</td><td class="text-center">${item.obesity}</td></tr>`;
      }
    })
    .join("");
};

// export const render = () => {
//   return imcs
//     .map(
//       (imc) =>
//         `<tr class="text-sm text-gray-500 font-medium"><td class="p-3">${imc.imc}</td><td class="p-3">${imc.classification}</td><td class="text-center">${imc.obesity}</td></tr>`
//     )
//     .join("");
// };

export const calculateImc = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};
