import { memo } from 'react'
import Image from 'next/image'
import chip from '../../public/assets/chips/chip1.png'

interface IChip {
  value: number
  id: number
  name: string
  onClick: (id: number, value: number, name: string) => void
}

function Chip({ value, id, name, onClick }: IChip) {
  return (
    <div
      className='relative flex items-center justify-center select-none w-24 ml-0.5 md:w-11 md:ml-0'
      onClick={() => onClick(id, value, name)}
    >
      <Image alt='chip1' src={chip} />
      <h1 className='z-10 absolute text-xl text-white font-black'>{name}</h1>
    </div>
  )
}
export default memo(Chip)
