import './Card.css'

export const Card = ({ nombre, precio, imagen, descripcion }) => {
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <img src={imagen} alt="" />
            <h4>$ {precio}</h4>

            <p>{descripcion.slice(0, 40)}...</p>
            <button className='button'>Aceptar</button>
        </div>
    )
}
