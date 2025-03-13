import { Link, useNavigate } from "react-router-dom"
import ClickableImage from "./ClickableImage"

import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "../components/AudioPlayer"

function Articles({title}) {

    const navigate = useNavigate();

    switch (title) {
        case "An Extraordinary Event":
            const extraImages = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/1.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/4.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/5.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/6.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/7.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/event/8.jpg",
            ]
            return(
                <>
                
                <div className="flex justify-center pt-10 pb-10">
                    <img src={extraImages[0]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[1]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[2]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[3]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[4]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[5]} className="lg:max-w-3xl"></img>
                </div>
                
                <div className="flex justify-center pb-10">
                    <img src={extraImages[6]} className="lg:max-w-3xl"></img>
                </div>

                <div className="flex justify-center pb-10">
                    <img src={extraImages[7]} className="lg:max-w-3xl"></img>
                </div>

                </>
            )

        case "Blood": 
        const bloodImages = [
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s1.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s2.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s3.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s4.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s5.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s6.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s7.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s8.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s9.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s10.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s11.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s12.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s13.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s14.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s15.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s16.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s17.jpg",
            "http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/s18.jpg",
        ]

        return(
                <>

                <div className="flex justify-center  pt-10">
                <div>
                <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/1.jpg" className="lg:max-w-3xl"></img>
                <span className="flex text-xs pb-10 ">Installation view; Blood, Museo Laboratorio di Arte Contemporanea, La Sapienza University, May 2003, Rome, Italy</span>
                </div>
                </div>



                  


                <div className="flex justify-center items-center ">
                    <div className="grid grid-cols-3 ">
                    {bloodImages.map((imageUrl, index) => (
                        <ClickableImage key={index} imageUrl={imageUrl} carouselImg={bloodImages} imageStyling={'lg:max-w-[16rem] px-1 py-1'} />
                    ))}
                    </div>
                </div>

                <div className="flex justify-center pt-10 pb-5">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/2.jpg" className="lg:max-w-3xl"></img>
                </div>

                <div className="flex justify-center pb-10 pt-5">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/photo_blood/3.jpg" className="lg:max-w-3xl"></img>
                </div>
                <div className="flex justify-center">

                <div className="">
                    <div className="mt-6 w-full font-bold max-w-3xl text-left text-2xl">
                        Blood
                    </div>

                    <div className="w-full pb-6 max-w-4xl text-left">
                    Blood is a collection of fugitive video stills taken from footage of a three-month journey made in Ethiopia to portray my paternal grandfather and learn of the history of Ethiopia. The project is a compendium to the video Blood Is Not Fresh Water.
                    </div>

                    <div className="w-full pb-6 max-w-4xl text-left">
                    The photographs explore the video-still frames as a mode of selecting a decisive moment from the constant flow of moving images.
                    </div>

                    <div className="w-full pb-2 max-w-4xl text-left">
                    From the preface;
                    </div>


                    <div className="w-full italic pb-10 max-w-md text-left">
                    ’What has often surprised travellers, who have
                    come to convert, help, conquer, or visit Ethiopia,
                    is how the country has transformed their own
                    concept of themselves and, as a consequence, the
                    perception one has of others. The limitations
                    of its technological development, archaic religious
                    ceremonies, its poverty, and an extremely
                    heterogeneous social fabric can give the impression
                    that Ethiopians would benefit from outside help.
                    But one soon learns that traditions have existed
                    here for many centuries. Christianity adopted
                    here before it reached Europe and, before that,
                    Judaism blended with animistic beliefs. 
                    As a Coptic Christian stronghold in Africa, Ethiopians 
                    had learned to defend their faith against outside influences 
                    and built their identity through a long
                    history of rulers and wars. The culture looks at others with suspicion 
                    and distrust, as if too wise to be impressed by good
                    intentions. More than a place with definite borders,
                    Ethiopia is a place imagined. Its image rests in the
                    subconscious, evoked through legend, mystified
                    through literature, and upheld as a symbol of
                    mankind’s suffering through the images of famine
                    shown on television.’

                    </div>


                </div>
                </div>

                <Link to={`/videos/essay/blood-is-not-fresh-water`}>
                <div className="text-center hover:underline uppercase font-bold text-xl pb-10 cursor-pointer">
                        See also: BLOOD IS NOT FRESH WATER
                </div>
                </Link>
                </>
            )

        case "The Phi Phenomenon":

            return(
                <>
                
                    <div className="flex flex-col items-center justify-center pb-10">
                        <div className="flex-col ">
                            <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/phi/3.jpg"></img>
                            <div className="text-xs">Installation view;  <span  className="italic">L’Afrique et Les Religions de L’extase </span>, Musée d’ethnographie de Genève, 2019 
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex flex-col items-center justify-center pb-10">
                        <div className="flex-col ">
                            <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/phi/2.JPG"></img>
                            
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-col items-center justify-center pb-10">
                        <div className="flex-col ">
                            <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/phi/1.JPG"></img>
                            <div className="text-xs">Installation view;  <span  className="italic">And Berlin Will Always Need You</span>, Martin Gropius Bau, March - June, 2019  
                            </div>
                        </div>
                    </div>
                    
                </>
            )


        case "Atlas Fractured - Athens":
            return(
                <>
                <div className="flex justify-center py-10">
                <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/1.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start">
                        <img className="" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/2.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">documenta14, Athens Conservatoire (Odeon)</span>, Athens 2017</div>
                    </div>
                </div>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/3.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/4.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/5.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/6.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/7.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/8.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/9.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/10.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/11.png"></img>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/15.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">Montreal Museum of Fine Art</span></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_athens/16.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">Montreal Museum of Fine Art</span></div>
                    </div>
                </div>
                </>
            )
        case "Atlas Fractured - Kassel":

            return(
                <>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/2.png"></img>

                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/3.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/4.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/5.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/6.png"></img>
                
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/7.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">Documenta14</span>, Kassel, Germany 2017</div>
                    </div>
                </div>


                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/1.png"></img>
                
                <div>
                    <div className="flex justify-center pb-2">
                        <h1 className="text-2xl uppercase font-semibold">Atlas Radio </h1>
                    </div>
                    
                    <div className="flex justify-center">
                        <p className="text-lg max-w-sm text-center">During Documenta in Kassel the radio program Atlas Radio was made with the soundtrack redesigned by Keir Fraser.</p>
                    </div>
                    
                    <AudioPlayer />

       

                </div>

                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/8.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">Mask: The Art of Transformation</span>. Kunst museum, Bonn 2019</div>
                    </div>
                </div>

                </>
            )
        case "Till Death Us Do Part":
            return(
                <>

                    <div className="flex max-w-sm lg:max-w-3xl justify-center py-20">
                        <div>
                        <img className="" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/first.jpg"></img>
                        <div className="text-xs">
                        Installation View; MONITORS, Till Death Us Do Part, Galleria Massimo Riposati, February 1987, Rome, Italy
                        </div>
                        </div>
                    </div>
                    <div className="flex max-w-sm lg:max-w-3xl justify-center ">
                        <div>
                        <img className="" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/1.png"></img>
                        <div className="text-xs">
                        Installation view; <span className="italic">The Sum of all Parts</span>; Collections 70s - present. Nov. 14, 2020 - May 20, 2024, MoMA, The Museum of Modern Art, New York, USA
                        </div>
                        </div>
                    </div>
                        
                    <div className="flex justify-center py-20">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/3.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/2.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/4.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/5.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/6.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/7.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/8.png"></img>
                    </div>
                    <div className="flex max-w-sm lg:max-w-3xl justify-center pb-10">
                        <div>
                        <img className="" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tdudp/9.png"></img>
                        <div className="text-xs ">
                        Installation view; <span className="italic">The Sum of all Parts</span>; Collections 70s - present. Nov. 14, 2020 - May 20, 2024, MoMA, The Museum of Modern Art, New York, USA
                        </div>
                        </div>
                    </div>

                    <Link to={'/#publications'}>
                    <div className="text-center hover:underline uppercase font-bold text-xl pb-10 cursor-pointer">
                        See also publication:<br /> TILL DEATH US DO PART
                    </div>
                    </Link>

                </>
            )
        case "Roma":
            return(
                <>
                    <div className="flex justify-center py-20">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/1.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/2.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/3.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/4.png"></img>
                    </div>

                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/5.png"></img>
                    </div>

                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/6.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/7.png"></img>
                    </div>
                    
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/roma/8.png"></img>
                    </div>
                    
                </>
            )

        case "The Moving Museum - arrivals and departures":
            return(
                <>
                     <div className="flex justify-center pb-10">
                    <img className="lg:max-w-5xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/moving.png"></img>
                </div>

                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/3.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/5.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/4.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/6.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/6.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/7.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/8.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/5.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/9.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/moving/10.jpg"></img>
                </div>


                <div className="text-center uppercase hover:underline font-bold text-xl pb-10 cursor-pointer">
                <a href="http://drqlcggpj7pli.cloudfront.net/moving_museum_script.pdf">Read full script</a>
                </div>

                </>
            )
        case "Zar Possession":
            return(
                <>
                    <div className="flex justify-center pb-10">
                        <div>
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/1.jpg"></img>
                        
                        <span className="text-xs">Installation view; <span className="italic">Musée d’ethnographie de Genève, Geneva, Switzerland</span>, 2019 </span>
                        </div>
                    </div>

                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/2.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/3.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/4.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/5.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/6.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/zar/7.png"></img>
                    </div>

                </>
            )
        case "Kiss The Moment":
            return(
            <>
                    <div className="flex justify-center pb-10">
                        <div>
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/kiss/1.png"></img>

                        <div className="text-xs">Installation view; STAT/BILD. Xenopololis -  Deutsche Bank Kunsthalle, Berlin, Germany, 2015 
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-10">
                        <div>
                            <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/kiss/2.png"></img>
                            <div className="text-xs">Installation view; STAT/BILD. Xenopololis -  Deutsche Bank Kunsthalle, Berlin, Germany, 2015</div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/kiss/3.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/kiss/5.png"></img>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/kiss/4.png"></img>
                    </div>

            </>
                )
        case "Adieu Les Demoiselles":
            
            return(
                <>
                    <div className="flex justify-center ">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/adieu_install2.jpg"></img>
                    </div>
                    <div className="pb-10">
                        <span className="text-xs">Installation view; Courtesy The Contemporary Austin (photo by Colin Doyle)</span>
                    </div>
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/adieu_install.jpg"></img>
                    </div>
                    
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/adieu_install3.jpg"></img>
                    </div>
                    
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/adieu_install4.jpg"></img>
                    </div>

                    <Link to={`/photography/adieu`}>
                <div className="text-xl font-bold uppercase hover:underline text-center pb-10">
                        See also: ADIEU LES DEMOISELLES PHOTO SERIES
                </div>
                </Link>
                </>
            )
            
        case "Adieu Les Demoiselles Photo Series":
            const adieuImages3 = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2a.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2b.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2c.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2e.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2f.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2g.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2h.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2i.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2j.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2k.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2l.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/2m.png",
            ]

            const adieuImages4 = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_8.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_9.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_10.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_11.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_12.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_13.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_14.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_15.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/9_16.png",
            ]
            return(
                <>
                <div className="flex justify-center">
                <div className="max-w-4xl">
                             
                <div className="py-5">
                Through projections, a combination of African and modernist sources are layered onto live performers that re-enact the narratives from Picasso’s seminal Adieu Les Demoiselles. In this photo series, we say “adieu” to “Les Demoiselles”, and instead encounter performers for whom sexuality is both more nuanced and empowered than the prostitutes of Picasso’s demoiselles.
                </div>
                <div className="lg:flex justify-between pb-10">
                    <img className="lg:max-w-[27rem] pb-10 lg:pb-0" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/1a.png"></img>
                    <img className="lg:max-w-[27rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/1b.png"></img>
                </div>
                <div className="grid grid-cols-4 gap-1 pb-10">
                    {adieuImages3.map((imageUrl, index) => (
                        <ClickableImage key={index} imageUrl={imageUrl} carouselImg={adieuImages3} />
                    ))}
                </div>
                <div className="lg:flex justify-between pb-10">
                    <img className="lg:max-w-[27rem] pb-10 lg:pb-0" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/3a.png"></img>
                    <img className="lg:max-w-[27rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/3b.png"></img>
                </div>
                <div className="lg:flex justify-between pb-10">
                    <img className="lg:max-w-[27rem] pb-10 lg:pb-0" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/4a.png"></img>
                    <img className="lg:max-w-[27rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/4b.png"></img>
                </div>
                <div className="flex justify-center lg:pb-10 pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/5.png" className="lg:max-w-4xl"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/6.png" className="lg:max-w-4xl"></img>
                </div>
                <div className="lg:flex justify-between pb-10">
                    <img className="lg:max-w-[27rem] lg:pb-0 pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/7a.png"></img>
                    <img className="lg:max-w-[27rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/7b.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/8.png" className="lg:max-w-4xl"></img>
                </div>
                <div className="grid grid-cols-4 gap-2 pb-10">
                    {adieuImages4.map((imageUrl, index) => (
                        <ClickableImage key={index} imageUrl={imageUrl} carouselImg={adieuImages4} />
                    ))}
                </div>

                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/adieu/11.png"></img>
                </div>
                </div>
                </div>
       

                <Link to={`/videos/installations/adieu`}>
                <div className="text-center hover:underline uppercase font-bold text-xl pb-10 cursor-pointer">
                        See also: ADIEU LES DEMOISELLES INSTALLATION
                </div>
                </Link>
                </>
            )
        case "The Slave Ship":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <img className="max-w-sm" src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/1.png"></img>
                </div>
                <div className="pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/3.png"></img>
                    <div className="text-xs">Installation view; <span className="italic">Streamlines: Oceans Global Trade and Migration</span>, Deichtorhallen, Hamburg, 2016</div>

                </div>


                <div className="flex justify-center pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/2b.png"></img>
                </div>

                <div className="pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/4.jpg"></img>
                    <div className="text-xs">Installation view; solo show at Tiwani Contemporary, London, June - August 2017</div>
                </div>

                <div className="grid grid-cols-3 gap-3 pb-10">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/2a.png"></img>
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/2c.png"></img>
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/slave/2d.png"></img>
                </div>
                </>
            )
        case "Trip to Mount Zuqualla":
            return(
                <>
                <div className="flex justify-center max-w-sm lg:max-w-4xl pb-10">
                    <div>
                        <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/1.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">Still (the) Barbarians</span>, Biennale of Ireland, EVA International, 2016</div>
                    </div>
                </div>
                <div className="flex justify-center pb-16">
                    <div>
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/8.jpg" className=""></img>
                    </div>
                </div>
                <div className="flex justify-center pb-16">
                    <div>
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/new12.jpg" className=""></img>
                    </div>
                </div>
   
                <div className="flex justify-center pb-16">
                    <div>
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/2.png" className=""></img>
                    </div>
                </div>

                <div className="flex justify-center pb-16">
                <div>

                <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/9.jpg" className=""></img>
                </div>
                </div>
                <div className="flex justify-center max-w-sm lg:max-w-4xl pb-10">
                <div className=" ">
                    <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/10.jpg"></img>
                    <div className="text-xs">Installation view; Biennale of Ireland, Still (the) Barbarians, Courtesy EVA International (photo by Miriam O'Connor)</div>
                
                </div>
                
                </div>

            
                
                </>
            )
        case "Ways To a Void":
            return(
                <>
                <div className="pb-10"> 
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/waystoavoid/1.png"></img>
                </div>
                
                <div className="pb-10"> 
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/waystoavoid/4.png"></img>

                </div>
                <div className="pb-10"> 
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/waystoavoid/6.png"></img>
                </div>
                                
                <div className="pb-10"> 
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/waystoavoid/3.png"></img>
                </div>


                </>
            )
        case "Trip To Mount Zuqualla (Photo Series)":
            const imagesTrip = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/trance.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/climb.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/6a.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/tripto/6b.png"

            ]
            
                return(
                    <>

                    <div className="flex justify-center pb-10">
                        <div> 
                        <ClickableImage imageUrl={imagesTrip[0]} carouselImg={imagesTrip} imageStyling={"lg:max-w-3xl"} />
                            <div className="text-xs italic">Transe 70 x 70 cms</div>
                        </div>
                    </div>


                    <div className="flex justify-center pb-5">
                    <div>
                    <ClickableImage imageUrl={imagesTrip[1]} carouselImg={imagesTrip} imageStyling={""} />
                    <div className="italic text-xs">Procession, 230 x 35 cms. Hahnemühle Fine-art print</div>
                    </div>
                    </div>

                    <div className="flex justify-center pb-5">
                    <div>
                    <ClickableImage imageUrl={imagesTrip[2]} carouselImg={imagesTrip} imageStyling={""} />
                    <div className="italic text-xs">Procession, 230 x 35 cms. Hahnemühle Fine-art print</div>
                    </div>
                    </div>
                                 
                    <div className="flex justify-center pb-10">
                    <div className=" ">
                    <ClickableImage imageUrl={imagesTrip[3]} carouselImg={imagesTrip} imageStyling={""} />
                    <div className="italic text-xs">Wild Trees, 230 x 35 cms Hahnemühle Fine-art print</div>
                    </div>
                    </div>

                    <div className="flex justify-center pb-10">
                    <div className=" ">
                    <ClickableImage imageUrl={imagesTrip[4]} carouselImg={imagesTrip} imageStyling={"lg:max-w-3xl"} />
                    <div className="italic text-xs">Mount Zuqualla, 100 x 120. Hahnemühle Fine-art print</div>
                    </div>
                    </div>
       
    
                    <div className="flex justify-between pb-10  lg:px-[17rem]">
                    <div className="">
                        <div className="flex justify-center">
                        <ClickableImage imageUrl={imagesTrip[5]} carouselImg={imagesTrip} imageStyling={"max-w-[10rem] lg:max-w-[23rem]"} />

                        </div>
                        <div className="text-xs lg:text-base italic">Boy, 35 x 35 cms.
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-center">
                        <ClickableImage imageUrl={imagesTrip[6]} carouselImg={imagesTrip} imageStyling={"max-w-[10rem] lg:max-w-[23rem]"} />
                        </div>
                        <div>
                        <div className="text-xs lg:text-base italic">Girl, 35 x 35 cms</div>
                        </div>
                        </div>
    
                    </div>



                    </>
                )
        case "The Return of The Axum Obelisk":
            return(
                <>
                <div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start max-w-full">
                    <img className="max-w-full" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/Axum_Met.jpg"></img>
                        <div className="text-xs">Installation view;<span className="italic"> Africa and Byzantium</span>, the Metropolitan Museum of Art, (The Met), New York, USA, November 19, 2023 – March 3, 2024 </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start max-w-full">
                    <img className="max-w-full" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/1.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">DAAD Gallery</span>, Berlin, Germany, February March 2014 </div>
                    </div>
                </div>
                <div className="flex justify-center pb-10">
                <img className="max-w-full" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/2.png"></img>
                </div>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/3.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/4.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/7.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/12.png"></img>
                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/9.png"></img>

                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/5.png"></img>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start max-w-full">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/13.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">DAAD Gallery</span>, Berlin, Germany. February March 2014</div>
                    </div>
                </div>
                <div className="flex flex-col  pb-10">

                <img className="" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/axum2.jpg"></img>
                <div className="text-xs">Installation view; <span className="italic">DAAD Gallery</span>, Berlin, Germany. February March 2014</div>
                </div>

                <img className="pb-10" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum/axum.jpg"></img>


                
                </div>
                </>
            )
        case "The Phi Phenomenon":
            return(
                <>
                <div className="flex justify-center pb-10">
                </div>
                </>
            )
        case "Ghost Dance":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-xl " src="http://drqlcggpj7pli.cloudfront.net/images/articles/ghost/1.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-xl " src="http://drqlcggpj7pli.cloudfront.net/images/articles/ghost/2.jpg"></img>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start lg:max-w-xl">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/ghost/3.jpg"></img>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start lg:max-w-xl">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/ghost/4.jpg"></img>
                        <div className="text-xs">Installation view; <span className="italic">Gwangju Biennale</span>, 2021</div>
                    </div>
                </div>
                </>
            )

        case "Brave New World":
            return(
            <>
            
                <div className="flex justify-center ">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/brave/5.jpeg"></img>
                </div>
                <div className="pb-10">
                    <span className="text-xs">Installation view; <span className="italic">MACRO (Museo d’arte Contemporanea Roma)</span>, Lavori in Corso, Rome 1999- 2000.</span>
                </div>
                <div className="flex justify-center pb-10 ">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/brave/6.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/brave/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/brave/2.png"></img>
                </div>
                <div className="flex justify-center">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/brave/3_reduced.jpg"></img>
                </div>
                <div className="pb-10">
                    <span className="text-xs"><span className="italic">Senses of Time</span>, National Museum of African Art, Smithsonian Institute and Los Angeles County Museum of Art (LACMA), USA (photo by Franko Khoury)</span>
                </div>
            </>
            )
        case "Anima Mundi":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <div>
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/3.png"></img>
                    <span className="text-xs">Installation view; <span className="italic">Whorled Explorations</span>, Kochi-Muziris Biennale India, 2014</span>
                    </div>
                </div>
                <div className="flex lg:max-w-lg  space-x-1 pb-10 ">
                    <img className="max-w-[12rem] lg:max-w-sm" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/7.png"></img>

                    <img className="max-w-[12rem] lg:max-w-sm" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/4_reduced.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/2.jpg"></img>
                </div>

                
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/6.png"></img>
                </div>

                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/9.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/anima/8.png"></img>
                </div>
                <Link to={`/videos/installations/brave-new-world`}>
                <div className="text-xl font-bold hover:underline text-center pb-10">SEE ALSO: Brave New World</div>
                </Link>
                </>
            )
        case "Meditation Light":
            return(
                <>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/2.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-[54rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/2.png"></img>
                </div>

                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/3.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/4.png"></img>
                </div>
                
           
                
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/16.png"></img>
                </div>
                
                <div className="flex justify-center ">
                <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/meditation/10.jpg"></img>
                </div>
                <div className="pb-10 pl-12">
                    <span className="text-xs">Installation view; Tiwani Contemporary, London, UK, 2015</span>
                </div>
                </>
            )
        case "Veiled Woman on a Beachfront":
            return(
                <>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start lg:max-w-xl">
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/veiled/3.png"></img>
                        <div className="text-xs">Presented as a double projection at the <span className="italic"> 54th Biennale of Venice</span>, Italian Pavilion, Arsenale, Venice, 2011</div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start lg:max-w-xl">
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/veiled/1.png"></img>
                        <div className="text-xs">Installation view; <span className="italic">You Are Here - Light, Colour and Sound</span>, North Carolina Museum of Art, Raleigh, USA, 2018</div>
                    </div>
                </div>
                
                <div className="flex justify-center pb-10">
                <img className="lg:max-w-xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/veiled/4.jpg"></img>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <div className="flex flex-col items-start max-w-xl">
                        <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/veiled/5.png"></img>
                    <div className="text-xs">Installation view; <span className="italic">Video Portraits</span>, Total Museum, Korea, August - October 2017</div>
                    </div>
                </div>
                <div>
                </div>
                <Link to={'/videos/installations/lamu-project'}>
                <div className="pb-10 cursor-pointer text-center hover:underline font-bold text-lg">SEE ALSO: THE LAMU PROJECT</div>
                </Link>
                </>
            )
        case "The Festival of Sacrifice":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <div>
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/sacrifice/3.png"></img>
                    <div className="text-xs">
                    Installation view; <span className="italic">L’Afrique et Les Religions de L’extase</span>, Musée d’ethnographie de Genève, 2019

                </div>
                </div>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/sacrifice/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/sacrifice/2.jpeg"></img>
                </div>


                <div className="flex justify-center pb-10">
                    <div>
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/sacrifice/4.jpg"></img>
                    <div className="text-xs">
                DAAD Gallery, solo show, Berlin, 2013
                </div>
                </div>
                </div>

                <Link to={'/videos/installations/lamu-project'}>
                
                <div className="pb-10 cursor-pointer text-center hover:underline font-bold text-lg">SEE ALSO: THE LAMU PROJECT</div>
                </Link>
                </>
            )

        case "Horses":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/horses/2.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/horses/3.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/horses/4.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/horses/5.jpg"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/horses/6.jpg"></img>
                </div>
                </>
            )
        case "The Lamu Project":
            return(
                <>
                <p className="pb-10">The Lamu project is a series of six video installations which can be presented simultaneously within the same exhibition space. Each one is a tableau, or self-standing work that shows an aspect of life on the islamic island of Lamu, but when viewed together, they form a complex non-linear narrative thats generated through their interaction. Exploring themes associated with the Lamu’s Islamic background and it's values  as a metaphor for creating artworks, on the theme of seeing and not seeing. These installations incorporate influence from  diverse range of modernist artists, which are translated as installation experiences. The full project includes a photographic installation and a sound sculpture.</p>
                
                <div className="pb-10 ">
                <h1 className="text-lg font-thin pb-2 uppercase text-center">Veiled Women on a Beachfront</h1>
                <div className="flex justify-center pb-5">
                <img className="max-w-[10rem]" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/veiled.png"></img>

                </div>    

                <p className="font-thin text-sm">“Veiled Woman on a Beachfront” is the first of a series of video installations that look at the world of Islam to explore themes of visibility and the implications of what we see, liberated from a cultural divide. A project that looks at the visible signs of differences to seek the underlying links between cultures. In the video, the image of a fully veiled woman is mirrored to create an abstract figure which as a Rorschach ink pattern opens to numerous interpretations. The person is revealed through the negation of the sight of them. Motion is reduced to her natural unsolicited gestures and the veil blowing in the wind. Ultimately it could be said that the main subject is the wind itself and the shapes and patterns created by this invisible force on the figure.
                </p>
                
                </div>

                <Link to={`/videos/installations/festival-of-sacrifice`}>
                <div className="pb-10 ">
                <h1 className="text-lg font-thin py-4 uppercase text-center">The Festival of Sacrifice</h1>

                <div className="flex justify-center pb-5">

                <img className="lg:max-w-xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/sacrifice.png"></img>

                </div>    
                <p className="font-thin text-sm">Shot during the festivities of Eid al-Adha, the installation explores through patterns and mirroring techniques the spiritual significance of the event.</p>
                
                </div>
                </Link>


                <div className="pb-10">
                    <h1 className="text-lg font-thin pb-2 text-center">VIEW FROM BAR OLYMPIA</h1>
                    <div className="flex justify-center pb-5">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/bar.png"></img>
                    </div>
                    <p className="font-thin text-sm">This apparently simple installation for two monitor shows the view on the seafront
                    as seen from within a local bar. The realism of
                    the image is subverted by a complex editing where the spontaneous movements
                    of people assume an unreal and unnatural quality. The images recorded over the
                    course of several hours, have been edited assembling fragments taken at
                    different times of the day.</p>

                </div>
                <div className="pb-10">
                <h1 className="text-lg font-thin pb-2 text-center uppercase">Seascape</h1>

                <div className="flex justify-center pb-5">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/seascape.png"></img>
                    </div>                    
                    <p className="font-thin text-sm">Seascape is an installation for four monitors. It shows the coast line of Lamu and
                the shifting colours of light during the course of the day.</p>

                </div>

                <div className="pb-10 ">
                <h1 className="text-lg font-thin pb-2 text-center uppercase">Cats</h1>

                <div className="flex justify-center pb-5">
                <img className="lg:max-w-xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/cats.png"></img>

                </div>    
                <p className="font-thin text-sm">Cats, shown for their contrasting and multiple symbolic significance in both
                Christianity and Islam, is an installation for two monitors. In Muslim lore, the cat
                is honored for saving Mohammad from an attack by a snake. Here it is
                believed the “M” marking on the forehead of many cats is the mark of the
                prophet.</p>
                
                </div>

                <div className="pb-10 ">
                <h1 className="text-lg font-thin pb-2 text-center uppercase">SILHOUETTES AND SHADOWS</h1>

                <div className="flex justify-center pb-5">
                <img className="lg:max-w-xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/sillouettes.png"></img>

                </div>    
                <p className="font-thin text-sm">This installations shows a single mirrored image of figures walking in the
streets and alleys of Lamu project on a semi transparent fabric. The images
focus on figures that create silhouettes and shadows and this is further
emphasized by the low position of the projectors and the lights that force the
viewers to create their own silhouettes and shadows on the transparent
screen as they walk through the exhibition space.
There is an interaction that we don't see in these illustrations between the
figures in the video and the partially lit viewers in the gallery space.</p>
                
                </div>


                    <div className="flex justify-center pt-20 pb-5">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/lamu/end.png"></img>
                    </div>
                    <div className="pb-10 lg:pl-16 font-thin text-xs">
Burqa, 110 x 110 cms </div>

                {/* Video - View from Bar Olympia */}
                {/* Video - Cats */}
                {/* Other Projects in this series -> link to veiled woman -> link sacrifice */}
                </>
            )
        case "Travelling Light":
            return(
                
                <>
                <div className="flex justify-center pt-20">
                    <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/travelling/travellinglightcover.jpg"></img>
                </div>
                <div className="flex justify-center py-20">
                    <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/travelling/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/travelling/2.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/travelling/3.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <div>
                    <img className="max-w-sm lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/travelling/4.png"></img>
                    <span className="text-xs">Lindsay Kemp and Theo Eshetu on the set of Travelling Light </span>

                    </div>
                </div>

                </>
            )
        case "Blood Is Not Fresh Water":
            return(
                <>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/blood/1.png"></img>
                </div>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/blood/2.png"></img>
                </div>
                <Link to={`/photography/blood`}>
                <div className="text-center uppercase font-bold text-xl hover:underline pb-10 cursor-pointer">
                        See also: BLOOD PHOTO SERIES
                </div>
                </Link>
                </>
            )
        {/* PHOTOGRAPHY */}
        case "The Mystery of History and His Story in My Story":

            const imagesMystery = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/8.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/9.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/7.jpeg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/8.jpeg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/5a.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/5b.png",
            ]
            
            return(
                <>
                <div className="flex  pt-5 lg:pt-0 pb-12 justify-center">
                    <div className="">
                    <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/6.png" className="lg:max-w-6xl"></img>
                    <p className="pt-4 text-xl italic">The Mystery of History and His Story in My Story</p>
                    <p className=" text-sm">2015</p>
                    <p className=" text-sm">Commissioned by the Gothenburg Biennale</p>
                    <p className="text-sm max-w-sm lg:max-w-6xl">The project’s point of departure is the presidential photo archive of former Yugoslav leader Josip Broz Tito in the Museum of Yugoslav History. The artist delved into the extensive photo and film archive in search of oblique traces of biography, tangential associative thoughts, fragments of forgotten memories, and unwritten personal histories.</p>
                    </div>
                </div> 
                
                <div className="flex justify-center pb-10">
                    <div>
                    <img className="lg:max-w-6xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/mystery/new/end.png"></img>
                    <span className="text-xs italic">Installation view; A Story Within A Story, Gothenburg, Sweden, 2015 </span>
                    </div>
                </div>

                <div className="flex justify-center pb-10">
                    <div className="max-w-">
                        <ClickableImage imageUrl={imagesMystery[0]} carouselImg={imagesMystery} imageStyling={"lg:max-w-5xl"} />
                    </div>
                </div>
                <div className="flex justify-center pb-10">
                    <div>
                    <ClickableImage imageUrl={imagesMystery[1]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                    </div>
                </div>



                <div className="flex justify-center pb-10">
                    <div>
                    <ClickableImage imageUrl={imagesMystery[2]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                    </div>
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[3]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

  
                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[4]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[5]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[6]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[7]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[8]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>


                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[9]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>

                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesMystery[10]} carouselImg={imagesMystery} imageStyling={"lg:max-w-lg"} />
                </div>


                <div className="flex justify-between pb-10 gap-2 lg:mx-44">
                    <div>
                    <ClickableImage imageUrl={imagesMystery[11]} carouselImg={imagesMystery}  />
                        <p className="italic text-xs">Bomb Composition 1</p>
                    </div>
                    <div>
                    <ClickableImage imageUrl={imagesMystery[12]} carouselImg={imagesMystery}  />
                        <p className="italic text-xs">Bomb Composition 2</p>
                    </div>
                </div>



                </>
            )
        case "Atlas Portraits":

            const imagesAtlas = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_8.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_9.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_10.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_11.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_12.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_13.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_14.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_15.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/6_16.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/8.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/9.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/10.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/11.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/12a.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/12b.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/13a.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/13b.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/14.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/3a.png",
            ]


            return (
                <>
                    <div className="lg:px-64 pt-10">
                        <div className="pb-10 ">
                            <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/atlas_portraits/1.png" className="" alt="Atlas Portraits" />
                            <span className="text-xs italic">Installation view; Theo Eshetu: Atlas Portraits, 2020, Tiwani Contemporary, London, UK</span>
                            <h1 className="text-2xl pt-4 font-bold">Atlas Portraits</h1>
                            <div>
                            Photographs and compositions using projections of statues, masks and artworks onto faces.
                            </div>
                        </div>

                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[0]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-3xl"} />
                                <p className="text-xs italic">Atlas Fractured V2, 100 x 120 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[1]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-xl"} />
                                <p className="text-xs italic">Judi Nomad, 120 x 100 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[2]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-xl"} />
                                <p className="text-xs italic">Death, 160 x 100 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                            <div className="grid grid-cols-4 gap-4 lg:max-w-3xl">
                                {imagesAtlas.slice(3, 19).map((imageUrl, index) => (
                                    <ClickableImage key={index} imageUrl={imageUrl} carouselImg={imagesAtlas} imageStyling={null} />
                                ))}
                            </div>
                                <p className="text-xs italic">Composition 16 x 50 x 50 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[19]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-3xl"} />
                                <p className="text-xs italic">Self on Self, 50 x 100 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[20]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-md"} />
                                <p className="text-xs italic">Hot Ass, 50 x 50 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[21]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-md"} />
                                <p className="text-xs italic">Death Mask, 50 x 50 cms</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-5">
                            <ClickableImage imageUrl={imagesAtlas[22]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-2xl"} />
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[23]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-2xl"} />
                                <p className="text-xs italic">Double Alchemy, 2 x 100 x 100 cms.</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                            <div className="grid grid-cols-2 gap-4 lg:max-w-3xl">
                                <ClickableImage imageUrl={imagesAtlas[24]} carouselImg={imagesAtlas} imageStyling={null} />
                                <ClickableImage imageUrl={imagesAtlas[25]} carouselImg={imagesAtlas} imageStyling={null} />

                            </div>
                            <p className="text-xs italic">The Brothers, 2 x 75 x 75 cms.
                            </p>

                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <div className="grid grid-cols-2 gap-4 lg:max-w-2xl">
                                    <ClickableImage imageUrl={imagesAtlas[26]} carouselImg={imagesAtlas} imageStyling={null} />
                                    <ClickableImage imageUrl={imagesAtlas[27]} carouselImg={imagesAtlas} imageStyling={null} />
                                </div>

                                <p className="text-xs italic">Double Bowie, 2 x 50 x 50 cms.</p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[28]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-xl"} />
                                <p className="text-xs italic">Madonna Elena, 50 x 50 cms
                                </p>
                            </div>
                        </div>
            
                        <div className="flex justify-center pb-10">
                            <div>
                                <ClickableImage imageUrl={imagesAtlas[29]} carouselImg={imagesAtlas} imageStyling={"lg:max-w-xl"} />
                                <p className="text-xs italic">Nefertiti, 100 x 100 cms
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            );
        case "Mirror Ball Constellation":
 
            const imagesDisco = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/2_6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/disco/3.png"
            ];

            return (
                <>
                    <div className="flex justify-center pt-10 lg:pt-0 pb-10">
                        <div>
                                <ClickableImage imageUrl={imagesDisco[0]} carouselImg={imagesDisco} imageStyling={"lg:max-w-2xl"} />
                            <div className="max-w-xl">
                            <p className="font-bold text-2xl pt-6">Mirror Ball Constellation</p>
                            <div>
                            Images created to accompany the installation of a Mirror Ball in the Polynesian Boats room at the Ethnographic Museum in Dahlem, Berlin
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pb-10">
                        <div>
                        <div className="grid grid-cols-3 gap-4 lg:max-w-2xl">
                            {imagesDisco.slice(1, 7).map((imageUrl, index) => (
                                <ClickableImage key={index} imageUrl={imageUrl} carouselImg={imagesDisco} imageStyling={null} />
                            ))}
                        </div>
                        <div className="text-xs">
                        Disco Africa, 100 x 100 cms. 
                        </div>
                        </div>
                    </div>

                    <div className="flex justify-center pb-10">
                        <div>
                        <ClickableImage imageUrl={imagesDisco[7]} carouselImg={imagesDisco} imageStyling={"lg:max-w-2xl"} />
                        <div className="text-xs">Installation view; Humboldt Lab, the Polynesian boats room at the Ethnographic Museum in Dahlem, Berlin, Germany, 2012
                        </div>
                        </div>
                    </div>
                </>
            );
       case "Masked Self-Portraits":
            const imagesMasked = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/2_8.png"
            ]

            return(
                <>
                <div className="flex justify-center pt-10 lg:pt-0 pb-10">
                    <div>
                        <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/1.png"></img>
                        <p className="font-bold  text-2xl pt-5">Masked Self Portraits</p>
                        <div>
                        An ongoing series of self-portraits in which masks and statue and photographs of other people are projected
                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-center pb-10">
                <div className="grid grid-cols-4 gap-4 lg:max-w-4xl">
                {imagesMasked.map((imageUrl, index) => (
                        <ClickableImage key={index} imageUrl={imageUrl} carouselImg={imagesMasked} imageStyling={null} />
                ))}
                </div>
                </div>

                <div className="flex justify-center pb-10">
                    <div>
                    <img className="lg:max-w-4xl" src= "http://drqlcggpj7pli.cloudfront.net/images/articles/maskedself/3.jpg"></img>
                    <div className="text-sm">
                    Brave New World Self-Portrait
                    </div>
                    </div>
                </div>
                </>
            )
        case "Scratch Christ":

            const imagesChrist = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/scratch/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/scratch/2_1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/scratch/2_3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/scratch/2_4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/scratch/2_2.png",
            ]

            return(
                <>
                <div className="flex justify-center pt-10 lg:pt-0 pb-10">
                    <div>
                        <ClickableImage imageUrl={imagesChrist[0]} carouselImg={imagesChrist} imageStyling={"lg:max-w-4xl"}/>
                        <p className="italic text-xs">Scratch Christ after The Transfiguration by Raphael</p>
                    </div>
                </div>
                <div className="flex max-w-4xl justify-center">
                <div className=" ">
                <div className=" w-full font-bold max-w-4xl text-left text-2xl">
                    Scratch Christ
                </div>
                
                <div className="w-full pb-10 max-w-4xl text-left">
                A selection of images with manual interventions applied onto slides collected from Museums.
                </div>
                </div>
                </div>


                <div className="flex justify-center pb-10">
                    <div className="grid grid-cols-2 gap-4 lg:gap-32 max-w-4xl">
                    <div>
                        <ClickableImage imageUrl={imagesChrist[1]} carouselImg={imagesChrist}/>
                        <p className="italic text-xs">Scratch Christ after The Baptism of Christ by Titian</p>
                    </div>
                    <div>
                        <ClickableImage imageUrl={imagesChrist[2]} carouselImg={imagesChrist}/>
                        <p className="italic text-xs">Scratch Christ after Christ Carrying the Cross by Bellini</p>
                    </div>
                    <div>
                        <ClickableImage imageUrl={imagesChrist[3]} carouselImg={imagesChrist}/>
                        <p className="italic text-xs">Scratch Christ, after The Deposition, by Raphael</p>
                    </div>
                    <div>
                        <ClickableImage imageUrl={imagesChrist[4]} carouselImg={imagesChrist}/>
                        <p className="italic text-xs">Scratch Christ after The Entombment by Caravaggio</p>
                    </div>

                    </div>
                </div>
                </>
            )


        case "Crocodile on a Ceiling":

        return(
            <>
                <div className="flex justify-center pb-10">
                    <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/crocodiles/croc5.jpg"></img>
                </div>

            
                    <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/crocodiles/croc2.jpg"></img>
                    </div>
                    
                <div className="flex justify-center pb-10">
                        <img className="lg:max-w-3xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/crocodiles/croc4.jpg"></img>
                    </div>

                               
                <div className="flex justify-center">
                        <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/crocodiles/croc1.jpg"></img>
                    </div>         
                    <span className="w-full text-xs">Installation view;<span className="italic">EXPOSURE MUDEC</span>, Museo delle Culture di Milano, Milan, Italy,
 March - September, 2024 (Photo by Alessandro Saletta)
</span>
            </>
        )
        
        case "Early Stills":

            const imagesEarly = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/4.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/5.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/6.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/7.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/8.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/ms1.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/ms2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/ms3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/ms4.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/early/ms5.jpg",
            ]

            return(
                <>
                
                <div className="mt-20  w-full font-bold max-w-3xl text-left text-2xl">
                    1975 - 1982
                </div>
                <div className="flex justify-center pt-10 pb-10">
                    <div>
                        <ClickableImage imageUrl={imagesEarly[0]} carouselImg={imagesEarly} imageStyling={"max-w-[22rem] lg:max-w-md"} />
                    </div>
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[1]} carouselImg={imagesEarly} imageStyling={"lg:max-w-2xl"} />
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[2]} carouselImg={imagesEarly} imageStyling={"lg:max-w-4xl"} />
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[3]} carouselImg={imagesEarly} imageStyling={"lg:max-w-md"} />
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[4]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[5]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>
                
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[6]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>
                
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[7]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>

                <div className="mt-20  w-full font-bold max-w-3xl text-left text-2xl">
                    Musicians
                </div>
                
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[8]} carouselImg={imagesEarly} imageStyling={"lg:max-w-md"} />
                </div>
                
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[9]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>

                
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[10]} carouselImg={imagesEarly} imageStyling={"lg:max-w-xl"} />
                </div>

                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[11]} carouselImg={imagesEarly} imageStyling={"lg:max-w-md"} />
                </div>
                <div className="flex justify-center pb-10">
                    <ClickableImage imageUrl={imagesEarly[12]} carouselImg={imagesEarly} imageStyling={"lg:max-w-md"} />
                </div>
                </>
            )
        case "Around Axum":

            const imagesAxum = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/5.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/6.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/7.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/8.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/9.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/10.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/ax11.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/12.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/13.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/14.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/15.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/16.png",
            ]

            return(
            <>
            <div>
            <div className="flex justify-center ">
                <div className="lg:max-w-4xl">
                
                <img src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/axum_main.png" />
                <div className="mt-6 w-full font-bold max-w-3xl text-left text-2xl">
                    Around Axum
            </div>
            
            <div className="w-full pb-10 max-w-4xl text-left">
            A photographic series documenting incidental events in Axum shot on the work-site during the historical event of the remounting of a looted stelae returned to Ethiopia from Rome.
            </div>
                </div>

            </div>
            </div>
            <div className="flex justify-center">
            <div className="pt-10">
                    <div className="grid grid-cols-4 gap-4 max-w-4xl ">
                        {imagesAxum.map((imageUrl, index) => (
                            <ClickableImage key={index} imageUrl={imageUrl} carouselImg={imagesAxum} />

                        ))}

                    </div>
            <div>

                
            </div>

            <div className="flex justify-center pt-20">
                
            <img className="lg:max-w-4xl" src="http://drqlcggpj7pli.cloudfront.net/images/articles/axum_photo/ax18.png" />
            </div>
            </div>
            </div>
            
            </>
            )
        case "Mass Memory":
            const imagesMass = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/massmemory/1.png"
            ]
        return(
            <ClickableImage imageUrl={imagesMass[0]} carouselImg={imagesMass} />
        )

        case "Nativity":
            const imagesNativity = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/nativity/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/nativity/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/nativity/3.png"
            ]
        return(
            <>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesNativity[0]} carouselImg={imagesNativity} />
            </div>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesNativity[1]} carouselImg={imagesNativity} />
            </div>
            <ClickableImage imageUrl={imagesNativity[2]} carouselImg={imagesNativity} />
        
            </>
            )
        case "L´Altro Mondo":
            const imagesLatro = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/latro/1.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/latro/2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/latro/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/latro/4.jpg",

            ]
            
            return(
                <>
                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesLatro[0]} carouselImg={imagesLatro} />
                </div>
                
                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesLatro[1]} carouselImg={imagesLatro} />
                </div>
                
                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesLatro[2]} carouselImg={imagesLatro} />
                </div>
                
                <div className="flex justify-center pb-10">
                <ClickableImage imageUrl={imagesLatro[3]} carouselImg={imagesLatro} />
                </div>
                </>
            )
        case "K-Kino":
            const imagesKKino = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/1.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/4.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/5.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/kkino/6.jpg",
            ]
        return(
            <>
            <div className="flex justify-center pb-10">
            <div>
            <ClickableImage imageUrl={imagesKKino[0]} carouselImg={imagesKKino} />
            <span className="text-xs italic">Installation view; Castello Brancaccio, 2007</span>
            </div>
            </div>
            
            <div className="flex justify-center pb-10">
            <ClickableImage imageUrl={imagesKKino[1]} carouselImg={imagesKKino} />
            </div>
            
            <div className="flex justify-center pb-10">
            <ClickableImage imageUrl={imagesKKino[2]} carouselImg={imagesKKino} />
            </div>
            
            <div className="flex justify-center pb-10">
            <ClickableImage imageUrl={imagesKKino[3]} carouselImg={imagesKKino} />
            </div>
            
            <div className="flex justify-center pb-10">
            <ClickableImage imageUrl={imagesKKino[4]} carouselImg={imagesKKino} />
            </div>
            
            <div className="flex justify-center pb-10">
            <ClickableImage imageUrl={imagesKKino[5]} carouselImg={imagesKKino} />
            </div>

            
            
            </>
        )

        case "Art Is Easy":
            const imagesArt = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/artiseasy/1.jpg"
            ]
        return(
            <ClickableImage imageUrl={imagesArt[0]} carouselImg={imagesArt} />
        )

        case "La Madonna di Theo Eshetu":
            const imagesMadonna = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/lamadonna/1.JPG",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/lamadonna/2.JPG",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/lamadonna/new1.JPG",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/lamadonna/new2.JPG",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/lamadonna/new3.jpg"
            ]
        return(
            <>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesMadonna[0]} carouselImg={imagesMadonna} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesMadonna[1]} carouselImg={imagesMadonna} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesMadonna[2]} carouselImg={imagesMadonna} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesMadonna[3]} carouselImg={imagesMadonna} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesMadonna[4]} carouselImg={imagesMadonna} />
            </div>
            </>
        )

        case "Questa é Vita":
            const imagesQuesta = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/questa/5.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/questa/2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/questa/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/questa/4.jpg"

            ]
        return(
            <>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesQuesta[0]} carouselImg={imagesQuesta} />
            </div>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesQuesta[1]} carouselImg={imagesQuesta} />
            </div>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesQuesta[2]} carouselImg={imagesQuesta} />
            </div>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesQuesta[3]} carouselImg={imagesQuesta} />
            </div>
            
        
            </>
        )   

        case "Body and Soul V3":
            const imagesBody = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/bodyandsoul/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/bodyandsoul/2.jpg",
            ]
        return(
            <>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesBody[0]} carouselImg={imagesBody} />
            </div>
            <ClickableImage imageUrl={imagesBody[1]} carouselImg={imagesBody} />
            </>
        )

        case "The Atom Bomb":
            const imagesAtom = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atombomb/1.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atombomb/2.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atombomb/3.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atombomb/4.png",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/atombomb/5.png"
            ]
        return(
            <>
            <div className="pb-10">
            <ClickableImage imageUrl={imagesAtom[0]} carouselImg={imagesAtom} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesAtom[1]} carouselImg={imagesAtom} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesAtom[2]} carouselImg={imagesAtom} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesAtom[3]} carouselImg={imagesAtom} />
            </div>
            
            <div className="pb-10">
            <ClickableImage imageUrl={imagesAtom[4]} carouselImg={imagesAtom} />
            </div>
            </>
        )

        case "Africanized":
            const imagesAfri = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/africanized/1.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/africanized/2.jpg",
            ]
        return(
            <>
            <div className="pb-10 flex items-center justify-center">
            <ClickableImage imageUrl={imagesAfri[0]} carouselImg={imagesAfri} />
            </div>
            <ClickableImage imageUrl={imagesAfri[1]} carouselImg={imagesAfri} />
            </>
        )

        case "Dead Boys in Paradise":
            const imagesParadise = [
                "http://drqlcggpj7pli.cloudfront.net/images/articles/paradise/3.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/paradise/2.jpg",
                "http://drqlcggpj7pli.cloudfront.net/images/articles/paradise/1.jpg",

            ]
            return(
                <>
                <div className="pb-10 flex items-center justify-center">
                    <ClickableImage imageUrl={imagesParadise[0]} carouselImg={imagesParadise} />
                </div> 
                <div className="pb-10 flex items-center justify-center">
                    <ClickableImage imageUrl={imagesParadise[1]} carouselImg={imagesParadise} />
                </div> 
                <div className="pb-10 flex items-center justify-center">
                    <ClickableImage imageUrl={imagesParadise[2]} carouselImg={imagesParadise} />
                </div>    
                </>
            )

        default:

    }
}

export default Articles;