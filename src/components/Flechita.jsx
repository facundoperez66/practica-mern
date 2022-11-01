import React from 'react'

export default function flechita(props) {
    let {verbo} = props
    let {estilo} = props
    let {onClick} = props
  return (
    <div className={`gray flecha ${estilo} flex j-center a-center`} onClick={onClick}> {verbo} </div>
  )
}
