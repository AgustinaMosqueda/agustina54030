import CartWidget from "../common/CartWidget"

const navbar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Favoritos</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default navbar