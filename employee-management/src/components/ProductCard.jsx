import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div>
      <img
        src={product.images[0]}
        alt={product.title}
        width="150"
      />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br />
      <br />

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  )
}

export default ProductCard