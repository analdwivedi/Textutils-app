import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark' || props.mode_2 === 'red' ? 'dark' : 'red'} bg-${props.mode === 'light' ? 'light' : 'dark' || props.mode_2 === 'red' ? 'red' : 'dark'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/about'>{props.about}</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={props.toggleMode} style={{ height: '25px', width: '30px', cursor: 'pointer' }}></div>
                </div>
                <div className="d-flex">
                    <div className="bg-danger rounded mx-2" onClick={props.toggle_Mode} style={{ height: '25px', width: '30px', cursor: 'pointer' }}></div>
                </div>
                {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
                </div> */}
                {/* <div className={`form-check form-switch text-${props.mode_2 === 'red' ? 'light' : 'dark'} mx-3`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle_Mode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode_2 === 'red' ? 'light' : 'red'} Mode</label>
                </div> */}
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "enter title here",
    about: "enter about here"
}


