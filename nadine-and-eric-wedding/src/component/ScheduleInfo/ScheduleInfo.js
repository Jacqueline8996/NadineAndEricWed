import React from "react";
// import { Link } from "react-router-dom";
import "./ScheduleInfo.css";
import NadinePic from "../../assets/Images/Cover-Page.png"

function DetailsPInfo() {
  return (
    <div>
      <div className="container divCenter">
        <p className="headding">November 7th 2021 Schedule: </p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <p className="sectiontitle">Church stuff:</p>
                  <ul className = "listItem">
                    <li>
                      church lecture 3 pm
                    </li>
                    <li>
                      rope thing 4 pm 
                    </li>
                    <li>
                      gets married 5pm
                    </li>
                  </ul>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
                <p className="sectiontitle">Party stuff:</p>
                  <ul className = "listItem">
                    <li>
                      drinking 7 pm
                    </li>
                    <li>
                      laughing  6 pm 
                    </li>
                    <li>
                      dancing 7pm
                    </li>
                  </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsPInfo;