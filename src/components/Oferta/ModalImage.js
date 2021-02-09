import React from 'react';
import Modal from 'react-modal';
import Img from 'gatsby-image';

Modal.setAppElement(`#___gatsby`);
const ModalImage = ({ isOpen, closeModal, currentImage, imageData }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={{
      overlay: {
        zIndex: '100',
        position: `fixed`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, 0.6)`,
      },
      content: {
        backgroundColor: `rgba(0, 0, 0, 1)`,
        minWidth: '80vh',
        maxHeight: '80vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        WebkitOverflowScrolling: `touch`,
      },
    }}
    contentLabel="Modal"
  >
    <div>
      <Img fluid={imageData[currentImage].childImageSharp.fluid} />
    </div>
  </Modal>
);

export default ModalImage;
