import React from "react";
// import { Link } from "react-router-dom";
import "./RegistryInfo.css";
import Venmo from "../../assets/Images/nadineVenmo.png";

function RegistryInfo() {
  return (
    <div>
      <div className="container divCenter">
        <p className="headding">Gift Registry: </p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <a className="click" href="https://forms.gle/zfWr17GTrhabgiEM7">
                CLICK HERE FOR AMAZON REGISTRY
                </a>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://forms.gle/zfWr17GTrhabgiEM7">
                CLICK HERE FOR MY TARGET REGISTRY
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container divCenter">
        <p className="headding"> For Electronic Gifts: </p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <a className="click" href="https://forms.gle/zfWr17GTrhabgiEM7">
                Venmo: @Nadine-Peake
                </a>
                <img src = {Venmo} alt = "venmoCode" className ="venmoCode"></img>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://forms.gle/zfWr17GTrhabgiEM7">
                Paypal: Nadine-PayPal 
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RegistryInfo;