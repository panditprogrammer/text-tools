import React from 'react'
import "./Alert.css"

function Alert(props) {
    return (
        <div className={props.className} role="alert" id='alert'>
            <strong>{props.message}</strong>
        </div>
    )
}

export default Alert