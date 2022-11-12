import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { isAscending, isDescending } from '../helpers/checkOrder'
import Chip from './Chip'
import WinModal from './ui/WinModal'
import { chipsGenerator } from '../helpers/chipsGenerator'
import Image from 'next/image'
import boardImg from '../../public/assets/boards/board1.png'
import arrow1 from '../../public/assets/arrow1.png'
import arrow2 from '../../public/assets/arrow2.png'
import Arrow from './ui/Arrow'
import styles from '../styles/board.module.css'

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
    if (!board.some((i) => i.id === id)) {
      setChips((prev) => prev.filter((i) => i.id !== id))
      setBoard((prev) => [...prev, chip])
    } else {
      setBoard((prev) => prev.filter((i) => i.id !== id))
      setChips((prev) => [...prev, chip])
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
    <div className='flex flex-col h-screen w-full items-center justify-center bg-purpleDark'>
      <div className='flex items-center justify-evenly w-4/5 mb-10'>
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            value={chip.value}
            name={chip.name}
            id={chip.id}
            onClick={addChipToBoard}
          />
        ))}
      </div>
      <div className='relative flex items-center'>
        <div className='flex w-full absolute pl-6 mb-48 md:mb-28'>
          {gameConfig.gameOrder === 'ascending' ? (
            <Arrow img={arrow2} text={'Ascending order'} />
          ) : (
            <Arrow img={arrow1} text={'Descending order'} />
          )}
        </div>
        <Image alt='board1' src={boardImg} className={styles.boardImg} />
        <div className={styles.board}>
          {board.map((chip) => (
            <Chip
              key={chip.id}
              value={chip.value}
              name={chip.name}
              id={chip.id}
              onClick={addChipToBoard}
            />
          ))}
        </div>
      </div>
      {isWin && <WinModal />}
    </div>
  )
}
export default memo(GameScreen)
