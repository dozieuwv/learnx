import PropTypes from "prop-types";
import "../styles/paymentsuccess.css";

const PaymentSuccess = ({ frontendUrl = "/dashboard" }) => {
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