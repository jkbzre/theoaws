import { useState } from "react"
import videoDataByType from "../../data/videoData"
import PlayVideo from "../PlayVideo"
import { Link } from "react-router-dom"

const VideoInstallations = ({categoryType, categoryName}) => {
    
    const extractYear = (yearString) => {
        if (yearString.includes('/')) {
            const years = yearString.split('/').map(year => parseInt(year, 10));
            return Math.max(...years);
        }
        return parseInt(yearString, 10);
    };


    const sortedVideos = [...videoDataByType[categoryType]].sort((a, b) => extractYear(b.year) - extractYear(a.year));
    return(
        <>
        <div className="w-full">
            <div className=" ">
            <div className="px-0 sm:px-8 md:px-16 2xl:px-32 lg:px-72 ">

                    <div className="grid md:grid-cols-3 px-2 grid-cols-1 gap-4">
                        {sortedVideos.map((video) => (
                            <>
                            <Link to={`videos/${categoryType}/${video.id}`} key={video.id}>
                            <div key={video.src}  className="relative pb-10 group hover:opacity-100    transition-opacity duration-300 cursor-pointer ">
                                <img src={video.thumbnail} alt={video.title} />
                                <p className="mt-2 raleway-400 text-xs lg:text-sm">{video.title}</p>
                                <p className='text-xs'>{video.year}</p>
                            </div>
                            </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default VideoInstallations