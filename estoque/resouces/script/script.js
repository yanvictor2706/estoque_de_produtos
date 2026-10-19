let produtos = ["Mouse","Teclado","Monitor","Gabinete","Webcam","Headset","Roteador","Fonte","SSD","Cadeira"]; 
produtos.push("Placa de Vídeo", "Processador")

produtos.push("Placa de Vídeo", "Processador");

if (produtos.includes("Monitor")) {
    console.log("Produto encontrado")
}


if (produtos.includes("Headset")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}

if (produtos.includes("Fonte")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}

let produtosFiltrados = produtos.filter((p) => p.length > 5);

console.log(produtos);
console.log(produtosFiltrados);