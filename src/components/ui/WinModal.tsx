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
          className='position: fixed bg-black opacity-75 top-0 left-0 bottom-0 right-0 z-0'
          onClick={closeModal}
        ></div>
      )}
      {opened && (
        <div className='position: absolute flex flex-col items-center justify-center rounded-md bg-white w-2/4 h-28 z-10'>
          <h1>You selected right order!</h1>
          <button className='btn mt-3' onClick={closeModal}>
            Ok
          </button>
        </div>
      )}
    </>
  )
}
export default memo(WinModal)
