import React from 'react'
import "./Button.css"

function Button(props) {
  return (
      <button className={props.className} onClick={props.click}>{props.text}</button>
  )
}

export default Button