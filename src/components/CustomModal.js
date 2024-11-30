import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, imageUrl, carouselImg }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen])

  useEffect(() => {
    const index = carouselImg.findIndex(img => img === imageUrl);
    if(index !== -1) {
      setCurrentImageIndex(index);
    }
  }, [imageUrl, carouselImg])


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImg.length);
  } 

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImg.length) % carouselImg.length)
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className="fixed  flex justify-center items-center "
      overlayClassName="fixed overscroll-contain w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center bg-black bg-opacity-50"
      appElement={document.getElementById('root')}
      shouldCloseOnOverlayClick={true}
    >

      


      <div className='flex justify-center items-center '>
          <div  onClick={prevImage} className="flex px-4 pl-20 py-32  opacity-70 hover:opacity-100 hover:cursor-pointer"> 
            <button  className='flex py-3  text-white'>
                <i className='fa fa-angle-double-left fa-lg'></i>
            </button>
          </div>

          <div className='relative  overflow-hidden'>
            <div className="max-w-6xl  mx-auto rounded-md" >
              <img src={carouselImg[currentImageIndex]} alt="Modal Content" className="w-full  max-w-6xl h-auto rounded-sm" />
            </div>
          </div>

          <div className='flex px-4 pr-20'>

            <div onClick={nextImage} className="flex py-32 opacity-70 hover:opacity-100 hover:cursor-pointer"> 
              <button  className='flex  py-3   text-white'>
                <i className='fa fa-angle-double-right fa-lg'></i>
              </button>
            </div>


      </div>


      </div>

    </Modal>
  );
};

export default CustomModal;
