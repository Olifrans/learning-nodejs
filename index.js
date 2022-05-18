const chalk = require("chalk");

const fs = require("fs");

function trataErro(erro) {
  throw new Error(
    chalk.red(
      erro.code,
      "Errrrrrrrooooooo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Juninho"
    )
  );
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (erro, dataTexto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(dataTexto));
  });
}

pegaArquivo("./arquivos/");
