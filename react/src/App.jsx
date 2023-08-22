import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import './App.css'

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
      <h1>Productos</h1>
      <div className='products-layout'>
        {productos.map(producto => (
          <Card key={producto.id} nombre={producto.title} precio={producto.price} imagen={producto.image} descripcion={producto.description} />
        ))}
      </div>
    </>
  )
}

export default App
