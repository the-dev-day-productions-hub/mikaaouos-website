"use client"

import Link from 'next/link'
import Image from 'next/image'
import { use, useEffect, useState } from 'react';
import { FaClapperboard, FaRegShareFromSquare} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const TWITCH_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_URL}/api/twitch`
const SHARE_BASE_URL = "https://www.twitch.tv/mikaaouo/clip/"

interface ClipMeta {
  id: string,
  title: string
  thumbnail: string
}

export default function Clips() { 
  const [countLike, setCountLike] = useState(0)
  const [countShare, setCountShare] = useState(0)
  const [clips, setClips] = useState<ClipMeta[]>([])
  const [clipIndex, setClipIndex] = useState(0)

  const prevClip = (clipIndex - 1 + clips.length) % clips.length
  const nextClip = (clipIndex + 1) % clips.length


  //tempory likes and shares
  function handleLikeClick() {
    setCountLike(countLike + 1) 
  }
  
  function handleShareClick(){
    setCountShare(countShare + 1)
  }

  function handleNextClip() {
    setClipIndex((clipIndex + 1) % clips.length)
  }

  function handlePrevClip() {
    setClipIndex((clipIndex - 1 + clips.length) % clips.length)
  }
  
  useEffect(() => {
    async function fetchBackend() {
      const response = await fetch(TWITCH_ENDPOINT)
      
      if (!response.ok){
        console.log("Twitch endpoint not connected")
        return setClips([])
      } 

      const json = (await response.json())
      console.log(json)
      
      return setClips(json.clips)
    }
    
    fetchBackend()
  }, [])
    
  return (
    <main>

      {/* backdrop */}
      <Image 
        className="-z-10 absolute w-full h-screen object-cover" 
        src="/assets/images/skybackdrop.jpg" 
        width={2000} height={2000}
        alt="" 
      />
      
      {/* frame for the entire scrren */}
      <div className="w-full h-screen flex flex-col items-center justify-center p-4">

        {/* Clips Gallery/centerpiece content */}
        <div className="relative w-full max-w-200 h-full max-h-250 flex flex-col gap-4 items-center justify-center p-4 bg-accent/80 rounded-xl shadow-xl">

          {/* prev clip */}
          <div className='w-full h-60 bg-midbackground/60 flex flex-col items-center justify-center rounded-lg'>
            <p className='text-white font-bold text-2xl'>{clips.length > 0 ? clips[prevClip].title : 'No clips available'}</p>
            <button onClick={handlePrevClip} className='w-1/2 flex items-center justify-center cursor-pointer'>
              <Image
                className=' w-full aspect-video'
                src={clips.length > 0 ? clips[prevClip].thumbnail : '/assets/images/placeholder.png'}
                width={480} height={272}
                alt='Thumbnail'
                unoptimized
              />
            </button>
          </div>         

          {/* current selected clip */}
          <div className='w-full py-4 bg-midbackground/60 flex flex-col items-center justify-center rounded-lg'>
            <p className='text-white font-bold text-xl'>{clips.length > 0 ? clips[clipIndex].title : 'No clips available'}</p>
            <div className='relative w-full max-w-160 aspect-video flex items-center justify-center bg-black'>
              {/* Likes and Shares */}
              <div className='absolute w-[calc(100%+20px)] h-5 bottom-[-10] flex flex-row justify-between'>
                <button onClick={handleLikeClick} className='w-10 h-5 flex flex-row items-center bg-secondary/40 cursor-pointer'>
                  <FcLike className='w-5 h-5'/>
                  <p className='text-white text-xs'>{countLike}</p>
                </button>

                <div onClick={handleShareClick} className='w-10 h-5 flex flex-row items-center bg-secondary/40 cursor-pointer'>
                  <p className='text-white text-xs'>{countShare}</p>
                  <FaRegShareFromSquare className='w-5 h-5'/>  
                </div>
              </div>

              <iframe className='w-full h-full'
                src={"https://clips.twitch.tv/embed?" +
                  new URLSearchParams({
                    clip: clips.length > 0 ? clips[clipIndex].id : '', // id in the clip data
                    parent: "attraction-format-attempted-unsubscribe.trycloudflare.com" // change tp the domain you are hosting on
                  })}
                title="Twitch Clip Player"
                height="720"
                width="1280"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          {/* next clip */}
          <div className='w-full h-60 bg-midbackground/60 flex flex-col items-center justify-center rounded-lg'>
            <p className='text-white font-bold text-2xl'>{clips.length > 0 ? clips[nextClip].title : 'No clips available'}</p>
            <button onClick={handleNextClip} className='w-1/2 flex items-center justify-center cursor-pointer'>
              <Image
                className=' w-full aspect-video'
                src={clips.length > 0 ? clips[nextClip].thumbnail : '/assets/images/placeholder.png'}
                width={480} height={272}
                alt='Thumbnail'
                unoptimized
              />
            </button>
          </div> 
         
        </div>

        {/* Home Button */}
        <Link href="/" className='w-20 h-10 bg-accent rounded-b-lg flex items-center justify-center'>
          Home
        </Link>

      </div>


    </main>

  );
}
