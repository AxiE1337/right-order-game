import { Button, Chip, Slider } from '@mantine/core'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import {
  gameValue,
  gameItems,
  changeOrder,
  changeGameStatus,
} from '../redux/slices/gameConfig'

const items = [
  { value: 0, label: '2' },
  { value: 1, label: '3' },
  { value: 2, label: '4' },
  { value: 3, label: '5' },
]

const values = [
  { value: 0, label: 'A' },
  { value: 1, label: '9' },
  { value: 2, label: '19' },
  { value: 3, label: '50' },
  { value: 4, label: '99' },
  { value: 5, label: '999' },
]

function StartScreen() {
  const dispatch = useDispatch()

  const itemsHandler = (item: number) => {
    const itemsQuantity = items.find((i: any) => i.value === item)
    dispatch(gameItems(itemsQuantity?.label))
  }

  const valueHandler = (value: number) => {
    const currentValue = values.find((v: any) => v.value === value)
    dispatch(gameValue(currentValue?.label))
  }

  const gameModeHandler = (value: string) => {
    dispatch(changeOrder(value))
  }

  const startHandler = () => {
    dispatch(changeGameStatus('going'))
  }

  return (
    <>
      <div className='w-4/5'>
        <div className='flex flex-col items-center p-3'>
          <h1>Кол-во предметов</h1>
          <div className='w-full mb-5'>
            <Slider
              label={null}
              defaultValue={0}
              step={1}
              marks={items}
              labelTransition='fade'
              max={3}
              onChangeEnd={itemsHandler}
            />
          </div>
        </div>
        <div className='flex flex-col items-center p-3'>
          <h1>Значения</h1>
          <div className='w-full mb-5'>
            <Slider
              label={null}
              defaultValue={0}
              step={1}
              marks={values}
              labelTransition='fade'
              max={5}
              onChangeEnd={valueHandler}
            />
          </div>
        </div>
      </div>
      <Chip.Group
        position='center'
        defaultValue={'ascending'}
        onChange={gameModeHandler}
      >
        <Chip value='ascending'>По возростанию</Chip>
        <Chip value='descending'>По убыванию</Chip>
      </Chip.Group>
      <Button variant='outline' onClick={startHandler}>
        Играть
      </Button>
    </>
  )
}
export default memo(StartScreen)
