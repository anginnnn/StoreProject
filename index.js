class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: inline-block;
      margin: 1rem;
      font-family: sans-serif;
    }
    .card {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 16px;
      text-align: center;
      background-color: #f9f9f9;
      transition: box-shadow 0.3s ease;
    }
    .card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .card img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    .card h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #333;
    }
    .card p {
      margin: 0.5rem 0;
      color: #555;
    }
    .card a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      text-decoration: none;
      background-color: #007BFF;
      color: white;
      border-radius: 3px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .card a:hover {
      background-color: #0056b3;
    }
  </style>
  <div class="card">
    <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
    <h2>${this.getAttribute('name')}</h2>
    <p>${this.getAttribute('description')}</p>
    <p>Preço: R$ ${this.getAttribute('price')}</p>
    <a href="product.html?id=${this.getAttribute('id')}">Ver mais</a>
  </div>
`;
}
}

customElements.define('product-card', ProductCard);
