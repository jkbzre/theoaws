import React, { useState } from 'react';
import CustomModal from './CustomModal'; 
import OptimizedImage from './OptimizedImage';

const ClickableImage = ({ imageUrl, carouselImg, imageStyling }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoad() {
    setImageLoaded(true);
  }

  const openModal = (imageUrl) => {
    setModalIsOpen(true);
    setSelectedImageUrl(imageUrl);

  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
    <OptimizedImage
      src={imageUrl}
      alt=""
      onLoad={handleImageLoad}
      onClick={() => openModal(imageUrl)}
      className={`cursor-pointer ${imageStyling ? imageStyling : ''}`}
      enableVariants={false}
      enableBlurPlaceholder={false}
    />
      {!imageLoaded && <p></p>}
      {imageLoaded && 
        modalIsOpen && (
          <CustomModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImageUrl} carouselImg={carouselImg}/>
        
      )}

    </>
  );
};

export default ClickableImage;
