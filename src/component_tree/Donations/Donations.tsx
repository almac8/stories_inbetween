import { useState } from "react";
import "./Donations.css";

const Donations = () => {
  let [ current_method, set_current_method ] = useState(0);

  return (
    <div id="Donations">
      <h1>Donations</h1>

      <div className="donations_box">
        <div className="buttons">
          <button onClick={ () => set_current_method(0) }>Bank Transfer</button>
          <button onClick={ () => set_current_method(1) }>PayPal</button>
          <button onClick={ () => set_current_method(2) }>Crypto</button>
        </div>

        <div className={ current_method == 0 ? "open" : "closed" }>
          <h2>Bank Transfer</h2>
          <p>Account Owner: Sasha Holm</p>
          <p>Branch: Capitec</p>
          <p>Account Number: 1891449565</p>
          <p>Swift Code: CABLZAJJ</p>
        </div>

        <div className={ current_method == 1 ? "open" : "closed" }>
          <h2>PayPal</h2>
          <a href="https://www.paypal.me/storiesinbetween">PayPal - storiesinbetween</a>
        </div>

        <div className={ current_method == 2 ? "open" : "closed" }>
          <h2>Crypto</h2>
          <p>Ethereum - 0x5f79D4E50A4aec2e8F1e697aEa39409073563308</p>
          <p>Bitcoin - 3LYeZ4BeKcCb4T97qLcrGctCftCgPcH9si</p>
        </div>
      </div>
    </div>
  )
};

export default Donations;