import Header from "../components/header";
import "../css/Home.css";
import React, { useEffect, useState, useContext } from "react";
import { OrderContext } from "../orderContext";
import { loginContext } from "../loginContext";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Home() {
  const [books, setbooks] = useState([]);
  const orderDetails = useContext(OrderContext);
  const login = useContext(loginContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=biography&key=AIzaSyCp4E4LU7rfcly7cxdLWkEuLWzlxhWOsA8"
      )
      .then((res) => {
        setbooks(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addToCart = (bookName, price, qty) => {
    orderDetails.orderDetailsStore(bookName, price, qty);
    navigate("/cart");
  };
  return (
    <>
      <Header />
      <div className="banner-container">
        <div className="banner-shadow"></div>
        <div className="banner-images">
          {books.map((bookImages, key) => {
            return (
              <img key={key} src={bookImages.volumeInfo.imageLinks.thumbnail} />
            );
          })}
        </div>
        <div className="banner-content">
          <p>
            <span>Start</span> your reading journey with our best collection of
            books! Signup if not an user or login if already an user. Login to
            get best value the books. Thanks for visiting our book store. Please
            continue to your novel journey!
          </p>
          <div className="banner-visit-store-btn">Continue to our store</div>
        </div>
      </div>

      {login.login ? (
        <div className="card-container">
          <div className="cards">
            {books.slice(1).map((book, key) => {
              return (
                <div className="card" key={key}>
                  <div className="card-book-img">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="bookImg"
                    />
                  </div>
                  <div className="card-book-name">
                    Book Name :{" "}
                    <span>{book.volumeInfo.title.slice(0, 21)}</span>
                  </div>
                  <div className="card-book-author">
                    Book Author : <span>{book.volumeInfo.authors}</span>
                  </div>
                  <div className="card-book-short-description">
                    Description :{" "}
                    <span>
                      The Biography: Spiritual Revolutionary, Romantic Explorer,
                      Occult Master and Spy
                    </span>
                  </div>
                  <div className="card-book-price">
                    Price : <span>200/-</span>
                  </div>
                  <div
                    className="add-to-cart-btn"
                    onClick={() => addToCart(book.volumeInfo.title, 200, 1)}
                  >
                    Add to Cart
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="loginReq">Please login to continue!</div>
      )}
    </>
  );
}

export default Home;
