fetch('https://raw.githubusercontent.com/anginnnn/StoreProject/main/db.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    // Chamar a função que vai renderizar os produtos e talz
    renderProducts(products);
  })
  .catch(error => console.error('Erro ao buscar produtos:', error));
