import ProductCard from "../common/ProductCard"
const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div>{greeting}</div>
      <div>
        <ProductCard title={"Zapatillas runner"} price={"$"+1500} info={"descripcion del producto"}/>
        <ProductCard title={"Top puma"} price={"$"+10000} info={"descripcion del producto"} />
        <ProductCard title={"Calza pescadora"} price={"$"+2999} info={"descripcion del producto"}/>
      </div>
    </>
  )
}

export default ItemListContainer