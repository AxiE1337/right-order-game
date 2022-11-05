import { memo } from 'react'

interface IChip {
  value: number
  id: number
  name: string
  onClick: (id: number, value: number, name: string) => void
}

function Chip({ value, id, name, onClick }: IChip) {
  return (
    <div
      className='p-5 rounded-full bg-cyan-700 text-white select-none'
      onClick={() => onClick(id, value, name)}
    >
      {name}
    </div>
  )
}
export default memo(Chip)
