import {useState} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const [cod, setCod] = useState('')
  const [confirm, setConfirm] = useState(false)

  const onChangeCod = event => {
    setCod(event.target.value)
  }

  const onClickConfirm = () => {
    setConfirm(true)
  }

  return (
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
                <span className="summarySpan">
                  Rs {calculateTotalPrice()}/-
                </span>
              </h1>
              <p className="summaryPara">{cartList.length} Items in cart</p>
              <Popup
                className="CheckOutCont"
                modal
                trigger={
                  <button type="button" className="checkoutBtn">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <div className="CheckOutCont">
                    <button type="button" className="CloseBtn">
                      <img
                        onClick={close}
                        className="CloseImg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQjUG-pHKQVG5LaHDwwrOUQVREdHV-DsFkwodQfjVv2Am9AMI8a2iq-k&s=10"
                        alt="close"
                      />
                    </button>
                    <h1 className="CheckOutHead">Checkout Section</h1>
                    {confirm ? (
                      <div className="OrderPlacedCont">
                        <div className="OrderPlacedMsg">
                          {/* We can add any additional success message or icons here */}
                        </div>
                        <h1 className="CheckOutHead">
                          Your order has been placed successfully
                        </h1>
                      </div>
                    ) : (
                      <div className="OrderPayCont">
                        <div className="PayCont">
                          <div className="InputCont">
                            <input
                              disabled
                              className="InputDot"
                              id="CreditCard"
                              type="radio"
                              name="payment"
                            />
                            <label className="InputLabel" htmlFor="CreditCard">
                              Credit Card
                            </label>
                          </div>
                          <div className="InputCont">
                            <input
                              disabled
                              className="InputDot"
                              id="NetBanking"
                              type="radio"
                              name="payment"
                            />
                            <label className="InputLabel" htmlFor="NetBanking">
                              Net Banking
                            </label>
                          </div>
                          <div className="InputCont">
                            <input
                              disabled
                              className="InputDot"
                              id="Upi"
                              type="radio"
                              name="payment"
                            />
                            <label className="InputLabel" htmlFor="Upi">
                              <i>UPI</i>
                            </label>
                          </div>
                          <div className="InputCont">
                            <input
                              disabled
                              className="InputDot"
                              id="Wallet"
                              type="radio"
                              name="payment"
                            />
                            <label className="InputLabel" htmlFor="Wallet">
                              Wallet
                            </label>
                          </div>
                          <div className="InputCont">
                            <input
                              onChange={onChangeCod}
                              className="InputDot"
                              id="Cash"
                              type="radio"
                              name="payment"
                              value="CashOnDelivery"
                            />
                            <label className="InputLabel" htmlFor="Cash">
                              Cash On Delivery
                            </label>
                          </div>
                        </div>
                        <div className="cartSummaryCard">
                          <h1 className="summaryHead">
                            Order Total:
                            <span className="summarySpan">
                              Rs {calculateTotalPrice()}/-
                            </span>
                          </h1>
                          <p className="summaryPara">
                            <span className="summarySpan">
                              {cartList.length}
                            </span>{' '}
                            Items in cart
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="BtnsCont">
                      <button
                        onClick={close}
                        type="button"
                        className="CancelBtn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={onClickConfirm}
                        className="ConfirmBtn"
                        disabled={!cod}
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
