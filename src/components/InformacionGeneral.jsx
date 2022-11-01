import React from 'react'

export default function InformacionGneral(props) {
  let{categoria , imagen}  = props // saco la propiedad categoria e imagen del objeto props
  
  return (
    <>
    <h2 className='titulo white flex j-center a-center'>{categoria}</h2>
      <img src={imagen} alt='sujeto1' className='photo' />
    </>
  )
}
