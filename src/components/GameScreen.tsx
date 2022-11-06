import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { isAscending, isDescending } from '../helpers/checkOrder'
import Chip from './Chip'
import WinModal from './ui/WinModal'
import { chipsGenerator } from '../helpers/chipsGenerator'

interface IChip {
  id: number
  value: number
  name: string
}

function GameScreen() {
  const gameConfig = useSelector((state: RootState) => state.gameConfig.config)
  const [chips, setChips] = useState<IChip[]>([])
  const [board, setBoard] = useState<IChip[]>([])
  const [isWin, setIsWin] = useState<boolean>(false)

  const addChipToBoard = (id: number, value: number, name: string) => {
    const chip = { id: id, value: value, name: name }
    if (!board.some((i: any) => i.id === id)) {
      setChips((prev: any) => prev.filter((i: any) => i.id !== id))
      setBoard((prev: any) => [...prev, chip])
    } else {
      setBoard((prev: any) => prev.filter((i: any) => i.id !== id))
      setChips((prev: any) => [...prev, chip])
    }
  }

  const checkHandler = () => {
    if (gameConfig.gameOrder === 'ascending') {
      const isWin = isAscending(board)
      if (isWin) {
        setIsWin(true)
      }
    } else if (gameConfig.gameOrder === 'descending') {
      const isWin = isDescending(board)
      if (isWin) {
        setIsWin(true)
      }
    }
  }

  useEffect(() => {
    if (board.length === +gameConfig.items) {
      checkHandler()
    }
  }, [board])

  useEffect(() => {
    const generatedShips = chipsGenerator(
      gameConfig.value,
      gameConfig.items,
      gameConfig.minValue
    )
    setChips(generatedShips)
  }, [gameConfig.items])

  return (
    <div className='flex flex-col h-screen w-full items-center justify-center'>
      <div className='flex items-center justify-evenly w-full mb-10'>
        {chips.map((chip: any) => (
          <Chip
            key={chip.id}
            value={chip.value}
            name={chip.name}
            id={chip.id}
            onClick={addChipToBoard}
          />
        ))}
      </div>
      <div>
        {gameConfig.gameOrder === 'ascending'
          ? 'По возростанию →'
          : '← По убыванию'}
      </div>
      <div className='flex justify-around w-3/5 h-1/4 bg-slate-600'>
        {board.map((chip: any) => (
          <Chip
            key={chip.id}
            value={chip.value}
            name={chip.name}
            id={chip.id}
            onClick={addChipToBoard}
          />
        ))}
      </div>
      {isWin && <WinModal />}
    </div>
  )
}
export default memo(GameScreen)
