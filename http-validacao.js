const fetch = require("node-fetch");

function manajaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatusDaUrls(arrayURLs) {
  try {
    const arrayDeStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayDeStatus;
  } catch (erro) {
    manajaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatusDaUrls(links);

  //Spreed operator
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}

module.exports = validaURLs;
