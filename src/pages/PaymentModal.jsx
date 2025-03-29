// import React from "react";
import "../styles/PaymentModal.css"
// import { FaTimes } from "react-icons/fa";

const PaymentModal = () => {
  return (
    <div className="modal-overlay">
      <div className="payment-modal">
        <div className="modal-header">
          <h2>LearnX Payment Plan</h2>
          {/* <FaTimes className="close-icon" onClick={onClose} /> */}
        </div>
        <p>Kindly make tuition payment here.</p>
        
        <form className="payment-form">
          <label>Email</label>
          <input type="email" placeholder="Enter Email Address" required />

          <label>Payment Amount</label>
          <input type="number" placeholder="Enter Amount" required />

          <label>What is your desired Learning course?</label>
          <select required>
            <option value="">Select a Track Option</option>
            <option value="frontend">Front-End Development</option>
            <option value="backend">Back-End Development</option>
            <option value="design">Product Design</option>
            <option value="design">UI/UX Design</option>
            <option value="machine">Ai AND Machine learning</option>
          </select>

          <button type="submit" className="pay-button">Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;