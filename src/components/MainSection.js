import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import LazyMount from "./LazyMount";

const VideoInstallations = React.lazy(() => import("./v2/VideoInstallations"));
const NewPhotography = React.lazy(() => import("./v2/NewPhotography"));
const Resume = React.lazy(() => import("./v2/Resume"));
const PublicationsCarousel = React.lazy(() => import("../PublicationCarousel"));
const Contact = React.lazy(() => import("./v2/Contact"));


function MainSection () {

    const installationsRef = useRef(null);
    const essayRef = useRef(null);
    const singleRef = useRef(null);
    const photoRef = useRef(null);
    const resumeRef = useRef(null);
    const publicationRef = useRef(null);
    const contactRef = useRef(null);
    const featuredRef = useRef(null);



    const sectionsRef = useRef([]);



    useEffect(() => {
        const hash = window.location.hash.slice(1);
        const element = document.getElementById(hash)

        if(element) {
            element.scrollIntoView({behavior: "smooth"});
        }

        const options = {
            threshold: 0.3
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setVisibleSection(entry.target.getAttribute("id"));

                }
            })
        }, options);

        sectionsRef.current.forEach((section) => {
            observer.observe(section)
        })
    }, [])


    const refCallback = useCallback((element) => {
        if(element) {
            sectionsRef.current.push(element);
        }
    }, []);


    const menus = ["Featured", "Video Installations", "Essay Films", "Single Channel", "Photography", "Resume", "Publications", "Contact"]
    
    const [visibleSection, setVisibleSection] = useState(menus[0]);

    return(
    <>
    <div className={``}>
    <div className={`relative h-screen section  `} >

    <div className='fixed  bg-white text-black  z-[500] transition-all w-full lg:py-2'>


        <NavBar visibleSection={visibleSection}  installationsRef={installationsRef} contactRef={contactRef} singleRef={singleRef} essayRef={essayRef} publicationRef={publicationRef} photoRef={photoRef} resumeRef={resumeRef} featuredRef={featuredRef}/>




    </div>

    <>
            <div id="Featured" className="bg-black" ref={refCallback}>
                <div ref={featuredRef} className='sectionfeatured h-screen flex justify-center items-center '>
                <div className='w-full '>



                        <div className='flex  justify-center items-center'>
                        <span className='theo-title text-center  sm:tracking-normal justify-center text-6xl pb-20  lg:pb-20 cursor-default text-yellow-100 uppercase'>Theo Eshetu</span>
                        </div>


                        <div className="container mx-auto lg:px-0 px-0">
                            <div className="flex justify-between gap-x-10 sm:gap-x-14 md:gap-x-20 lg:gap-x-32">
                                <div className="flex-1">
                                    <video className="w-full aspect-video object-cover border-2 border-yellow-200 border-opacity-80" src="https://drqlcggpj7pli.cloudfront.net/landing/nft_left_new.mov" poster="/thumbnails/landing-left-thumb.png" preload="metadata" playsInline autoPlay loop muted>
                                    </video>
                                </div>

                                <div className="flex-1">
                                    <video  className="w-full aspect-video object-cover border-2 border-yellow-200 border-opacity-80" src="https://drqlcggpj7pli.cloudfront.net/landing/nft_center.mov" poster="/thumbnails/landing-center-thumb.png" preload="metadata" playsInline autoPlay loop muted>
                                    </video>
                                </div>

                                <div className="flex-1">
                                    <video className="w-full aspect-video object-cover border-2 border-yellow-200 border-opacity-80" src="https://drqlcggpj7pli.cloudfront.net/landing/nft_right_new.mov" poster="/thumbnails/landing-right-thumb.png" preload="metadata" playsInline autoPlay loop muted>
                                    </video>
                                </div>
                            </div>
                        </div>

                        
                        <div className='flex justify-center items-center'>
                        <span className={`text-lg  text-left lg:max-w-[60rem] px-4 lg:px-0 leading-normal  block  lg:pt-20 pt-20  `}>Theo Eshetu utilises diverse video formats to explore cinematic representations and the visual grammar of the moving image. A recurring theme throughout is the stitching of histories – from European imperialism to African modernity – to develop an aesthetic that captures the interrelation between world cultures and communal knowledge. These works experiment with the process of layering and mirroring, and the use of non-linear narratives that challenge how images are perceived.</span>
                        </div>
                    
                        <div>
                    </div>

                    </div>
                </div>
            </div>
            <div id="Video Installations" className="" ref={refCallback}>
            <section className="sectioninstallations bg-[#fff7c9] h-auto text-black">
                
                <div   className='flex  justify-center py-40  items-center'>

                <div ref={installationsRef} id="installations" className="pb-44">

                </div>
                    <div  className="py-10 bg-black text-[#fff7c9] w-full justify-center items-center flex">
                    <span className='theo-title  text-center justify-center text-4xl cursor-default  uppercase '>Video Installations</span>
                    </div>

                </div>

                <LazyMount minHeight={1400}>
                    {() => (
                        <Suspense fallback={null}>
                            <VideoInstallations categoryName="Video Installations" categoryType="installations" />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Essay Films" ref={refCallback}>
            <section className="sectionessay bg-[#fff7c9] h-fit text-black">
            <div   className='flex  justify-center  py-40  items-center'>

                <div ref={essayRef} id="essayfilms" className="pb-44">

                </div>
                    <div  className="py-10 bg-black text-[#fff7c9] w-full justify-center items-center flex">
                    <span className='theo-title  text-center justify-center text-4xl cursor-default  uppercase '>Essay Films</span>
                    </div>
                </div>
                <LazyMount minHeight={1400}>
                    {() => (
                        <Suspense fallback={null}>
                            <VideoInstallations categoryName="Essay Films" categoryType="essay" />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Single Channel" ref={refCallback}>
            <section  className="sectionsingle bg-[#fff7c9] h-fit text-black">
            <div   className='flex  justify-center  py-40  items-center'>

                <div ref={singleRef} id="singlechannel" className="pb-44">

                </div>
                    <div  className="py-10 bg-black text-[#fff7c9] w-full justify-center items-center flex">
                    <span className='theo-title  text-center justify-center text-4xl cursor-default  uppercase '>Single Channel</span>
                    </div>
                </div>
                <LazyMount minHeight={1400}>
                    {() => (
                        <Suspense fallback={null}>
                            <VideoInstallations categoryName="Single Channel" categoryType="single" />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Photography" ref={refCallback}>
                
            <section  className="sectionphoto bg-[#fff7c9] h-fit text-black">
            <div   className='flex bg-[#fff7c9] text-black justify-center  py-40  items-center'>


            <div ref={photoRef} id="photography" className="pb-44">

            </div>
            <div  className="py-10 bg-black text-[#fff7c9] w-full justify-center items-center flex">
            <span className='theo-title  text-center justify-center text-4xl cursor-default  uppercase '>Photography</span>
            </div>

            </div>
                <LazyMount minHeight={1200}>
                    {() => (
                        <Suspense fallback={null}>
                            <NewPhotography />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Resume" ref={refCallback}>
            <section ref={resumeRef} id="resume" className="sectionresume bg-black  text-white">
                <LazyMount minHeight={800}>
                    {() => (
                        <Suspense fallback={null}>
                            <Resume />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Publications" ref={refCallback}>
            <section  className="sectionpublication pb-[8rem] bg-[#fff7c9]  text-black">
                <div  className='flex  w-full bg-[#fff7c9] pb-14 pt-20 text-black justify-center items-center'>
                    
                <div ref={publicationRef} id="publications" className="pb-44"></div>


                    <div  className='py-10 bg-black text-[#fff7c9] w-full justify-center items-center flex'>
                        <span className='theo-title  text-center justify-center  text-4xl  cursor-default  uppercase'>Publications</span>
                    </div>
                </div>
                <LazyMount minHeight={700}>
                    {() => (
                        <Suspense fallback={null}>
                            <PublicationsCarousel />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>

            <div id="Contact" ref={refCallback}>
            <section   className="sectioncontact bg-black h-screen    text-white">
            <div ref={contactRef} id="contact" className="pb-20"></div>
                
            <div className='flex justify-center items-center '>
                
                
                <span className='theo-title  text-center justify-center text-[#fff7c9] text-4xl cursor-default pb-10 uppercase'>Contact</span>
            </div>
                <LazyMount minHeight={700}>
                    {() => (
                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    )}
                </LazyMount>
            </section>
            </div>
    </>


    </div>
    </div>

    </>

)
}

export default MainSection