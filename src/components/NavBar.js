import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "flowbite-react"

const NavBar = ({visibleSection, featuredRef, installationsRef, essayRef, singleRef, photoRef, resumeRef, publicationRef, contactRef}) => {

    const [isFeatured, setIsFeatured] = useState(false);

    useEffect(() => {
        handleClick(featuredRef);
    }, [])

    const handleClick = (type) => {
        type.current.scrollIntoView({behavior: "smooth"});
        if(isHamVisible) {
            setIsHamVisible(false)
        }

        if(type === featuredRef) {
            setIsFeatured(true);
        
        } else {
            setIsFeatured(false);
        }
    }
    
    const [isHamVisible, setIsHamVisible] = useState(false);

    const handleToggle = () => {
      setIsHamVisible(!isHamVisible);
    };
  

    return(
        <>
        <nav className=" lg:py-0 md:py-0 sm:py-0   sm:px-8 md:px-16 2xl:px-32 lg:px-72   md:flex flex-wrap items-center justify-between text-xs">
            <div className="flex font-bold  pl-2 justify-between items-center">
                {visibleSection !== "Featured" && (
                <button  onClick={() => handleClick(featuredRef)} className={`uppercase ${visibleSection === "Featured" ? "underline" : ""}`}>
                Theo Eshetu
                </button>
                )}

                {visibleSection === "Featured" && (
                <button  onClick={() => handleClick(featuredRef)} className="opacity-0 uppercase">
                Theo Eshetu
                </button>
                )}


            <button aria-expanded={isHamVisible} onClick={handleToggle}  data-collapse-toggle="navbar-hamburger" type="button" aria-controls="navbar-hamburger"  className="sm:flex py-2 pr-2 md:hidden lg:hidden justify-between">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            
            </div>
            <div className={`${isHamVisible ? '' : 'hidden'} w-full`}  id="navbar-hamburger">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                    <li>
                    <a onClick={() => handleClick(installationsRef)} class="block py-2 px-3 text-black  rounded " aria-current="page">Video Installations</a>
                    </li>
                    <li className="focus:bg-[#fff7c9] focus:bg-opacity-60">
                    <a onClick={() => handleClick(essayRef)} class="block py-2 px-3 text-gray-900 rounded  ">Essay Films</a>
                    </li>
                    <li>
                    <a onClick={() => handleClick(singleRef)} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Single Channel</a>
                    </li>
                    <li>
                    <a onClick={() => handleClick(photoRef)} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Photography</a>
                    </li>
                    
                    <li>
                    <a onClick={() => handleClick(resumeRef)} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">CV</a>
                    </li>
                    
                    <li>
                    <a onClick={() => handleClick(publicationRef)} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Publications</a>
                    </li>
                    
                    <li>
                    <a onClick={() => handleClick(contactRef)} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Contact</a>
                    </li>
                    
                </ul>
            </div>

            <div className=' hidden md:flex items-center justify-center   '>
                <ul className='list-none m-0 text-xs lg:text-xs flex uppercase'>
                    <span className="m-0 text-xs lg:text-xs inline-flex space-x-4">

                        <li>
                            <button onClick={() => handleClick(installationsRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Video Installations" ? " underline opacity-100" : "opacity-70"}`}>
                                Video Installations
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(essayRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Essay Films" ? "underline opacity-100" : "opacity-70"}`}>
                                Essay Films
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(singleRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Single Channel" ? "underline opacity-100" : "opacity-70"}`}>
                                Single Channel
                            </button>
                        </li>
                            <li>
                                <button onClick={() => handleClick(photoRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Photography" ? "underline opacity-100" : "opacity-70"}`}>
                                    Photography
                                </button>
                            </li>
                        <li>
                        <button onClick={() => handleClick(resumeRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Resume" ? "underline opacity-100" : "opacity-70"}`}>
                            CV
                        </button>

                        </li>
                        <li>
                        <button onClick={() => handleClick(publicationRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Publications" ? "underline opacity-100" : "opacity-70"}`}>
                            Publications
                        </button>
                        
                        </li>
                        
                        

                    </span>
                </ul>
            </div>

            <div className="hidden md:flex list-none m-0 text-xs  uppercase">
            <li>
                        <button onClick={() => handleClick(contactRef)} className={`uppercase hover:opacity-80 ${visibleSection === "Contact" ? "underline opacity-100" : "opacity-70"}`}>
                            Contact
                        </button>
                        </li>
            </div>
            
        </nav>

 
        </>
    )
}

export default NavBar