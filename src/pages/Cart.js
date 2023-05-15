import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cart.css";
import Header from "../components/header";
import { OrderContext } from "../orderContext";

function Cart() {
  const navigate = useNavigate();
  const orderDetails = useContext(OrderContext);
  const [quantity, setqty] = useState(orderDetails.orderDetails.qty);

  const decQty = (bookName, price) => {
    if (quantity > 1) {
      setqty(quantity - 1);
      orderDetails.orderDetailsStore(bookName, price, quantity - 1);
    }
  };
  const incQty = (bookName, price) => {
    setqty(quantity + 1);
    orderDetails.orderDetailsStore(bookName, price, quantity + 1);
  };
  const proceedToOrder = () => {
    navigate("/order-history");
  };
  const delCartItem = () => {
    orderDetails.orderDetailsStore("", "", "");
  };
  return (
    <>
      <Header />
      {orderDetails.orderDetails.bookName ? (
        <div>
          <div className="cartProductContainer">
            <div className="cartItems">
              <div className="delCartItem">
                <div className="delCartItemHead"></div>
                <div className="delCartItemIcon">
                  <i className="fa-solid fa-trash" onClick={delCartItem}></i>
                </div>
              </div>
              <div className="cartBookNameConatiner">
                <div className="cartBookNameHead">Book Name</div>
                <div className="cartBookName">
                  {orderDetails.orderDetails.bookName}
                </div>
              </div>
              <div className="cartBookPriceContainer">
                <div className="cartBookPriceHead">Price</div>
                <div className="cartBookPrice">
                  {orderDetails.orderDetails.price}
                </div>
              </div>
              <div className="cartBookQtyContainer">
                <div className="cartBookQtyHead">Quantity</div>
                <div className="cartBookQtyEdit">
                  <div
                    className="qtyDec"
                    onClick={() =>
                      decQty(
                        orderDetails.orderDetails.bookName,
                        orderDetails.orderDetails.price
                      )
                    }
                  >
                    -
                  </div>
                  <div className="qty">{orderDetails.orderDetails.qty}</div>
                  <div
                    className="qtInc"
                    onClick={() =>
                      incQty(
                        orderDetails.orderDetails.bookName,
                        orderDetails.orderDetails.price
                      )
                    }
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="cartBookTotalPriceContainer">
                <div className="cartBookTotalPriceHead">Total</div>
                <div className="cartBookTotalPrice">
                  {orderDetails.orderDetails.qty * 200}
                </div>
              </div>
            </div>
          </div>
          <div className="prcToOrder" onClick={proceedToOrder}>
            Proceed to Order
          </div>
        </div>
      ) : (
        <div className="noCart">No Items in Cart!</div>
      )}
    </>
  );
}

export default Cart;
