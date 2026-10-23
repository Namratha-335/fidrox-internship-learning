
import { lazy, Suspense, useState } from 'react'
import Dashboard from './pages/Dashboard'

const ProductDetails = lazy(
  () => import('./pages/ProductDetails')
)

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [showDetails, setShowDetails] = useState(false)

  function handleProductSelect(product) {
    setSelectedProduct(product)
    setShowDetails(true)
  }

  return (
    <div>
      <nav>
        <button
          onClick={() => setShowDetails(false)}
        >
          Dashboard
        </button>
      </nav>

      {showDetails ? (
        <Suspense fallback={<p>Loading product details...</p>}>
          <ProductDetails product={selectedProduct} />
        </Suspense>
      ) : (
        <Dashboard onProductSelect={handleProductSelect} />
      )}
    </div>
  )
}

export default App
