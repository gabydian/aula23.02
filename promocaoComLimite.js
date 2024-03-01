function calcularValorCompra(valorCompra, possuiConvenio, usaCartaoLoja, desconto = 100) {
  let valorFinal = valorCompra;

  if (possuiConvenio || usaCartaoLoja) {
    let descontoMaximo = valorCompra * 0.15;

    if (usaCartaoLoja && possuiConvenio) {
      desconto = Math.min(descontoMaximo, desconto);
    } else if (usaCartaoLoja) {
      desconto = Math.min(descontoMaximo, desconto);
    } else if (possuiConvenio) {
      desconto = Math.min(descontoMaximo, desconto);
    }

    valorFinal -= valorCompra * (desconto / 100);
  }

  return valorFinal;
}
