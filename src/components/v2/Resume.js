import { useEffect, useRef, useState } from "react"
import resumeData from "../../data/resumeData";
import collectionData from "../../data/collectionData";
import videoinstallationData from "../../data/videoinstallationData";
import interviewData from "../../data/interviewData";
import groupData from "../../data/groupData";
import prizeData from "../../data/prizeData";

import Sticky from "react-stickynode";

const Resume = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(null);


    let data = [];
    let data2 = [];



    const categoryDataTitles = [
        {name: "Exhibitions", dataTitle: "Solo Shows and Featured Presentations", data2Title: "Group Shows, Video and Film Festivals", image: "http://drqlcggpj7pli.cloudfront.net/images/resume/1.png", class: "max-w-[26rem] "},
        {name: "Collection & Awards", dataTitle: "Works In Collections", data2Title: "Awards", image :"http://drqlcggpj7pli.cloudfront.net/images/resume/collection.png", class: "max-w-[23rem]"},
        {name: "Complete Videography", dataTitle: "", image: "http://drqlcggpj7pli.cloudfront.net/images/resume/completevideo.jpg", class: "max-w-xs "},
        {name: "Interviews & Essays", dataTitle: "", image: "http://drqlcggpj7pli.cloudfront.net/images/resume/interviews.jpg", class: "max-w-[26rem]"},
    ]


    switch(expandedCategory) {
        case "Exhibitions":
            data = resumeData;
            data2 = groupData;
        break;

        case "Collection & Awards":
            data = collectionData;
            data2 = prizeData;

        break;

        case "Complete Videography":
            data = videoinstallationData;
        break;

        case "Interviews & Essays":
            data = interviewData;
        break;

        default:
        break;
    }

    const categorySectionRef = useRef(null);

    const resumeOverviewRef = useRef(null);

    const openCategory = (category) => {
        if(isExpanded) {
            setExpandedCategory(category);
            setIsExpanded(true);
            categorySectionRef.current.scrollIntoView({behavior: "smooth"})

        } else {
            setExpandedCategory(category);
            setIsExpanded(true);
            categorySectionRef.current.scrollIntoView({behavior: "smooth"})

        }
    }

    const closeCategory = () => {
        if (isExpanded) {

            resumeOverviewRef.current.scrollIntoView({behavior: "smooth"})
            
            setTimeout(() => {
                setExpandedCategory(null);
                setIsExpanded(false)      
            }, 500);

            
        }  else {
            resumeOverviewRef.current.scrollIntoView({behavior: "smooth"})

            return;
        }
    }

    function bundleData(data) {
        const bundledData = data.reduce((acc, curr) => {
          const existingDate = acc.find(item => item.date === curr.date);
          if (existingDate) {
              existingDate.entries.push(curr);
          } else {
              acc.push({ date: curr.date, entries: [curr] });
          }
          return acc;
        }, []);      
  
        return bundledData;
    }

    const bundledData = bundleData(data); 
    const bundledData2 = bundleData(data2); 

    bundledData.sort((a, b) => b.date - a.date);
    bundledData2.sort((a, b) => b.date - a.date);

    return(
        <>
        <div  ref={resumeOverviewRef} className='flex  w-full bg-black pt-20 text-[#fff7c9] justify-center items-center'>
            <span className='theo-title  text-center  justify-center text-4xl  cursor-default  uppercase'>CV</span>
        </div>
        <div className="px-12 block sm:px-8 md:px-16 2xl:px-32 lg:px-72    w-full      justify-between pb-56">
        <div className="font-semibold pt-20 lg:text-xl 2xl:text-3xl uppercase pb-4">Theo Eshetu</div>
            <div className="">
                <div className="flex justify-between text-lg xl:text-xl">
                    <div className="max-w-5xl">
                        <div className="pb-4">
                        Throughout his prolific oeuvre, Theo Eshetu has touched on themes taken from anthropology, art history, scientific research, and religious iconography to create a distinctive body of works based on a syncopated rhythmic montage of sounds and images. His works move freely from large-scale video installations to essay-like films that question the very reality of what images can reveal. 
                        </div>
                        <div className='pb-4'>
                        Born in London to Ethiopian and Dutch parents and raised in Rome, his multi-national background speaks to the complexity of identity in an increasingly globalized world. World cultures, in particular the relationship between Africa and Europe, inform his work through images of a collective unconscious, to comment on how electronic media has shaped and formed our perception of the world.
                        </div>
                        <div className='pb-4'>
                        In 2012 he was a guest artist at the DAAD in Berlin and participated in documenta14 as well as touring exhibitions such as Snap Judgements, Senses of Time, and The Tropics. His works are in the collections of the Smithsonian Institute, MoMA, Tate Britain, the MET, and the Museo delle Civiltà among others.                        </div>

                        <div className='pb-4 '>
                        Theo Eshetu works between Rome and Berlin.
                        </div>

                    </div>
                    <div className="sm:block hidden lg:pl-0 pl-20 justify-end">
                        <video playsInline src='http://drqlcggpj7pli.cloudfront.net/theo.mp4' autoPlay loop muted disablePictureInPicture className='sm:block hidden max-w-[12rem] 2xl:max-w-[15rem] border-yellow-200 border-2 border-opacity-80 '></video>
                    </div>
                </div>

        <div className="flex  justify-center items-center ">
            <video playsInline src='http://drqlcggpj7pli.cloudfront.net/theo.mp4' autoPlay loop muted disablePictureInPicture className='sm:hidden md:hidden  max-w-xs items-center justify-center border-yellow-200 border-2 border-opacity-80 '></video>
        </div>


                    <div className=" lg:flex max-w-5xl grid grid-cols-1 pt-20  justify-between uppercase text-center lg:text-2xl">
                    <button onClick={() => openCategory("Complete Videography")} >
                        <div className="flex flex-col pb-8  lg:pb-0">
                            <span className="font-bold">Complete Videography</span>
                            
                            <i className="fa fa-chevron-down "></i>
                            
                            
                        </div>
                    </button>

                    <button onClick={() => openCategory("Exhibitions")} >
                        <div className="flex flex-col pb-8 lg:pb-0">
                            <span className="font-bold">Exhibitions</span>
                            <i className="fa fa-chevron-down "></i>
                        </div>
                    </button>

                    <button onClick={() => openCategory("Collection & Awards")} >
                        <div className="flex flex-col pb-8 lg:pb-0">
                            <span className="font-bold">Collection & Awards</span>
                            <i className="fa fa-chevron-down "></i>
                        </div>
                    </button>

                    <button onClick={() => openCategory("Interviews & Essays")} >
                        <div className="flex flex-col pb-8 lg:pb-0">
                            <span className="font-bold">Interviews & Essays</span>
                            <i className="fa fa-chevron-down "></i>
                        </div>
                    </button>
                </div>
            </div>

            

        </div>
        <div ref={categorySectionRef} >
        {isExpanded && 
            <>


        
            <div id="container" className=" bg-[#fff7c9]  text-black ">

        
            <div  className="px-12 sm:px-8 md:px-16 2xl:px-32 lg:px-72 pb-20 pt-20 w-full block ">
            <Sticky bottomBoundary="#container" top={100}>
                <div className="flex justify-end ">
                <button onClick={() => closeCategory()} className="sticky  z-[1000] ">
                        <i className="fa fa-chevron-up "></i>
                </button>
                </div>
            </Sticky>




            <div  className='flex justify-center items-center'>
                <span className='theo-title  text-center justify-center pb-20 text-4xl  cursor-default  uppercase'>{expandedCategory}</span>
            </div>

            <div className="flex "> 
                <div className="max-w-4xl" >

                {categoryDataTitles.find(category => category.name === expandedCategory).dataTitle &&
                <span className="uppercase flex pb-4 text-2xl font-semibold">
                {categoryDataTitles.find(category => category.name === expandedCategory).dataTitle}
                </span>
            }
<div className="flex sm:flex md:hidden lg-hidden w-full pb-20 justify-center items-center">
  <img className="" src={categoryDataTitles.find(category => category.name === expandedCategory).image} />
</div>


                {bundledData.map((yearData, yearIndex) => (
                    <>
                    <div key={yearIndex} >
                        {yearData.entries.map((entry, entryIndex) => (
                        
                        
                        <a href={entry.pdf}  target="_blank">
                              
                            <div key={entryIndex} className="flex">


                                {entryIndex === 0 && yearData.date !== null &&
                                
                                    <div className={`font-semibold  pl-4 md:pl-12 ${entry.type === "col" ? "" : "pr-6"}`}>{yearData.date}</div>
                                }
                                {entryIndex !== 0 && yearData.date !== null && 
                                    <div className={`font-semibold pl-4 md:pl-12 opacity-0 ${entry.type === "col" ? "" : "pr-6"}`}>
                                        {yearData.date}
                                    </div>
                                }
                                <div className={`pb-2 ${entry.type === "IV" ? "pb-10 " : ""}`}>
                                    <div className={`${entry.type === "IV" ? "hover:text-blue-700 text-lg" : ""}`}>
                                    <div className={`flex justify-between w-full `}>
                                        <span className={`font-normal w-fit  pr-10 `}>
                                        {entry.title.split(' ').map((word, i) => word.startsWith('b/') ?
                                        <span key={i} className="font-bold">{word.slice(2)}</span> : word).reduce((prev, curr, i) =>
                                            i === 0 ? [curr] : [prev, ' ', curr], []
                                        )}  
                                        </span>
                                    </div>
                                    {entry.subtitle ??
                                    <>
                                    <div className=" flex justify-between w-full">
                                        <span className='font-normal w-full pr-10'>

                                        {entry.subtitle}

                                            
                                        </span>
                                    </div>
                                    </>
                                    }
                                    </div>
                                    <div>
                                        {entry.subtitle2 ? (
                                        <div className=" flex  w-full">
                                            <span className='font-thin text-sm w-full pr-10 hover:underline opacity-50   cursor-pointer'>
                                            {entry.link2 ? (
                                                <a href={entry.link2} target="_blank">{entry.subtitle2}</a>
                                            ) : <span>{entry.subtitle2}</span>}
                            

                                            </span>
                                        </div>
                                        ) : <div></div>
                                        }
                                    </div>
                                </div>

                            </div>
                        </a>
                ))}
                    </div>
                    </>
                ))}

                {categoryDataTitles.find(category => category.name === expandedCategory).data2Title && 
                    <span className="uppercase flex pb-4 pt-12 text-2xl font-semibold">
                    {categoryDataTitles.find(category => category.name === expandedCategory).data2Title}
                    </span>
                }

                {bundledData2 !== null && 
                    bundledData2.map((yearData, yearIndex) => (
                    <>
                    <div key={yearIndex}>
                        {yearData.entries.map((entry, entryIndex) => (
                            <div key={entryIndex} className="flex">
                                {entryIndex === 0 &&
                                    <div className="font-semibold  pl-4 md:pl-12 pr-6">{yearData.date}</div>
                                }
                                {entryIndex !== 0 &&
                                    <div className="font-semibold pl-4 md:pl-12 pr-6 opacity-0">{yearData.date}</div>
                                }
                                <div className="pb-2">
                                    <div className="flex justify-between w-full">
                                        <span className="font-normal w-fit  pr-10">
                                        {entry.title.split(' ').map((word, i) => word.startsWith('b/') ?
                                        <span key={i} className="font-bold">{word.slice(2)}</span> : word).reduce((prev, curr, i) =>
                                            i === 0 ? [curr] : [prev, ' ', curr], []
                                        )}  
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </>
                ))
                
                }


                </div>

                <div className="pl-0 lg:pl-48 pt-10 hidden sm:hidden md:hidden lg:block">
                <img src={categoryDataTitles.find(category => category.name === expandedCategory).image} className={`  ${categoryDataTitles.find(category => category.name === expandedCategory).class}`}/>
                </div>
            </div>

            </div>


            </div>

            </>
        }




        </div>
        <div id="end">

        </div>
        </>
    )

} 

export default Resume