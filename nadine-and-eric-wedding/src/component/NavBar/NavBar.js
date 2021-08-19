import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
        <Link to ="/" className="navbar-brand">Nadine and Eric Wedding</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse active" id="navbar1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <Link to = "/RSVP" className="nav-link atag">RSVP</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Schedule" className="nav-link atag">Schedule</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Details" className="nav-link atag">Details</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Registry" className="nav-link atag">Registry</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;