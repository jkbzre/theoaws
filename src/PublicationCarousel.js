import React, { useRef, useState } from 'react';
import OptimizedImage from './components/OptimizedImage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BuyButtonComponent from './components/BuyButtonComponent';

const PublicationsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null)


  const CustomPrevArrow = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="slick-prev focus:outline-none text-black hover:text-gray-700"
    >
      {/* Your custom prev arrow icon or design */}
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="slick-next focus:outline-none text-black hover:text-gray-700"
    >
      {/* Your custom next arrow icon or design */}
    </button>
  );

  const slideStyles = {

    0: {
    },
    1: {
    },
    2: {
    }
    ,
    3: {
    }
    ,
    4: {
    }
    ,
    5: {
    }
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,
    swipeToSlide: true,
  };

  

  return (
    <>
        
    <Slider {...settings} ref={sliderRef}>
      {publications.map((publication, index) => (
        <div key={index}  className='lg:pt-0 pt-20 w-full'>
          {/* Publication card */}
          {index === currentSlide ? (
            <div className=''>
            <a href={publication.link}>
              <OptimizedImage src={publication.image} alt={publication.title} className="lg:max-w-[25rem] lg:pt-0 pt-0  mx-auto drop-shadow-md" style={{...slideStyles[index]}} width={400} height={600} priority={index === currentSlide} />
            </a>
            </div>
          ) : (

            
            <div onClick={() => sliderRef.current && sliderRef.current.slickGoTo(index)} className="flex items-center justify-center lg:pt-32 pt-16 ">
                <OptimizedImage src={publication.image} alt={publication.title} className="lg:max-w-[8rem]  opacity-50 hover:opacity-80 max-w-[4rem] mx-auto drop-shadow-md" width={128} height={192} />
                
            </div>

          )}
        </div>
      ))}
    </Slider>
        <div className="max-w-5xl mx-auto text-center lg:pb-44 pb-40">
            {/* Render title, year, and ISBN for the current slide */}
            <div className="inline-flex gap-8 text-xl uppercase text-black">
              {publications[currentSlide].title}
            </div>
            {publications[currentSlide].subtitle && (
            <div className="text-md">{publications[currentSlide].subtitle}</div>
            )}
            <div className="">{publications[currentSlide].year}</div>
            <div className="">{publications[currentSlide].size}</div>
            

            {publications[currentSlide].isbn && (
            <div className='opacity-70'>ISBN: {publications[currentSlide].isbn}</div>
            )}
            
        </div>
    </>
  );
};

export default PublicationsCarousel;

const publications = [
  {
    id: '1',
    title: 'Adieu les demoiselle',
    year: '2024',
    isbn: '2812559214129518',
    image: 'https://drqlcggpj7pli.cloudfront.net/images/publications/3.png',
    link: 'https://www.radiusbooks.org/all-books/p/the-sorcerers-burden-contemporary-art-and-the-anthropological-turn',
    size: "Placeholder size"
  
  },
  {
    id: '2',
    title: 'Till Death Us Do Part',
    year: '2023',
    isbn: '978-3-947902-27-9',
    image: 'https://drqlcggpj7pli.cloudfront.net/images/publications/5.png',
    link: 'https://www.iwalewabooks.com/product-page/theo-eshetu-till-death-us-do-part',
    size: "27.5 x 25cm"

  },
  {
    id: '3',
    title: "The Sorcerer’s Burden",
    year: '2019',
    isbn: '9781942185604',
    image: 'https://drqlcggpj7pli.cloudfront.net/images/publications/1.png',
    link: 'https://www.radiusbooks.org/all-books/p/the-sorcerers-burden-contemporary-art-and-the-anthropological-turn',
    size: '22.8 x 31.7cm'
  },
  {
    id: '4',
    title: 'The Body Electric',
    year: '2017',
    isbn: '978-3-95679-341-7',
    image: 'https://drqlcggpj7pli.cloudfront.net/images/publications/2.png',
    link: 'https://www.sternberg-press.com/product/the-body-electric/',
    size: '16.6 x 23.7cm'
  },
  {
    id: '5',
    title: 'Blood',
    subtitle: 'Of Light and likeness',
    year: '2003',
    isbn: '',
    image: 'https://drqlcggpj7pli.cloudfront.net/images/publications/4.png',
    link: '',
    size: "13 x 21cm"
  },
];
