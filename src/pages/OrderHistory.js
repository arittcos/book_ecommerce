import React, { useContext } from "react";
import { OrderContext } from "../orderContext";
import "../css/orderHistory.css";
import Header from "../components/header";

function OrderHistory() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const orderHistory = useContext(OrderContext);
  return (
    <>
      <Header />
      {orderHistory.orderDetails.bookName ? (
        <div className="orderHistoryContainer">
          <table>
            <thead>
              <th>Order ID</th>
              <th>Book Name</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>{orderHistory.orderDetails.bookName}</td>
                <td>{date}</td>
                <td>{orderHistory.orderDetails.qty}</td>
                <td>{orderHistory.orderDetails.qty * 200}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="noRecentOrders">No Recent Orders!</div>
      )}
    </>
  );
}

export default OrderHistory;
