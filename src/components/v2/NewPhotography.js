
import { Link, useParams } from "react-router-dom"
import { useEffect, useState, useMemo } from "react";
import Articles from "../Articles";
import OptimizedImage from "../OptimizedImage";


const NewPhotography = () => {
    const {urlAlbum} = useParams();

    const [showPhoto, setShowPhoto] = useState(null);
    const [currentAlbum, setCurrentAlbum] = useState(null);



    
    const [isHamVisible, setIsHamVisible] = useState(false);

    const handleToggle = () => {
      setIsHamVisible(!isHamVisible);
    };
  
    
    const albumData = [
        { id: "masked-self-portraits", year:"ongoing", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/masked_thumb.png",  text: "Masked Self-Portraits", description: "Description for Album 4", pics: 8, im1: ""},
        { id: "adieu", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/10.png", text: "Adieu Les Demoiselles Photo Series", year: "2019"},
        { id: "atlas-portraits", year:"2018", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/1__.png", text: "Atlas Portraits", description: "2018, Site specific single screen video projection and photographic series.", pics: 6, im1: "" },
        { id: "mystery-of-history", year:"2015", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/mystery_thumb.png",  text: "The Mystery of History and His Story in My Story", description: "The Mystery of History and His Story in My Story is a picture essay based on material found at the Museum of Yugoslav History. Between 1966 and 1970 the artist’s grandfather, a celebrated historian, was Ethiopia’s Ambassador in Belgrade. At the time Ethiopia and Yugoslavia were members of the non-aligned movement, involved in discussing their position beyond the cold war politics of the Soviet Union and the United States. The artist delved into the extensive photo archive in search of oblique traces of biography, tangential associative thoughts, fragments of forgotten memories, and unwritten personal histories to create an alchemic composition.", pics: 16, im1: "" },
        { id: "mirror-ball-constellation", year:"2012", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/mirror_thumb.png", text: "Mirror Ball Constellation", description: "Description for Album 3", pics: 12, im1: ""},
        { id: "axum", year:"2009", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/axum_thumb.png",  text: "Around Axum", description: "The Return of the Axum Obelisk is inspired by traditional Ethiopian paintings that narrate the legend of the Queen of Sheba. Her story is at the basis of Ethiopia’s origin myth. It is a work that celebrates the historic event of the restitution of a 25-meter, 160-ton stele that was brought to Rome as a war trophy during the Italian occupation. The filming of the process from its dismantling in Rome to its transport to Axum and the subsequent process of re-mounting, until the final celebrations are the visual basis for the work. The installation transforms the symbolic significance of the obelisk from an object representing victory and lose to becoming a post-colonial symbol of peace, reconciliation and unity. ", pics: 16, im1: "" },
        { id: "trip-to", year: "2006", img: "http://drqlcggpj7pli.cloudfront.net/images/thumbnails/trip.png",  text: "Trip To Mount Zuqualla (Photo Series)", description: "description", pics: 3, im1: "" },

        { id: "blood", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/blood_thumb.png", text: "Blood", year: "2003"},
        { id: "scratch-christ", year:"1989", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/scratch_thumb.png",  text: "Scratch Christ", description: "General Album Description", pics: 8, im1: "max-w-[520px]"},
        { id: "early-stills", year: "", img: "http://drqlcggpj7pli.cloudfront.net/images/photography/albums/early_thumb.png",  text: "Early Stills", description: "Self Portrait, 1975 In-camera double-exposure.", pics: 3, im1: "" },


    ]




    const found = useMemo(() => {
        if (urlAlbum !== undefined && urlAlbum !== "") {
          return albumData.find(photo => photo.id === urlAlbum);
        }
        return null;
      }, [urlAlbum]);


      useEffect(() => {
        if (found) {
          setShowPhoto(true);
          setCurrentAlbum(found);
          
          window.scrollTo(0, 0);
    

        }
      }, [found]); 
      
    return(
        <>
    {showPhoto === null ? (
        
        <>
        
        <div className="px-0 sm:px-8 md:px-16 2xl:px-32 lg:px-72 pb-24 top-0  z-50">
            <div className="grid md:grid-cols-3 px-2 gap-4">
                {albumData.map((album) => (
                    <>
                    <Link to={`/photography/${album.id}`}>
                        <div  className="relative group hover:opacity-100 pb-10   transition-opacity duration-300 cursor-pointer ">
                            <OptimizedImage src={album.img} alt={album.text} width={400} height={400} priority={true} />
                            <p className="mt-2 raleway-400 text-xs lg:text-sm">{album.text}</p>
                            <p className='text-xs'>{album.year}</p>
                        </div>
                    </Link>
                    </>
                
                
                ))} 
            </div>
        </div>
        </>
        ) : (
                <>
                <div className=' fixed text-black bg-white  z-[500] transition-all w-full lg:py-2'>

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

                <div className="px-4 bg-[#fff7c9] pt-20 sm:px-8 md:px-16 lg:px-32 xl:px-72 pb-10  text-black">
                <div className="px-4">
                <Articles title={currentAlbum.text}></Articles>
                </div>
                </div>
                </>
        )}
        </>
        
        )
}

export default NewPhotography;