import readlineSync from "readline-sync"
import chalk from "chalk";
const properties = [];
let input = "";

console.log("Digite as propriedades CSS. Digite 'SAIR' para finalizar.");

while (input.toLowerCase() !== "sair") {
    input = readlineSync.question("Digite uma propriedade: ");
    if (input.toLowerCase() !== "sair") {
        properties.push(input);
    }
}

console.log("Lista ordenada de propriedades CSS:")
console.log(chalk.red.underline(properties.sort().join("\n")));
