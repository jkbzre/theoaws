import React, { useEffect, useState } from 'react';
import PlayVideo from './PlayVideo';
import videoDataByType from '../data/videoData';
import { Dropdown } from 'flowbite-react';
import { Link, useParams, useNavigate } from 'react-router-dom';


function Videos({  setShowMainSection, handlePhotography, handleContentChange }) {
    const {urlType, urlVideo} = useParams();

    const [videoType, setVideoType] = useState(urlType);
    
    const [showVideo, setShowVideo] = useState(null);

    const [showEssayFilms, setShowEssayFilms] = useState(false);
    const [showSingleChannel, setShowSingleChannel] = useState(false);
    const [showVideoInstallations, setShowVideoInstallations] = useState(true);    

    const [isHovered, setIsHovered] = useState(false);

    const [foundVideoData, setFoundVideoData] = useState(null);
    

    
    const [isHamVisible, setIsHamVisible] = useState(false);

    const handleToggle = () => {
      setIsHamVisible(!isHamVisible);
    };
  


    function getVideoData(type) {
        return videoDataByType[type] || [];
    }

    const navigate = useNavigate();


    let videoData = getVideoData(videoType);


    useEffect(() => {
        console.log(urlVideo);
        if(urlVideo !== undefined && urlVideo !== "") {
            const found = videoData.find(video => video.id === urlVideo)
            setFoundVideoData(found)
            setShowVideo(found.src)
            console.log(found);
        } 

    },[urlVideo])

    function returnToOverview(returnType) {
        if(showVideo !== null) {
            setShowVideo(null);
        }
        window.scrollTo(0, 0);
        if(returnType !== videoType) {
            changeVideoType(returnType)
        }
        navigate(`/videos/${returnType}`)
    }


    const changeVideoType = (type) => {

        switch (type) {
            case "essay":
                setShowVideo(null);
                setShowEssayFilms(true);
                setShowSingleChannel(false);
                setShowVideoInstallations(false);

                setVideoType("essay");



                break;
            case "single":
                setShowVideo(null);

                setShowSingleChannel(true);
                setShowEssayFilms(false);
                setShowVideoInstallations(false);

                setVideoType("single");

                break;
            case "installations":
                setShowVideo(null);

                setShowVideoInstallations(true);
                setShowEssayFilms(false);
                setShowSingleChannel(false);

                setVideoType("installations");
                
                break;
            default:
                
                setVideoType("installations");
        }

    }



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
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            
            </div>
            <div className={`${isHamVisible ? '' : 'hidden'} w-full`}  id="navbar-hamburger">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                    <Link to={'/#installations'}>
                    <li>
                    <a  class="block py-2 px-3 text-black  rounded " aria-current="page">Video Installations</a>
                    </li>
                    </Link>
                    <Link to={'/#essayfilms'}>
                    <li className="focus:bg-[#fff7c9] focus:bg-opacity-60">
                    <a class="block py-2 px-3 text-gray-900 rounded  ">Essay Films</a>
                    </li>
                    </Link>
                    <Link to={'/#singlechannel'}>
                    <li>
                    <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Single Channel</a>
                    </li>
                    </Link>
                    <Link to={'/#photography'}>
                    <li>
                    <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Photography</a>
                    </li>
                    </Link>
                    <Link to={'/#resume'}>
                    <li>
                    <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">CV</a>
                    </li>
                    </Link>
                    <Link to={'/#publications'}>
                    <li>
                    <a  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Publications</a>
                    </li>
                    </Link>
                    <Link to={'/#contact'}>
                    <li>
                    <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Contact</a>
                    </li>
                    </Link>
                    
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
                        {showVideo === null ? videoDataByType[videoType].map((video) => (
                        <>
                        <Link to={`${video.id}`}>
                        <div key={video.src}  className="relative group hover:opacity-100    transition-opacity duration-300 cursor-pointer ">
                            <img src={video.thumbnail} alt={video.title} />
                            <p className="mt-2 raleway-400 text-xs lg:text-sm">{video.title}</p>
                            <p className='text-xs'>{video.year}</p>
                        </div>
                        </Link>
                        </>
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