import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Level Up Your <span className="highlight">Game</span></h1>
          <p>Premium gaming gear for serious players</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

