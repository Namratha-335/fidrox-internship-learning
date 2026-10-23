
import { useEffect, useRef } from 'react'

function SearchBar({ searchTerm, onSearchChange }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      type="text"
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      aria-label="Search products"
    />
  )
}

export default SearchBar
