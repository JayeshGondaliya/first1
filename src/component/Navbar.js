import React from 'react'
import Contact from './Contact'

export default function Navbar(props) {
  return (
    <>
  
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Text</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>
          <div className="form-check form-switch" >
            <input onClick={props.ModeClick} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
