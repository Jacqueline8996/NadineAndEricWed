import React from "react";
// import { Link } from "react-router-dom";
import "./RegistryInfo.css";

function RegistryInfo() {
  return (
    <div>
      <div className="container divCenter" >
        <div>
          <p className="headding">Welcome Thank you For Being part of our Special Day</p>
          <div className="col-12" >
            blah
          </div>
          <section>
              <div className="row align-self-center">
                  <div className="col-md-12 ">
                      <p className="sectiontitle">RSVP Info</p>
                  </div>
                  <div className="col-md-12 BodyOfText">
                      <p>
                        Please click on the following Link To RSVP via google:
                      </p>
                      <a className="clickRsvp" href="https://forms.gle/zfWr17GTrhabgiEM7">
                        CLICK HERE TO RSVP
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