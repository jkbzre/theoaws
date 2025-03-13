import 'font-awesome/css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { Dropdown } from 'flowbite-react';

function Photography({  handlePhotography, setShowNavBar, setFadeOut, handleTheoClick, clickId }) {
    const {urlAlbum} = useParams();
    const navigate = useNavigate();
    
    const albumData = [
        { id: "trip-to", year: "", img: "images/photography/albums/11.png",  text: "Trip To Mount Zuqualla Photo Series", description: "description", pics: 3, im1: "" },
        { id: "masked-self-portraits", year:"ongoing", img: "images/photography/albums/5_.png",  text: "Masked Self Portraits", description: "Description for Album 4", pics: 8, im1: ""},
        { id: "adieu", img: "images/photography/albums/10.png", text: "Adieu Les Demoiselles Photo Series", year: "2019"},
        { id: "atlas-portraits", year:"2018", img: "images/photography/albums/1_.png", text: "Atlas Portraits", description: "2018, Site specific single screen video projection and photographic series.", pics: 6, im1: "" },
        { id: "mystery-of-history", year:"2015", img: "images/photography/albums/3_.png",  text: "The Mystery of History", description: "The Mystery of History and His Story in My Story is a picture essay based on material found at the Museum of Yugoslav History. Between 1966 and 1970 the artist’s grandfather, a celebrated historian, was Ethiopia’s Ambassador in Belgrade. At the time Ethiopia and Yugoslavia were members of the non-aligned movement, involved in discussing their position beyond the cold war politics of the Soviet Union and the United States. The artist delved into the extensive photo archive in search of oblique traces of biography, tangential associative thoughts, fragments of forgotten memories, and unwritten personal histories to create an alchemic composition.", pics: 16, im1: "" },
        { id: "mirror-ball-constellation", year:"2012", img: "images/photography/albums/4_.png", text: "Mirror Ball Constellation", description: "Description for Album 3", pics: 12, im1: ""},
        { id: "axum", year:"2009", img: "images/photography/albums/8_.png",  text: "Axum Photo Essay", description: "The Return of the Axum Obelisk is inspired by traditional Ethiopian paintings that narrate the legend of the Queen of Sheba. Her story is at the basis of Ethiopia’s origin myth. It is a work that celebrates the historic event of the restitution of a 25-meter, 160-ton stele that was brought to Rome as a war trophy during the Italian occupation. The filming of the process from its dismantling in Rome to its transport to Axum and the subsequent process of re-mounting, until the final celebrations are the visual basis for the work. The installation transforms the symbolic significance of the obelisk from an object representing victory and lose to becoming a post-colonial symbol of peace, reconciliation and unity. ", pics: 16, im1: "" },

        { id: "blood", img: "images/photography/albums/9.png", text: "Blood", year: "2003"},
        { id: "scratch-christ", img: "images/photography/albums/6_.png",  text: "Scratch Christ", description: "General Album Description", pics: 8, im1: "max-w-[520px]"},
        { id: "early-stills", year: "", img: "images/photography/albums/7_.png",  text: "Early Stills", description: "Self Portrait, 1975 In-camera double-exposure.", pics: 3, im1: "" },


    ]

    useEffect(() => { 
        if(urlAlbum !== undefined && urlAlbum !== "") {
            const found = albumData.find(album => album.id === urlAlbum)
            setCurrentAlbum(found);
            setShowAlbum(true);
        }
    },[urlAlbum]
    )

    const [showAlbum, setShowAlbum] = useState(null);

    const [currentAlbum, setCurrentAlbum] = useState(null);

    function returnToOverview() {
        navigate(`/photography`)
        setCurrentAlbum(null)
        setShowAlbum(null);
    }


    const handleAlbumClick = (album) => {
        setCurrentAlbum(album);
        setShowAlbum(true);
    }

 
    return (
        <>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 pb-10  text-black">

            <div className='sticky flex flex-wrap items-center justify-between  lg:py-4 bg-opacity-90 z-50  top-0'>
                <div className='flex justify-between items-center'>
                    <span className='span-1 text-xs'>
                        {showAlbum !== null && (
                            <button onClick={() => returnToOverview()}>
                                            <span className='uppercase font-bold'>THEO ESHETU</span>
                            </button>
                        )}
                        {showAlbum === null && (
                            <Link to={'/featured'}>
                                            <span className=' uppercase font-bold'>THEO ESHETU</span>
                            </Link>
                        )}

                    </span>
                </div>

                <NavBar section="photo"/>



            </div>
            {showAlbum === null && 
                


                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-3 gap-2  lg:gap-4 '>
                        {albumData.map((album, index) => (
                            <div key={index} className="flex flex-col  ">
                                
                                <a onClick={() => navigate(`${album.id}`)} className="cursor-pointer ">
                                    <img src={album.img} alt={album.text} className="" />
                                    <p className="text-xs lg:text-sm raleway-400 mt-2">{album.text}</p>
                                    <p className='text-xs'>{album.year}</p>
                                </a>
                                
                            </div>
                        ))}
                    </div>

                </div>



            } 
            {
                <>
                {showAlbum &&


                <div className='px-4'>
                <Articles title={currentAlbum.text}></Articles>
                </div>
}
                </>
            } 
            </div>

                
        </>
    );
}

export default Photography;
