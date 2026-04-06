import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Link to="/products" className="back-link">← Back to Products</Link>
      
      <div className="details-grid">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="details-info">
          <span className="category-tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price-large">${product.price}</p>
          <p className="description">{product.description}</p>
          
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

