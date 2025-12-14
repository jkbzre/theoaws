import React, { useEffect, useMemo, useState } from 'react';
import PlayVideo from './PlayVideo';
import videoDataByType from '../data/videoData';
import { Link, useParams } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';


function Videos() {
    const {urlType, urlVideo} = useParams();

    const videoType = urlType;
    
    const [showVideo, setShowVideo] = useState(null);

    const [foundVideoData, setFoundVideoData] = useState(null);
    

    
    const [isHamVisible, setIsHamVisible] = useState(false);

    const handleToggle = () => {
      setIsHamVisible(!isHamVisible);
    };
  


    function getVideoData(type) {
        return videoDataByType[type] || [];
    }

    const videoData = useMemo(() => getVideoData(videoType), [videoType]);


    useEffect(() => {
        if(urlVideo !== undefined && urlVideo !== "") {
            const found = videoData.find(video => video.id === urlVideo)
            setFoundVideoData(found)
            setShowVideo(found.src)
        } 

    },[urlVideo, videoData])

    return (
        <>
            <div className="relative  text-black bg-[#fff7c9]">
                
            <div className='fixed bg-white text-black   z-[500] transition-all w-full lg:py-2'>

            <nav className=" lg:py-0 md:py-0 sm:py-0   sm:px-8 md:px-16 2xl:px-32 lg:px-72   md:flex flex-wrap items-center justify-between text-xs">
            <div className="flex font-bold pl-2 justify-between items-center">
                <Link to={'/'}>
                <button   className={`uppercase `}>
                Theo Eshetu
                </button>
                </Link>



            <button aria-expanded={isHamVisible} onClick={handleToggle}  data-collapse-toggle="navbar-hamburger" type="button" aria-controls="navbar-hamburger"  className="sm:flex py-2 pr-2 md:hidden lg:hidden justify-between">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            
            </div>
            <div className={`${isHamVisible ? '' : 'hidden'} w-full`}  id="navbar-hamburger">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                    <li>
                        <Link className="block py-2 px-3 text-black rounded" to={'/#installations'}>
                            Video Installations
                        </Link>
                    </li>
                    <li className="focus:bg-[#fff7c9] focus:bg-opacity-60">
                        <Link className="block py-2 px-3 text-gray-900 rounded" to={'/#essayfilms'}>
                            Essay Films
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" to={'/#singlechannel'}>
                            Single Channel
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" to={'/#photography'}>
                            Photography
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" to={'/#resume'}>
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" to={'/#publications'}>
                            Publications
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" to={'/#contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className=' hidden md:flex items-center justify-center   '>
                <ul className='list-none m-0 text-xs lg:text-xs flex uppercase'>
                    <span className="m-0 text-xs lg:text-xs inline-flex space-x-4">
                    <Link to={'/#installations'}>
                        <li>
                            <button className={`uppercase hover:opacity-80`}>
                                Video Installations
                            </button>
                        </li>
                    </Link>
                    <Link to={'/#essayfilms'}>
                     
                        <li>
                            <button  className={`uppercase hover:opacity-80 `}>
                                Essay Films
                            </button>
                        </li>
                    </Link>
                    <Link to={'/#singlechannel'}>
                    <li>
                            <button  className={`uppercase hover:opacity-80 `}>
                                Single Channel
                            </button>
                        </li>
                    </Link>
                    <Link to={'/#photography'}>
                        <li>
                                <button  className={`uppercase hover:opacity-80 `}>
                                    Photography
                                </button>
                            </li>
                    </Link>
                    <Link to={'/#resume'}>
                        <li>
                        <button  className={`uppercase hover:opacity-80`}>
                            CV
                        </button>

                        </li>
                    </Link>
                    <Link to={'/#publications'}>
                        <li>
                        <button className={`uppercase hover:opacity-80 `}>
                            Publications
                        </button>
                        
                        </li>
                    </Link>
                        
                        

                    </span>
                </ul>
            </div>

            <div className="hidden md:flex list-none m-0 text-xs  uppercase">
            <Link to={'/#contact'}>
                <li>
                <button  className={`uppercase hover:opacity-80 `}>
                    Contact
                </button>
                </li>
            </Link>

            </div>
            
        </nav>
            </div>
                                
                <div className=" px-4 sm:px-8 md:px-16 2xl:px-32 lg:px-72   py-10  top-0  z-50">
                    
                    <div className='grid grid-cols-3 gap-4'>
                        {showVideo === null ? videoData.map((video, idx) => (
                        <Link key={video.id} to={`${video.id}`}>
                        <div className="relative group hover:opacity-100    transition-opacity duration-300 cursor-pointer ">
                            <OptimizedImage
                                src={video.thumbnail}
                                alt={video.title}
                                width={400}
                                height={300}
                                priority={idx < 6}
                                className="w-full"
                            />
                            <p className="mt-2 raleway-400 text-xs lg:text-sm">{video.title}</p>
                            <p className='text-xs'>{video.year}</p>
                        </div>
                        </Link>
                        )) : (
                            <>
                                <PlayVideo  foundVideoData={foundVideoData} />
                            </>
                        )}
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Videos;