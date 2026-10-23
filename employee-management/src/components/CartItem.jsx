import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart()

  return (
    <div>
      <img
        src={item.images[0]}
        alt={item.title}
        width="100"
    />

      <h3>{item.title}</h3>

      <p>Price: ₹ {item.price}</p>

      <button onClick={() => decreaseQuantity(item.id)}>
        -
      </button>

      <span> {item.quantity} </span>

      <button onClick={() => increaseQuantity(item.id)}>
        +
      </button>

      <p>
        Subtotal: ₹ {(item.price * item.quantity).toFixed(2)}
      </p>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>

      <hr />
    </div>
  )
}

export default CartItem