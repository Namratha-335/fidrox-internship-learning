
import { useState, useMemo, useCallback } from 'react'
import useFetch from '../hooks/useFetch'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import useDebounce from '../hooks/useDebounce'

function Dashboard({ onProductSelect }) {
  const {
    data: products,
    loading,
    error
  } = useFetch('https://dummyjson.com/products')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const debouncedSearch = useDebounce(searchTerm, 300)

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value)
  }, [])

  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))]
  }, [products])

  const filteredProducts = useMemo(() => {
    let result = products.filter(product =>
      product.title.toLowerCase().includes(
        debouncedSearch.toLowerCase()
      )
    )

    if (selectedCategory !== 'all') {
      result = result.filter(
        product => product.category === selectedCategory
      )
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [products, debouncedSearch, selectedCategory, sortBy])

  const averagePrice = useMemo(() => {
    if (filteredProducts.length === 0) return 0

    const total = filteredProducts.reduce(
      (sum, product) => sum + product.price,
      0
    )

    return total / filteredProducts.length
  }, [filteredProducts])

  if (loading) return <p>Loading products...</p>
  if (error) return <p>Error: {error}</p>
  if (products.length === 0) return <p>No products found.</p>

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <div className="filters">
        <label>
          Category:{' '}
          <select
            value={selectedCategory}
            onChange={event =>
              setSelectedCategory(event.target.value)
            }
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort by:{' '}
          <select
            value={sortBy}
            onChange={event => setSortBy(event.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="title">Title: A to Z</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </label>
      </div>

      <div className="summary">
        <p>Total products loaded: {products.length}</p>
        <p>Products matching filters: {filteredProducts.length}</p>
        <p>Average price of shown products: ${averagePrice.toFixed(2)}</p>
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No matching products.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />

              <button onClick={() => onProductSelect(product)}>
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Dashboard
