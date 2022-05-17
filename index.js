const chalk = require("chalk");
const fs = require("fs");

const { encode } = require("punycode");
const { fileURLToPath } = require("url");

fs.readFile(file, [encode], [callback])

console.log(chalk.blue("Inicio do treinamento de NodeJs"));

const paragrafo = "Teste NodeJs retornando uma funcção";

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
