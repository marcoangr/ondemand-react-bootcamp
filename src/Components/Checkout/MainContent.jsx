import React from "react";
import OrderSumary from "./OrderSumary";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <div>
      <form action="/" className="customer-information">
        <div className="form-container">
          <h1>Customer information</h1>
          <p>please fill below details to proceed with the order</p>
          <div className="col-input">
            <input
              type="text"
              name="userName"
              id="userName"
              className="user-input"
              required
            />
            <label htmlFor="userName" className="place-holder">
              Enter Full Name
            </label>
          </div>
          <div className="col-input">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="user-input"
              required
            />
            <label htmlFor="userEmail" className="place-holder">
              Enter Email
            </label>
          </div>
          <div className="col-input">
            <input
              type="text"
              name="userZip"
              id="userZip"
              className="user-input"
              required
            />
            <label htmlFor="userZip" className="place-holder">
              Enter Zip
            </label>
          </div>
          <textarea
            name="userNotes"
            placeholder="Order notes"
            id="userNotes"
            className="user-input"
          />

          <hr className="dashed-separator" />

          <OrderSumary />

          <hr className="dashed-separator" />

          <div className="checkout-btn-container">
            <Link to="/">
              <button type="submit" className="btn-submit">
                {"Place order"}
              </button>
            </Link>
            <Link to="/cart">
              <button type="submit" className="btn-cancel">
                {"Go Back"}
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
