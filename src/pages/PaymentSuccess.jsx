import PropTypes from "prop-types";
import "../styles/paymentsuccess.css";

const PaymentSuccess = ({ frontendUrl = "/dashboard" }) => {
    const reference = localStorage.getItem("payment_reference");

if (reference) {
    const apiUrl = `https://learnx-official-api.onrender.com/api/v1/payment/verify/${reference}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Payment Verification Data:", data);
            // Handle the response (update UI, show success message, etc.)
        })
        .catch(error => {
            console.error("Error fetching payment verification:", error);
        });
} else {
    console.error("No payment reference found in local storage.");
}
  return (
    <div className="payment-container">
      <h2>Payment was successful! 🎉</h2>
      <p>Click the button below to return to the dashboard.</p>
      <a href={frontendUrl} rel="noreferrer noopener">
        <button className="backbtns">
          Click here to return to the Homepage
        </button>
      </a>
    </div>
  );
};

// Add PropTypes validation
PaymentSuccess.propTypes = {
  frontendUrl: PropTypes.string, // Ensures frontendUrl is a string
};

export default PaymentSuccess;