import React from 'react'

function Button(props) {
  return (
      <button className='btn btn-success my-2'>{props.text}</button>
  )
}

export default Button