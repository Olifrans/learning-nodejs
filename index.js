const chalk = require("chalk");

const fs = require("fs");

function trataErro(erro) {
  throw new Error(
    chalk.red(erro.code, "Errrrrrrrooooooo!!!!!!!!!!!!!!! Juninho")
  );
}

//Função Assicrona usando - Async e Await
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const resultTexto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(resultTexto));
  } catch (erro) {
    trataErro(erro);
  }
}

////Função Assicrona usando - Then
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((dataTexto) => chalk.green(console.log(dataTexto)))
//     .catch((erro) => trataErro(erro));
// }

////Função Sicrona
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, dataTexto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(dataTexto));
//   });
// }

pegaArquivo("./arquivos/");
