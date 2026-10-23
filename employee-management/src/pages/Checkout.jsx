import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const { cart, totalAmount } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div>
        <h1>Checkout</h1>

        <p>There are no items to checkout.</p>

        <button onClick={() => navigate('/products')}>
          Go to Products
        </button>
      </div>
    )
  }

  function handleOrder() {
    alert('Order placed successfully!')

    navigate('/')
  }

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map(item => (
        <p key={item.id}>
          {item.title} × {item.quantity}
        </p>
      ))}

      <h2>
        Total: ₹ {totalAmount.toFixed(2)}
      </h2>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  )
}

export default Checkout