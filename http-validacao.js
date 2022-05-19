function geraArrayDeURLs(arrayLinks) {
  //loop para cada {chave: valor} Object --> [valor]
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

function validaURLs(arrayLinks) {
  return geraArrayDeURLs(arrayLinks);
}

module.exports = validaURLs;
