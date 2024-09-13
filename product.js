function getProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  fetch('https://raw.githubusercontent.com/anginnnn/StoreProject/main/db.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products.find(p => p.id == productId);
      if (product) {
        displayProductDetails(product);
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error('Erro ao buscar detalhes do produto:', error));
}

function displayProductDetails(product) {
  const productDetails = document.getElementById('product-details');
  productDetails.innerHTML = `
    <h1>${product.name}</h1>
    <img src="${product.image}" alt="${product.name}">
    <p>${product.description}</p>
    <p>Preço: $${product.price}</p>
    <button onclick="addCart(${product.id})">Adicionar ao carrinho</button>
  `;
}

function addCart(productId) {
  // Buscar o carrinho do localStorage
  let cart = JSON.parse(localStorage.getItem("marioKart")) || [];

  // Buscar os detalhes do produto
  fetch('https://raw.githubusercontent.com/anginnnn/StoreProject/main/db.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products.find(p => p.id == productId);

      if (product) {
        // Verificar se o produto já está no carrinho
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
          existingProduct.quantity += 1;  // Incrementar quantidade
        } else {
          cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
          });
        }

        // Atualizar o carrinho no localStorage
        localStorage.setItem("marioKart", JSON.stringify(cart));
        alert('Produto adicionado ao carrinho');
      }
    })
    .catch(error => console.error('Erro ao buscar produto:', error));
}

getProductDetails();