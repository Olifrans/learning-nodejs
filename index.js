//const chalk = require("chalk");
const fs = require("fs");

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (_, dataTexto) => {
    //console.log(chalk.blue(paragrafo));
    console.log(pegaArquivo(dataTexto));
  });
}

pegaArquivo("./arquivos/Readme.md");
