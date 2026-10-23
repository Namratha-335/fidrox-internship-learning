import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(url) 

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const result = await response.json()
        setData(result.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [url])

  return { data, loading, error }
}

export default useFetch