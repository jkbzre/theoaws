// App.js

import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import './css/styles.css'


import Videos from './components/Videos';
import Photography from './components/Photography';

import { Dropdown } from 'flowbite-react';
import MainSection from './components/MainSection';
import NewPhotography from './components/v2/NewPhotography';

function App() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    // for video component
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [showMainSection, setShowMainSection] = useState(true);
    
    const [showContentSection, setShowContentSection] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showExhibitions, setShowExhibitions] = useState(false);

    const [showVideos, setShowVideos] = useState(false);

    const [showEssayFilms, setShowEssayFilms] = useState(false);
    const [showSingleChannel, setShowSingleChannel] = useState(false);
    const [showVideoInstallations, setShowVideoInstallations] = useState(false);

    const [showPhotography, setShowPhotography] = useState(false);
    const [showNavBar, setShowNavBar] = useState(true);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const [sectionContent, setSectionContent] = React.useState("Default content");

    const [fadeOut, setFadeOut] = useState(false); 
    
    const sectionRef = useRef(null);
    const exhibitionRef = useRef(null);
    const videosRef = useRef(null);
    const photographyRef = useRef(null);

    // TOP LEVL NAVIGATION
    const [selectedContent, setSelectedContent] = useState("");


    const [clickId, setClickId] = useState(null);


    const handleContentChange = (content) => {
        setSelectedContent(content);
    }

    const handleFeaturedClick = () => {
        handleContentChange("Featured");
        setShowNavBar(true);
    }

    

    const handleTheoClick = () => {
        setShowMainSection(true);
        setTimeout(() => {


            setTimeout(() => {
                if(selectedContent !== null) {
                    handleFeaturedClick();
                }

                if(showPhotography) {
                    setShowPhotography(false);
                } 
                if(showExhibitions) {
                    setShowExhibitions(false);
                }
                if(showVideos) {
                    setSelectedVideo(null);
                    setShowVideos(false);
                }
                if(showGallery) {
                    setShowGallery(false);
                }
                if(showSingleChannel) {
                    setSelectedVideo(null);
                    setShowSingleChannel(false);
                }
                if(showVideoInstallations) {
                    setSelectedVideo(null);
                    setShowVideoInstallations(false);
                }
                if(showEssayFilms) {
                    setSelectedVideo(null);
                    setShowEssayFilms(false);
                }
                if(showContentSection) {
                    setShowContentSection(false);
                }
                
                setShowNavBar(true);
                setFadeOut(false);
            }, 10);

    }, 10);


    }
 
    const handleEssayFilms = () => {
        setShowEssayFilms(true);
        setShowMainSection(false);
        setTimeout(() => {
            if(videosRef.current) {
                videosRef.current.scrollIntoView({behavior: 'smooth'});
            }                    
        }, 300);

    }

    const handlePhotography = () => {
        setShowPhotography(true);
        setShowMainSection(false);
        setTimeout(() => {
            if(photographyRef.current) {
                photographyRef.current.scrollIntoView({behavior: 'smooth'});
            }
        }, 300);
    }
    

    const handleVideoInstallations = (selectedVideoType1) => {
        if(selectedVideoType1 === "Video Installations") {
            setShowVideoInstallations(true);
            setShowMainSection(false);

        } else if(selectedVideoType1 === "Essay Films") {
            setShowEssayFilms(true);
            setShowMainSection(false);
    
        } else if(selectedVideoType1 === "Single Channel") {
            setShowSingleChannel(true);
            setShowMainSection(false);
        }

        setShowMainSection(false);
        
        setTimeout(() => {

            setShowNavBar(false);

            if(videosRef.current) {
                videosRef.current.scrollIntoView({behavior: 'smooth'});
            }                    
        }, 10);

    }

    const handleFeaturedVideo = (link) => {
        setShowVideoInstallations(true);
        setSelectedVideo(link);
        setShowMainSection(false);

        setTimeout(() => {
            setShowNavBar(false);
            if(videosRef.current) {
                videosRef.current.scrollIntoView({behavior: 'smooth'});
            }                    
        }, 10);
    }

    const handleSingleChannel = () => {
        setShowSingleChannel(true);
        setTimeout(() => {
            setShowNavBar(false);
            if(videosRef.current) {
                videosRef.current.scrollIntoView({behavior: 'smooth'});
            }                    
        }, 10);

    }



    // GALLERY NAVIGATION
    const handleImageClick = (index) => {
        const content = `Section ${index + 1} content`;

        setFadeOut(true);

        setTimeout(() => {
            setShowNavBar(false);
            setSelectedImageIndex(index);

            setSectionContent(content);
            
            sectionRef.current.scrollIntoView({behavior: 'smooth'});

        }, 50);
        setShowContentSection(true); 
        setShowGallery(true);
    };


    return (
        <>
        <div className="App relative min-h-screen ">

        <Router>
        <Routes>
            <Route path="/" element={<MainSection setShowMainSection={setShowMainSection} handleImageClick={handleImageClick} fadeOut={fadeOut} showMainSection={showMainSection} setSelectedContent={setSelectedContent} handleTheoClick={handleTheoClick} handleVideoInstallations={handleVideoInstallations} handlePhotography={handlePhotography} handleContentChange={handleContentChange} handleFeaturedClick={handleFeaturedClick} selectedContent={selectedContent} showNavBar={showNavBar} setShowNavBar={setShowNavBar}/>
            } />
            
            <Route path='/videos/:urlType/:urlVideo?' element={<Videos setShowMainSection={setShowMainSection}  handlePhotography={handlePhotography} handleContentChange={handleContentChange} handleVideoInstallations={handleVideoInstallations}  handleEssayFilms={handleEssayFilms} handleSingleChannel={handleSingleChannel} setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo}  setShowNavBar={setShowNavBar} setFadeOut={setFadeOut} handleTheoClick={handleTheoClick}/>} />
            <Route path='/photography/:urlAlbum?' element={<NewPhotography />}></Route>

        
        </Routes>
        </Router>

            

        </div>
        </>

    );
}

export default App;
