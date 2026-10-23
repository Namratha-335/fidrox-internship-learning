import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

function Cart() {
  const {
    cart,
    totalAmount
  } = useCart()

  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>

        <p>Your cart is empty.</p>

        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <h2>
        Total: ₹ {totalAmount.toFixed(2)}
      </h2>

      <button onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Cart