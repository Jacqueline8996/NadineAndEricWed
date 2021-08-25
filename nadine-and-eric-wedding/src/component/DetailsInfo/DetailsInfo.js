import React from "react";
// import { Link } from "react-router-dom";
import "./DetailsInfo.css";

function DetailsInfo() {
  return (
    <div>
      <div className="container divCenter">
        <p className="headding"> Details </p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-12 BodyOfText">
              <p>Hunt Valley Country Club</p>
              <p>Phone  Number : Hunt Valley Country Club</p>
              <a className="click" href="https://maps.app.goo.gl/CZpCjLrUywRFDVmw8">Address: 14101 Phoenix Rd, Phoenix, MD 21131</a>
    
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsInfo;