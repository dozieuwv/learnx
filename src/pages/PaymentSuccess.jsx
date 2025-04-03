// import React from "react";
import "../styles/paymentsuccess.css"

const PaymentSuccess = () => {
  return (
    <div className="payment-container">
      <h2>Payment was successful! 🎉</h2>
      <p>Click the button below to return to the dashboard.</p>
        <a href="#">
      <button className="backbtns">
          Click here to return to the Homepage
      </button>
        </a>
    </div>
  );
};

export default PaymentSuccess;
