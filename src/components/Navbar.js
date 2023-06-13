import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  const capitalize = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
            
              <button type="button" class="btn btn-outline-success me-auto"></button>
              <button type="button" class="btn btn-outline-danger " onClick={props.toggleRed} id="flexRedButton">Red Mode</button>
              <div className={`form-switch form-check me-auto text-${props.mode==='dark'?'light':'dark'}`}>  {/*using '1form-' instead of form- in 1st class will create a checkbox instead of radio button*/}
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{capitalize(props.mode)} mode</label>
              </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : 'Set title here',
    aboutText : 'About text here'
};