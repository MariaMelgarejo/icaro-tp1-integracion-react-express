import { useState, useEffect } from 'react'

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const url = 'http://localhost:8080/productos'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductos(data)
      })
  }, [])

  return (
    <>

    </>
  )
}

export default App
