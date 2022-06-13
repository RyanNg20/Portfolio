import { ModalBackground, ModalWrapper } from "./Style"

interface ModalProps {
  showModal: boolean,
  setShowModal: Function,
}

const Modal = (props: ModalProps) => {
  return (
    <ModalBackground show={props.showModal} onClick={() => props.setShowModal(false)}>
      <ModalWrapper>
        Thanks for exploring my Portfolio!
      </ModalWrapper>
    </ModalBackground>
  )
}

export default Modal