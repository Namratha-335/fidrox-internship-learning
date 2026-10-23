import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import { getProducts } from '../services/productService'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default Products