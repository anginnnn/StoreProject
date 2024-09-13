function renderProducts(products) {
    const container = document.getElementById('products-container');
    products.forEach(product => {
      const productCard = document.createElement('product-card');
      productCard.setAttribute('id', product.id);
      productCard.setAttribute('name', product.name);
      productCard.setAttribute('description', product.description);
      productCard.setAttribute('price', product.price);
      productCard.setAttribute('image', product.image);
      container.appendChild(productCard);
    });
} 