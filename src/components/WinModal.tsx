import { memo, useState } from 'react'
import { Modal } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { changeGameStatus } from '../redux/slices/gameConfig'

function WinModal() {
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(true)

  const closeModal = () => {
    setOpened(false)
    dispatch(changeGameStatus('idle'))
  }

  return (
    <>
      <Modal withCloseButton={true} opened={opened} onClose={closeModal}>
        You selected right order!
      </Modal>
    </>
  )
}
export default memo(WinModal)
