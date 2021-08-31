import React from "react";
// import { Link } from "react-router-dom";
import "./RegistryInfo.css";
import Venmo from "../../assets/Images/nadineVenmo.png";
import Barrel from "../../assets/Images/nadAndEricBarrel.jpg"
import HoneyFund from "../../assets/Images/honeyFund.png"
import PayPal from "../../assets/Images/PayPal.png"
function RegistryInfo() {
  return (
    <div>
      <div className="container divCenterR">
        <p className="headding">Gift Registry: </p>
      </div>
      <div className="container divCenterR" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <a className="click" href="https://www.crateandbarrel.com/gift-registry/nadine-peake-and-eric-holmes/r6362590?fbclid=IwAR1jmmpvDRass-rq3lbaWjCnCbWaID3KsgERg3nvCK3FzsieZlzsTQ0m6Ts">
                Crate and Barrel
                </a>
                <a className="click" href="https://www.crateandbarrel.com/gift-registry/nadine-peake-and-eric-holmes/r6362590?fbclid=IwAR1jmmpvDRass-rq3lbaWjCnCbWaID3KsgERg3nvCK3FzsieZlzsTQ0m6Ts">
                  <img src = {Barrel} alt = "carteandBarrel" className ="carteandBarrel imgR"></img>
                </a>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://www.honeyfund.com/wedding/peake-holmes-11-07-2021?fbclid=IwAR1vHku0J1ahaguWxa145zFQEv2vVJMxCh_nSE0KnBe7WI86YYwKYRIwpn8">
                HoneyFund
              </a>
              <a className="click" href="https://www.honeyfund.com/wedding/peake-holmes-11-07-2021?fbclid=IwAR1vHku0J1ahaguWxa145zFQEv2vVJMxCh_nSE0KnBe7WI86YYwKYRIwpn8">
                  <img src = {HoneyFund} alt = "honeyFund" className ="honeyFund imgR"></img>
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container divCenterR">
        <p className="headding"> For Electronic Gifts: </p>
        <p className="smallHeading"> Buy us drinks for our honeymoon, breakfast for our first morning as Husband and Wife and more below</p>
      </div>
      <div className="container divCenterR" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <a className="click" href="@Nadine-Peake">
                Venmo: @Nadine-Peake
                </a>
                <img src = {Venmo} alt = "venmoCode" className ="venmoCode imgR"></img>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://www.paypal.com/paypalme/nadineholmestobe?locale.x=en_US&fbclid=IwAR0SD7jSrWqtOu9w2Ex9v904n0NqjuQAyan0Jo1Pli0DK6aVrLfxRVFW4HI">
                Paypal: Nadine-PayPal 
              </a>
              <a className="click" href="https://www.paypal.com/paypalme/nadineholmestobe?locale.x=en_US&fbclid=IwAR0SD7jSrWqtOu9w2Ex9v904n0NqjuQAyan0Jo1Pli0DK6aVrLfxRVFW4HI">
                  <img src = {PayPal} alt = "paypal" className ="paypal imgR"></img>
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