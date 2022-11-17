import imagen from '../../assets/carrito-de-compras.png'

const CartWidget = () => {
  return (
    <button type="button" class="btn btn-primary position-relative">
  

    <img src={imagen}></img>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      3
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
  )
}

export default CartWidget