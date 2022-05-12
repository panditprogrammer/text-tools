import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.webName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.contact}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">{props.help}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">{props.privacy}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// specifying the props recieving value types 
Navbar.prototypes = {
    webName: PropTypes.string,
    about: PropTypes.string,
    contact: PropTypes.string,
    privacy: PropTypes.string,
};

// default props value 
Navbar.defaultProps = {
    webName: "TextTools",
}


export default Navbar