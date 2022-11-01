import React from 'react'

export default function RestoDatos(props) {
    let {datos} = props //saco la propiedad datos del objeto props
  return (
    <div className='datos white flex a-center'>
        <p>{datos}</p>
      </div>
  )
}
