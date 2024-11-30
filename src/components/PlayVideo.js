import React from 'react';
import { useEffect, useRef } from 'react';
import Articles from './Articles';

import VideoJS from './VideoJS';
import { Link } from 'react-router-dom';

const PlayVideo = ({foundVideoData}) => {
    
    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: false,
      controls: true,
      responsive: true,
      aspectRatio: '16:9',

      sources: [{
        src: foundVideoData.src,
        type: 'video/mp4'
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
      });
  
      player.on('dispose', () => {
      });
    };
  


    useEffect(() => {
        window.scrollTo(0, 0);
    })




    if (!foundVideoData) {
        return (
            <div className="col-span-3 flex flex-col overflow-y-auto ">
                <p className="text-2xl font-bold text-center">Video not found</p>
            </div>
        )
    }

    return (
        <div className="col-span-3 flex flex-col overflow-y-auto pt-4 xl:pt-28">
            
            {foundVideoData.hasVideo == true && (
            <VideoJS id={foundVideoData.id} options={videoJsOptions} onReady={handlePlayerReady}/>
            )}
        {
            foundVideoData.subtitle &&
            <p className='pt-4 pb-10 max-w-4xl'>
                {foundVideoData.subtitle}
            </p>
        }
        <div className='inline-flex mt-10  '>
        <p className="max-w-3xl text-left tracking-widest">
            <span className=' text-xl italic'>{foundVideoData.title}</span>
        </p>
        </div>
        
        <div>
        <span className='text-md '>{foundVideoData.year}</span>
        </div>
        <div className='inline-flex   '>
        {foundVideoData.undertitle && 
        <p className=" text-md  text-left max-w-[51rem] font-normal pr-1">
        {foundVideoData.undertitle.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}, 
            <span className='pl-1'>{foundVideoData.length}</span>

        </p>
        }
        
        <p className=" text-md  text-left font-normal">
        </p>
        </div>
        
        {
            foundVideoData.undertitle2 &&
            <p className="w-full text-md  font-light max-w-4xl text-left xl:pb-40 mb-5">
            {foundVideoData.undertitle2.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}
            </p>
        }
        <p className="mt-4 w-full py-5 max-w-4xl text-left">
            {foundVideoData.text.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}

        </p>
        {foundVideoData.text2 &&
            <p className='w-full pb-5 max-w-4xl text-left'>
                {foundVideoData.text2.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}
            
            </p>
        }

        {foundVideoData.text3 &&
            <p className='w-full pb-5 max-w-4xl text-left'>
            {foundVideoData.text3.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}
            
            </p>
        }

        {foundVideoData.text4 &&
            <p className='w-full pb-5 max-w-4xl text-left'>
                {foundVideoData.text4.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}
            
            </p>
        }

        {foundVideoData.questa1 && 
            <div>
            <a className='w-full pb-5 max-w-4xl text-left hover:text-blue-600 hover:underline text-xs ' href='https://www.iwalewabooks.com/product-page/theo-eshetu-till-death-us-do-part'>Extract from an essay by Simon Njami published in Till Death Us Do Part</a>
            <p className='w-full pb-5 pt-5 max-w-4xl text-left '>
                
                {foundVideoData.questa1}
            </p>
            <p className='w-full pb-10 max-w-4xl text-left '>
                
            {foundVideoData.questa2.split(' ').map((word, i) => 
            word.startsWith('i/') ? 
            <span key={i} className="italic">{word.slice(2)}</span> : 
            word
            ).reduce((prev, curr, i) => 
                i === 0 ? [curr] : [prev, ' ', curr], []
            )}
            </p>

            </div>
        }

        <div className='flex justify-center items-center'>
            <div className='max-w-4xl  mt-2 '>
                <Articles title={foundVideoData.title}></Articles>
            </div>
        </div>
        </div>
    )
}

export default PlayVideo;