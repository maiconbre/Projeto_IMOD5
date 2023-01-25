import readlineSync from "readline-sync";
import chalk from "chalk";

const properties = [];
let input = "";

while (input != "sair") {
  properties.push(input);
  input = readlineSync
    .question("Digite uma propriedade CSS: ")
    .toLocaleLowerCase();
}
console.log(chalk.cyan.underline(properties.sort().join("\n")));
