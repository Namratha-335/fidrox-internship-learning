import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>

      <p>
        Browse our products and add your favourite items
        to the shopping cart.
      </p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  )
}

export default Home