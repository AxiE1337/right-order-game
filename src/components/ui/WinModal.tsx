import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeGameStatus } from '../../redux/slices/gameConfig'

function WinModal() {
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(true)

  const closeModal = () => {
    setOpened(false)
    dispatch(changeGameStatus('idle'))
  }

  return (
    <>
      {opened && (
        <div
          className='fixed bg-black opacity-75 top-0 left-0 bottom-0 right-0 z-0'
          onClick={closeModal}
        ></div>
      )}
      {opened && (
        <div className='position: absolute flex flex-col items-center justify-center rounded-md bg-purple w-2/4 h-28 z-10 md:w-4/5'>
          <h1 className='text-white'>Congratulations you won!</h1>
          <button className='btn mt-3' onClick={closeModal}>
            Ok
          </button>
        </div>
      )}
    </>
  )
}
export default memo(WinModal)
