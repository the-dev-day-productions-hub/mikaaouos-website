"use client"
import Link from 'next/link'
import Image from 'next/image'
import { use, useState } from 'react';
import { FaClapperboard, FaRegShareFromSquare} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

export default function Home() {
  const [countLike, setCountLike] = useState(0)
  const [countShare, setCountShare] = useState(0)

  function handleLikeClick(){
    setCountLike(countLike + 1) 
  }
  function handleShareClick(){
    setCountShare(countShare + 1)
  }

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

        {/* centerpiece content */}
        <div className="relative w-full max-w-200 h-250 p-4 flex flex-col items-center justify-center gap-2 bg-accent/80 rounded-xl shadow-xl">         

          {/* Clips Gallery */}
          <div className='w-full h-110 bg-midbackground/60 flex flex-col items-center justify-center rounded-lg'>

            <p className='text-white font-bold text-xl'>Clips Gallery (in developement)</p>

            {/* video placeholder */}
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

              {/* Just a youtube video as placeholder should be use twitch if we can */}
              {/* <iframe className='w-full h-full' 
              src="https://www.youtube.com/embed/mfBoy9PyqR8?si=xChEve-p_SnsC7Wy" 
              title="YouTube video player" 
              allow="accelerometer; 
              autoplay; clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; web-share" ></iframe> */}

              <iframe className='w-full h-full'
              src={"https://clips.twitch.tv/embed?" +
                new URLSearchParams({
                  clip: "HeartlessSwissTubersPermaSmug-0ksTjSOesnXkruQh", // id in the clip data
                  parent: "moderator-worth-vpn-pants.trycloudflare.com"
                })}
          
              title="Twitch Clip Player"
              height="720"
              width="1280"
              allowFullScreen>
              </iframe>
             
           
            </div>


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
