import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const calculateTotalPrice = () => {
        let totalPrice = 0
        cartList.forEach(product => {
          totalPrice += product.price * product.quantity
        })
        return totalPrice
      }

      return (
        <div className="bgCartSummary">
          <div className="cartSummaryCard">
            <h1 className="summaryHead">
              Order Total:{' '}
              <span className="summarySpan">Rs {calculateTotalPrice()}/-</span>
            </h1>
            <p className="summaryPara">{cartList.length} Items in cart</p>
            <button type="button" className="checkoutBtn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
