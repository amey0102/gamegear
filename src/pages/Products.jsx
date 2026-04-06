import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <h1>All Products</h1>
      
      <div className="filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;

