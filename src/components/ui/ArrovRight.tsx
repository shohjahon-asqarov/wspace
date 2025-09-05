import React from 'react'
import Arrov_right from '../../../public/icons/Icon.svg'
import Image from 'next/image'

const ArrovRight = () => {
  return (
   <Image src={Arrov_right} width={16} height={16} alt='arrow right icon' priority className='inline-block'/>
  )
}

export default ArrovRight