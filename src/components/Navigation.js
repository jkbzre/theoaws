// Navigation.js

import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import PlayVideo from './PlayVideo';
import videoDataByType from '../data/videoData';

import { useNavigate } from 'react-router-dom';

const Navigation = ( { className, hoveredTitle, setHoveredTitle, handleVideoInstallations, handlePhotography, setShowMainSection, handleTheoClick, handleContentChange} ) => {

    const titles = ['Crocodiles on a ceiling', 'The Moving Museum', 'Dead Boys in Paradise'];
    
    const category = ['installations', 'essay', 'single']
    const ids = ['crocodiles', 'moving-museum', 'paradise'];
    const thumbnailId = ['https://drqlcggpj7pli.cloudfront.net/images/thumbnails/croc.jpg', 'https://drqlcggpj7pli.cloudfront.net/images/thumbnails/movingthumb.png', "https://drqlcggpj7pli.cloudfront.net/images/articles/paradise/para_thumb.jpg"]

    const [isSlideDown, setIsSlideDown] = useState(false);

    const handleMouseEnter = (index) => () => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);
    //const handleMouseEnter = useMemo(() => () => setIsSlideDown(true), [setIsSlideDown])
    //const handleMouseLeave = useMemo(() => () => setIsSlideDown(false), [setIsSlideDown])

    const [showVideo, setShowVideo] = useState(null);
    const [foundVideoData, setFoundVideoData] = useState(null);

    const [bottomNav, setBottomNav] = useState(true);

    const navigate = useNavigate();




    function getVideoData(type) {
        return videoDataByType[type] || [];
    }

    function handleVideoClick(index) {

        navigate(`/videos/${category[index]}/${ids[index]}`)
    }

    function handleBackClick() {
        handleTheoClick();
        setShowVideo(null);
        setBottomNav(true);
    }

   

    return (
        <>
        
            {showVideo !== null &&
            <div className='relative '>
                <div className={` px-4 sm:px-8 md:px-16 lg:px-72 2xl:px-32  -80 pb-10 top-0 bg-[#fcfcfc] z-50`}>
                    {/* Example usage: */}
                    {thumbnailId.map((thumb, idx) => (
                        <OptimizedImage key={thumb} src={thumb} alt={titles[idx]} width={200} height={120} priority />
                    ))}
                    <div className={`sticky ${isSlideDown ? 'slide-down ' : 'slide-none lg:slide-none-pc'} navbar z-10 bg-[#fcfcfc]  bg-opacity-90   top-0`}>
                        <div className={` flex justify-between lg:justify-normal sm:mx-auto  `}>
                                <div className='firstdiv'>
                                    <a onClick={() =>   handleBackClick()} className='cursor-pointer'>THEO ESHETU
                                    </a>
                                    <h1 className='text-xs uppercase'>FEATURED</h1>
                                </div>

                            </div>
                    </div>
                    <PlayVideo foundVideoData={foundVideoData} />
                </div>
            </div>
            }
            <div onMouseEnter={() => setHoveredIndex(null)} /* Clear hover on container hover */
                className={`featuredbar fixed  z-20 ${bottomNav ? 'bottom-20 lg:bottom-10 nav-bar-up' : 'top-5 nav-bar-down'} left-0 right-0 flex flex-col gap-3 lg:pt-5 bg-opacity-50 items-center `}>
            <div className='flex '>
                {Array(3).fill(null).map((_, index) => (
                <div className={`relative group w-full px-2`} key={index}>
                    <OptimizedImage
                        key={index}
                        src={thumbnailId[index]}
                        alt={`Nav ${index + 1}`}
                        onMouseEnter={handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className={`md:w-48 w-full rounded-md drop-shadow-lg opacity-80 transform hover:opacity-100 hover:z-[1000] transition-all duration-300 cursor-pointer ${className}`}
                        onClick={() => handleVideoClick(index)}
                        width={320}
                        height={200}
                        priority
                    />
                </div>
                ))}
            </div>

            </div>
        </>
    );
    
}

export default Navigation;
