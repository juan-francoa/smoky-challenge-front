import React from 'react'

export default function InputGral(props) {
    let { type , placeholder ,refId} = props
  return (
    <input type={type} placeholder={placeholder} ref={refId} />
  )
}