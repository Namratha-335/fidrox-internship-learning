import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartItemCount } = useCart()

  const linkStyle = ({ isActive }) => ({
    marginRight: '15px',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black',
    textDecoration: isActive ? 'underline' : 'none'
  })

  return (
    <nav>
      <h2>My Shopping Store</h2>

      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/products" style={linkStyle}>
        Products
      </NavLink>

      <NavLink to="/cart" style={linkStyle}>
        Cart ({cartItemCount})
      </NavLink>

      <NavLink to="/checkout" style={linkStyle}>
        Checkout
      </NavLink>
    </nav>
  )
}

export default Navbar