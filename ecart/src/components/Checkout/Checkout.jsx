import React, { useState, useEffect } from "react";
import "./Checkout.css";
import Cleave from "cleave.js/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "animate.css";
import { useSnackbar } from "notistack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png",
];

const Payments = ({ cartItems,handleAddProduct , handleRemoveProduct}) => {
  const [creditCardNum, setCreditCardNum] = useState("**** **** **** ****");
  const [cardType, setCardType] = useState("");
  const [cardHolder, setCardHolder] = useState("Your Full Name");
  const [expireMonth, setExpireMonth] = useState("MM");
  const [expireYear, setExpireYear] = useState("YYYY");
  const [cardTypeUrl, setCardTypeUrl] = useState("VISA");

let navigate = useNavigate();
window.onload = function() {
 navigate("/");
}

  const { enqueueSnackbar } = useSnackbar();
  const handleClick = (e) => {
    e.preventDefault();
   if(creditCardNum === "**** **** **** ****" || cardType === "" || cardHolder === "Your Full Name" || expireMonth === "MM" || expireYear === "YYYY"){
      enqueueSnackbar("Please Fill all details", { variant: "error" });
    }
    else{
      enqueueSnackbar("Payment Successful", { variant: "success" });
    }
  
    navigate("/");
  };
 

  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
    // console.log(e.target.value);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if (type === "visa") {
      setCardTypeUrl(imageUrls[0]);
      console.log("Visa");
    } else if (type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      console.log("Mastercard");
    } else if (type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      console.log("Discover");
    } else if (type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      console.log("Amex");
    } else if (type === "diners") {
      console.log("Diners");
      setCardTypeUrl(imageUrls[4]);
    } else if (type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(imageUrls[5]);
    }
  };

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };
  return (
    <>
    <div className="main">
      <div className="cart-nav">
        <ArrowBackIcon
          style={{
            fontSize: "30px",
            marginTop: "10px",
          }}
         onClick={()=>navigate("/")}
        />
        <h1>Check out</h1>
      </div>
      <div className="cart-items">
       <div className="cart-items-header">
{
  cartItems.length === 0 && ( <div className="cart-items-empty">
    <h3>Your cart is empty</h3>
  </div>
  )}
  <div>
    {
      cartItems.map((item, index) => {
        return (
          <div className="cart-items-list" key={index}>
           <div className="content">
           <p>{item.title.split(" ")[0]}</p>
            <small>{item.category}</small>
            <p>${item.price} <small>In Stock</small></p>
            <small>Qty: {item.quantity}</small>
            <br></br>
            <small>Total: ${item.price * item.quantity}</small>
            <br></br>
           </div>
            <div className="content">
            <img src={item.image} alt={item.title} className="cart-items-image" />
            </div>
            <div>
            <button className="cart-items-add" 
            onClick={() => handleAddProduct(item)}>Add</button>
            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>Remove</button>
            </div>
          </div>

        )
      })
    }
     
  </div>


       </div>
      </div>

      <div className="payment-card">
        <h3>Payment</h3>
        <button>
          <AddIcon />
          Add New Card
        </button>
      </div>
      <div className="container1">
        <form id="form">
        <Carousel showThumbs={false} axis ="horizontal">
          <div id="card">
            <h2 className="logo" alt="Card logo">
              {cardTypeUrl}
            </h2>
            <div className="header">
              <div className="sticker"></div>
              <div></div>
            </div>
            <div className="body">
              <h3 id="creditCardNumber">{creditCardNum}</h3>
            </div>
            <div className="footer">
              <div>
                <h5>Card Holder</h5>
                <h3>{cardHolder}</h3>
              </div>
              <div>
                <h5>Expires</h5>
                <h3>
                  {expireMonth} / {expireYear}
                </h3>
              </div>
            </div>
          </div>
        
         
          </Carousel>

          <div className="input-container mt">
            <h4>Enter card number</h4>
            <Cleave
              delimiter="-"
              options={{
                creditCard: true,
                onCreditCardTypeChanged: handleType,
              }}
              onChange={handleNum}
              placeholder="Please enter your credit card number"
            />
          </div>

          <div className="input-container">
            <h4>Card Holder</h4>
            <input
              onChange={handleCardHolder}
              type="text"
              placeholder="Please enter your full name"
              required
            />
          </div>

          <div className="input-grp">
            <div className="input-container">
              <h4>Month</h4>
              <select value={expireYear} onChange={handleExpYear}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="input-container">
              <h4>Expires in</h4>
              <select value={expireMonth} onChange={handleExpMonth}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
            <div className="input-container">
              <h4>CVV</h4>
              <input type="password" placeholder="CVV" required />
            </div>
          </div>
          <div className="totalPrice">
            <div className="total">
            <h4>
             Order
            </h4>
            <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="delivery">
          <h4>
            Delivery
          </h4>
          <small>
            ${7.68}
          </small>
            </div>
            <div className="summary">
            <h4>
              Summary
            </h4>
            <p>
              {
                totalPrice === 0 ? (
                  <p>${0.00}</p>
                ) : (
                  <p>${(totalPrice + 7.68).toFixed(2)}</p>
                )
              }
            </p>
            </div>
            </div>
        
          <button className="checkout-button" onClick={handleClick}>
            Buy Now
          </button>
       
        </form>
      </div>
      </div>
    </>
  );
};

export default Payments;
