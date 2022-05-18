const chalk = require("chalk");

const pegaArquivo = require("./index");

const caminho = process.argv;

async function precessaTexto(caminhoDeArquivo) {
  const result = await pegaArquivo(caminhoDeArquivo[2]);

  console.log(chalk.yellow("Lista de links"), result);
}

precessaTexto(caminho);
