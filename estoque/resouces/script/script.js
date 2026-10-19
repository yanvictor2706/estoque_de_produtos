
let produtos = ["Mouse","Teclado","Monitor","Gabinete","Webcam","Headset","Roteador","Fonte","SSD","Cadeira"]; 
let recebe = prompt ("Digite um item para seu computador:")
produtos.push("Placa de Vídeo", "Processador")

produtos.push("Placa de Vídeo", "Processador");
// vendo se tem disponível monitor
if (produtos.includes("Monitor")) {
    console.log("Produto encontrado")
}

// vendo se tem disponível headset
if (produtos.includes("Headset")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}
// vendo se tem fonte
if (produtos.includes("Fonte")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}
// pegando somente nomes grandes
let produtosFiltrados = produtos.filter((p) => p.length > 5);
// Mostrando tudo na tela
console.log(produtos);
console.log(produtosFiltrados);