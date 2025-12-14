// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adieu from './components/Adieu.js';

import './css/styles.css'


import Videos from './components/Videos';
import MainSection from './components/MainSection';
import NewPhotography from './components/v2/NewPhotography';

function App() {
    return (
        <>
        <div className="App relative min-h-screen ">

        <Router>
        <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path='/videos/:urlType/:urlVideo?' element={<Videos />} />
            <Route path='/photography/:urlAlbum?' element={<NewPhotography />}></Route>
            <Route path='/adieu' element={<Adieu />}></Route>   
        
        </Routes>
        </Router>

            

        </div>
        </>

    );
}

export default App;
