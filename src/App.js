import Home from "./pages/Home";
import { useState } from "react";
import LoginOrSignup from "./pages/LoginOrSignup";
import OrderHistory from "./pages/OrderHistory";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderContext } from "./orderContext";
import { loginContext } from "./loginContext";

function App() {
  const [login, setlogin] = useState(false);
  const [orderDetails, setorderDetails] = useState({
    bookName: "",
    price: "",
    qty: "",
  });

  const orderDetailsStore = (bookName, price, qty) => {
    setorderDetails({
      bookName: bookName,
      price: price,
      qty: qty,
    });
  };

  const loginChange = (login) => {
    setlogin(login);
  };
  return (
    <loginContext.Provider value={{ login, loginChange }}>
      <OrderContext.Provider value={{ orderDetails, orderDetailsStore }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-or-signup" element={<LoginOrSignup />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </OrderContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
