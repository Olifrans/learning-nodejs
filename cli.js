const chalk = require("chalk");
const validaURLs = require("./http-validacao");

const pegaArquivo = require("./index");

const caminho = process.argv;

async function precessaTexto(caminhoDeArquivo) {
  const result = await pegaArquivo(caminhoDeArquivo[2]);

  if (caminho[3] === "validar") {
    console.log(chalk.yellow("Links validados"), validaURLs(result));
  } else {
    console.log(chalk.yellow("Lista de links"), result);
  }
}

precessaTexto(caminho);
