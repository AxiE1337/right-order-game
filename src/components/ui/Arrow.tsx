import Image from 'next/image'
import { memo } from 'react'

interface IArrow {
  img: any
  text: string
}

function Arrow({ img, text }: IArrow) {
  return (
    <div className='flex mt-1'>
      <h1 className='text-white ml-4 w-full select-none'>{text}</h1>
      <Image alt='arrow1' src={img} className='ml-2 w-16' />
    </div>
  )
}

export default memo(Arrow)
