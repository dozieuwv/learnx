// import React from "react";

const PaymentSuccess = () => {
  return (
    <div>
      <h2>Payment was successful! 🎉</h2>
      <p>Click the button below to return to the dashboard.</p>
      <p>
        <a
          href="${FRONTEND_URL}"
          style="display: inline-block; padding: 10px 15px; background-color: #4CAF50; 
                  color: white; text-decoration: none; border-radius: 5px; font-weight: bold;"
        >
          Click here to return to the Homepage
        </a>
      </p>
    </div>
  );
};

export default PaymentSuccess;
