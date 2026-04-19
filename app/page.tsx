import Image from 'next/image'
import Link from 'next/link'

import { FaTiktok, FaTwitch, FaTwitter, FaDiscord, FaClapperboard, FaVolumeHigh } from 'react-icons/fa6'
import { TbTipJar, TbBubbleTea } from 'react-icons/tb'

export default function Home() {
  return (

    <main className="w-full h-screen">

      {/* backdrop */}
      <div className="bg-black">
        {/* <Image
          className="-z-10 absolute w-full h-screen object-cover" 
          src="/assets/images/skybackdrop.jpg" 
          width={2000} height={2000}
          alt=""
        /> */}
        <video
          className="-z-10 absolute w-full h-full object-cover opacity-50"
          src="/assets/hero_backdrop.webm"
          width={2000} height={2000}
          loop
          autoPlay
          muted
        />
      </div>
      
      {/* central content */}
      <div className="w-full h-full p-4 flex items-center justify-center">

        {/* top bar */}
        <div className="absolute top-0 w-full h-16 flex items-center p-4">
          <div className="p-2 bg-neutral-800 rounded-xl opacity-50 hover:opacity-90">
            <FaVolumeHigh size={28} />
          </div>
        </div>

        {/* the centerpiece */}
        <div className="relative w-100 h-100 p-4 flex flex-col items-center justify-center gap-10 border-2 border-accent rounded-xl backdrop-blur shadow-xl">

          {/* top bar add a border on profile pic */}
          <div className="w-full h-16 flex items-center justify-between gap-2 p-2 rounded-lg">
            <div className="w-30 h-30 rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-cover" 
                src="/assets/avatar.png"
                width={200} height={200} 
                alt=''
              />
            </div>

            <div className='flex flex-col gap-0.5 border-2 border-pink-500'>
              <p className="text-white font-bold text-4xl">mikaaouo</p>
              <div className="flex flex-row gap-2 text-2xl antialiased">
                <Link href='https://www.twitch.tv/mikaaouo'><FaTwitch/></Link>
                <Link href='https://discord.gg/2BdT9ZCWHe'><FaDiscord/></Link>
                <Link href='https://www.tiktok.com/@mikaaouo'><FaTiktok/></Link>
                <Link href='https://twitter.com/mikaaouo'><FaTwitter/></Link>
                <Link href='https://streamelements.com/mikaaouo/tip'><TbTipJar/></Link>
              </div>
            </div>
          </div>

          {/* Disocf */}
          <div className='w-full h-16 border-2 border-[#5865F2]/50'>
            {/* <iframe
            title="Discord user embed"
            width="340"
            height="72"
            sandbox="allow-scripts"
            src="https://widgets.vendicated.dev/user?id=353192532751941632&theme=dark&banner=false&full-banner=false&rounded-corners=true&discord-icon=true&badges=true&guess-nitro=false&background-color=%23fff&foreground-color=%23000"
            ></iframe> */}
          </div>

          {/* bottom bar make the bigger div the link*/}
          <div className='relative w-full h-1 flex flex-row rounded-lg'>

            <div className='w-1/4 h-full flex items-center justify-start'>

              <Link href="/clips" className='w-40 h-10 flex flex-row items-center justify-center gap-1 bg-secondary rounded-2xl'>
                <FaClapperboard className='text-white text-xl'/>
                <p className='text-white font-bold text-xl'>Clips</p>
              </Link>

            </div>



            <Link href="/guestbook" className='w-3/4 h-full flex items-center justify-end gap-2 rounded-2xl'>

              <div className='w-65 h-10 flex flex-row items-center justify-center border-2 border-secondary rounded-2xl'>
                <p className='text-white font-bold text-xl'>Guestbook</p>
                <TbBubbleTea className='text-white tracking-tighter text-3xl'/>
              </div>

            </Link>

          </div>

          {/* spotify */}
          <div className='w-full h-32 bg-midbackground/60 flex items-center justify-center rounded-lg'>
            <div className='w-full h-full p-3 flex items-center justify-center'>
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/artist/1rB0DVM76k24T3zhzJOCoJ?utm_source=generator" 
                width="100%" height="100"
                allow="autoplay; clipboard-write; encrypted-media; 
                fullscreen; picture-in-picture"
                loading="lazy"
              />
              {/* <div className='text-white font-bold text-xl'>Coming Soon</div> */}
            </div>
          </div>


        </div>

      </div>


    </main>

  );
}
