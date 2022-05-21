import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Navbar(props) {

    const [off, setOff] = useState(true)

    const colorOffHandler = () => {
        if (props.mode)
            setOff(false);
        else
            setOff(true)
    }

    const changeColorHanglerBG = ((e) => {
        document.documentElement.style.setProperty("--bg_light", e.target.value);
    })
    const changeColorHanglerFG = ((e) => {
        document.documentElement.style.setProperty("--text_dark", e.target.value)
    })

    return (

        <nav className="navbar navbar-expand-lg navbar-coral text-light">
            <div className="container">
                <a className="navbar-brand text-white" href="/">{props.webName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item form-check form-switch'>
                            <span className="nav-link text-white" onClick={props.toggleDarkMode}>
                                <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onChange={colorOffHandler} />
                            </span>
                        </li>

                        <li className='nav-item '>
                            <input type="color" value="#ffffff" title='Background Color' disabled={off} className='m-1' name="colorTheme" id="colorTheme" onChange={changeColorHanglerBG} />
                        </li>

                        <li className='nav-item '>
                            <input type="color" value="#000000" title='Foreground color' disabled={off} className='m-1' name="colorTheme" id="colorThemeFG" onChange={changeColorHanglerFG} />
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