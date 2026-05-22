import React, { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import LazyMount from "./LazyMount";
import OptimizedImage from "./OptimizedImage";

const VideoInstallations = React.lazy(() => import("./v2/VideoInstallations"));
const NewPhotography = React.lazy(() => import("./v2/NewPhotography"));
const Resume = React.lazy(() => import("./v2/Resume"));
const PublicationsCarousel = React.lazy(() => import("../PublicationCarousel"));
const Contact = React.lazy(() => import("./v2/Contact"));


function MainSection () {

    const GARDEN_HERO_SRC = `${process.env.PUBLIC_URL}/broken.jpg`;

    const installationsRef = useRef(null);
    const essayRef = useRef(null);
    const singleRef = useRef(null);
    const photoRef = useRef(null);
    const resumeRef = useRef(null);
    const publicationRef = useRef(null);
    const contactRef = useRef(null);
    const featuredRef = useRef(null);

    const navWrapperRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);



    const sectionsRef = useRef([]);



    useLayoutEffect(() => {
        const updateNavHeight = () => {
            const nextHeight = navWrapperRef.current?.getBoundingClientRect?.().height ?? 0;
            setNavHeight(nextHeight);
        };

        updateNavHeight();

        let resizeObserver;
        if (typeof ResizeObserver !== "undefined" && navWrapperRef.current) {
            resizeObserver = new ResizeObserver(() => updateNavHeight());
            resizeObserver.observe(navWrapperRef.current);
        }

        window.addEventListener("resize", updateNavHeight);

        return () => {
            window.removeEventListener("resize", updateNavHeight);
            resizeObserver?.disconnect?.();
        };
    }, []);

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

        return () => {
            observer.disconnect();
        };
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

    <div ref={navWrapperRef} className='fixed  bg-white text-black  z-[500] transition-all w-full lg:py-2'>


        <NavBar visibleSection={visibleSection}  installationsRef={installationsRef} contactRef={contactRef} singleRef={singleRef} essayRef={essayRef} publicationRef={publicationRef} photoRef={photoRef} resumeRef={resumeRef} featuredRef={featuredRef}/>




    </div>

    <>
            <div
                id="Featured"
                className="bg-black"
                style={{ scrollMarginTop: navHeight + 16 }}
                ref={refCallback}
            >
                <div
                    ref={featuredRef}
                    className='sectionfeatured min-h-screen flex justify-center items-start'
                    style={{ paddingTop: navHeight + 16 }}
                >
                <div className='w-full'>



                        <div className='flex justify-center items-center'>
                            <div className='w-full px-4 lg:px-0 flex flex-col items-center'>
                                <span className='theo-title text-center sm:tracking-normal text-4xl sm:text-5xl lg:text-6xl pb-6 lg:pb-8 cursor-default text-yellow-100 uppercase'>
                                    The Garden of the Broken-Hearted
                                </span>
        
                            </div>
                        </div>

                        <div className="container mx-auto lg:px-0 px-4">
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <Link
                                        to="/garden-of-the-broken-hearted"
                                        aria-label="Open The Garden of the Broken-Hearted"
                                        className="block transition-opacity hover:opacity-90"
                                    >
                                        <OptimizedImage
                                            src={GARDEN_HERO_SRC}
                                            alt="The Garden of the Broken-Hearted"
                                            className="w-full aspect-video object-cover border-2 border-yellow-200 border-opacity-80"
                                            width={435}
                                            height={657}
                                            priority
                                            enableVariants={false}
                                            enableBlurPlaceholder={false}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center items-center pt-8'>
                            <Link
                                to="/garden-of-the-broken-hearted"
                                className="uppercase text-xs sm:text-sm border border-yellow-200 border-opacity-80 text-yellow-100 px-6 py-3 hover:opacity-90"
                            >
                                Venice Biennale — now on view
                            </Link>
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
