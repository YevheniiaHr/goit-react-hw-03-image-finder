import Modal from 'react-modal';
import { ModalContent, Overlay } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
export const ModalWindow = ({ isOpen, onClose, largeImageURL }) => {
  return (
    <Overlay>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Image"
      >
        <ModalContent largeImageURL={largeImageURL}></ModalContent>
      </Modal>
    </Overlay>
  );
};
