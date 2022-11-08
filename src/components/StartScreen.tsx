import Image from 'next/image'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import {
  gameValue,
  gameItems,
  changeOrder,
  changeGameStatus,
} from '../redux/slices/gameConfig'
import Slider from './ui/Slider'
import bgImage from '../../public/assets/48820.png'

const valuesLabel = ['A', '9', '19', '50', '99', '999']
const itemsLabel = ['2', '3', '4', '5', '6']

function StartScreen() {
  const dispatch = useDispatch()

  const itemsHandler = (item: number) => {
    dispatch(gameItems(item))
  }

  const valueHandler = (value: number) => {
    dispatch(gameValue(valuesLabel[value - 1]))
  }

  const gameModeHandler = (value: string) => {
    dispatch(changeOrder(value))
  }

  const startHandler = () => {
    dispatch(changeGameStatus('going'))
  }

  return (
    <div className='flex flex-col items-center justify-center fixed h-screen w-full'>
      <Image
        alt='bgImage'
        fill={true}
        src={bgImage}
        quality='100'
        className='-z-10'
      />
      <div className='flex flex-col items-center justify-center w-4/5 bg-white rounded-md border-solid border-4 border-purple'>
        <div className='w-4/5	'>
          <div className='p-3'>
            <h1 className=''>Number of items</h1>
            <Slider
              defaultValue={2}
              maxValue={6}
              minValue={2}
              step={1}
              label={itemsLabel}
              onChange={itemsHandler}
            />
          </div>
          <div className='p-3'>
            <h1>Values</h1>
            <Slider
              defaultValue={1}
              maxValue={6}
              minValue={1}
              step={1}
              label={valuesLabel}
              onChange={valueHandler}
            />
          </div>
        </div>
        <div className='flex flex-row form-control'>
          <label className='label cursor-pointer md:scale-75'>
            <span className='label-text mr-2'>By ascending order</span>
            <input
              onChange={(e: any) => gameModeHandler(e.target.value)}
              type='radio'
              name='radio-1'
              className='radio'
              defaultChecked
              value={'ascending'}
            />
          </label>
          <label className='label cursor-pointer md:scale-75'>
            <span className='label-text mr-4'>By descending order</span>
            <input
              onChange={(e: any) => gameModeHandler(e.target.value)}
              type='radio'
              name='radio-1'
              className='radio'
              value={'descending'}
            />
          </label>
        </div>

        <button className='btn bg-green m-2' onClick={startHandler}>
          Play
        </button>
      </div>
    </div>
  )
}
export default memo(StartScreen)
