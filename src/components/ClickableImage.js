import React, { useState } from 'react';
import CustomModal from './CustomModal'; 

const ClickableImage = ({ imageUrl, carouselImg, imageStyling }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoad() {
    setImageLoaded(true);
    console.log("loading")
  }

  const openModal = (imageUrl) => {
    setModalIsOpen(true);
    setSelectedImageUrl(imageUrl);

  };

  const closeModal = () => {
    console.log("closing modal")
    setModalIsOpen(false);
  };

  return (
    <>
    <img src={imageUrl} onLoad={handleImageLoad} onClick={() => openModal(imageUrl)} className={`cursor-pointer ${imageStyling ? imageStyling : ''}`} />
      {!imageLoaded && <p></p>}
      {imageLoaded && 
        modalIsOpen && (
          <CustomModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImageUrl} carouselImg={carouselImg}/>
        
      )}

    </>
  );
};

export default ClickableImage;
