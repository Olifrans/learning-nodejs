const chalk = require("chalk");
const fs = require("fs");

//Expressão regular gerada com suporte do "regex101"
// => https://regex101.com/
// => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp

function extraiLinks(expreRegularTexto) {
  const regex = /\[([^\]]*)\]\((https:\/\/[^$#\s].[^\s]*)\)/gm;

  const resultArray = [];
  let varTemp;

  while ((varTemp = regex.exec(expreRegularTexto)) !== null) {
    resultArray.push({ [varTemp[1]]: varTemp[2] });
  }
  return resultArray;
}

//Tratamento de erros
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
    console.log(extraiLinks(resultTexto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("operação concluída"));
  }
}

//pegaArquivo("./arquivos/Readme.md");

module.exports = pegaArquivo;