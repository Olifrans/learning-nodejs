const chalk = require("chalk");

const fs = require("fs");

const expreRegularTexto =
  "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)";

//Expressão regular gerado com suport do "regex101"
// => https://regex101.com/
// => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp

function extraiLinks(expreRegularTexto) {
  const regex = /\[([^\]]*)\]\((https:\/\/[^$#\s].[^\s]*)\)/gm;
  const linksExtraidos = expreRegularTexto.match(regex);
  console.log(linksExtraidos);
}
extraiLinks(expreRegularTexto)




function trataErro(erro) {
  throw new Error(
    chalk.red(erro.code, "Errrrrrrrooooooo!!!!!!!!!!!!!!! Juninho")
  );
}

// //Função Assicrona usando - Async e Await
// async function pegaArquivo(caminhoDoArquivo) {
//   try {
//     const encoding = "utf-8";
//     const resultTexto = await fs.promises.readFile(caminhoDoArquivo, encoding);
//     console.log(chalk.green(resultTexto));
//   } catch (erro) {
//     trataErro(erro);
//   } finally {
//     console.log(chalk.yellow("operação concluída"));
//   }
// }

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

//pegaArquivo("./arquivos/Readme.md");

// [
//   {
//     [nomeLink]: url,
//   },
// ];
