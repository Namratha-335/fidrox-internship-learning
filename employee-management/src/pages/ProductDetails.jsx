import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useCart } from '../context/CartContext'
import Loader from '../components/Loader'

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { addToCart } = useCart()

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.images[0]}
        alt={product.title}
        width="200"
        />

      <p>{product.description}</p>

      <h2>₹ {product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails