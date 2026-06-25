"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaTiktok, FaTwitch, FaTwitter, FaDiscord, FaClapperboard } from "react-icons/fa6";
import { TbTipJar } from "react-icons/tb";
import { TbBubbleTea } from "react-icons/tb"

interface StreamerData {
  twitch: {
    username: string,
    profilePic: string
  },
  discord: {
    username : string,
    clanTag : string,
    clanImage : string,
    avatarImage : string,
    avatarDecoration : string,
    nameTagDecoration : string
  }
}

export default function Home() {

  const DISCORD_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_URL}/api/discord`
  const TWITCH_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_URL}/api/twitch`

  //how the does this still work
  // const discordResponse = await fetch(DISCORD_ENDPOINT)
  
  // if (!discordResponse.ok) {
  //   return <div>
  //     Failed to fetch data from {process.env.NEXT_PUBLIC_APP_URL}/api/discord
  //   </div>
  // }

  // const discordData = await discordResponse.json()
  const [streamerData, setStreamerData] = useState<StreamerData | 0>(0)

    useEffect(() => {
      async function fetchBackend() {

        const twitchResponse = await fetch(TWITCH_ENDPOINT)        
        if (!twitchResponse.ok){
          console.log("Twitch endpoint not connected")
          return setStreamerData(0)
        }
        
        const discordResponse = await fetch(DISCORD_ENDPOINT)
        if (!discordResponse.ok){
          console.log("Discord endpoint not connected")
          return setStreamerData(0)
        }
  
        const twitchData = (await twitchResponse.json()).user[0]
        console.log(twitchData)
        const discordData = (await discordResponse.json())
        console.log("spacerlol")
        console.log(discordData)
    
        return setStreamerData({ twitch: twitchData, discord: discordData })
      }
      
      fetchBackend()
    }, [])

    // this still appears when going to the page for the first time so make it pretty loading page? 
    if (!streamerData) {
      return <div>
        Failed to fetch data from from either twitch or discord endpoints. Please check the server logs for more information.
      </div>
    }

  return (
    <main>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>

      {/* backdrop */}
      <Image 
        className="-z-10 absolute w-full h-screen object-cover" 
        src="/assets/images/skybackdrop.jpg" 
        width={2000} height={2000}
        alt="" 
      />
      
      {/* frame for the entire scrren */}
      <div className="w-full h-screen flex items-center justify-center p-4">

        {/* centerpiece content */}
        <div className="relative w-100 h-100 p-4 flex flex-col items-center justify-center gap-10 bg-accent/10 rounded-xl shadow-xl">

          {/* top bar add a border on profile pic */}
          <div className="w-full h-16 flex items-center gap-2 p-2 rounded-lg">
            <div className="w-30 h-30 rounded-full overflow-hidden bg-white">
              <Image 
                className="w-full h-full object-cover" 
                src={streamerData.twitch.profilePic}
                width={200} height={200} 
                alt=''
                unoptimized
              />
            </div>
            <div className='flex flex-col gap-0.5'>
              <p className="text-white font-bold text-4xl">{streamerData.twitch.username}</p>
              <div className="flex flex-row gap-2 text-2xl">
                <Link href='https://www.twitch.tv/mikaaouo'><FaTwitch/></Link>
                <Link href='https://discord.gg/2BdT9ZCWHe'><FaDiscord/></Link>
                <Link href='https://www.tiktok.com/@mikaaouo'><FaTiktok/></Link>
                <Link href='https://twitter.com/mikaaouo'><FaTwitter/></Link>
                <Link href='https://streamelements.com/mikaaouo/tip'><TbTipJar/></Link>               
              </div>
            </div>
          </div>

          {/* Disocf */}
          <div className='relative w-full h-16 p-1 flex items-center gap-3 rounded-2xl bg-white/10'>
            {/* <iframe
            title="Discord user embed"
            width="340"
            height="72"
            sandbox="allow-scripts"
            src="https://widgets.vendicated.dev/user?id=353192532751941632&theme=dark&banner=false&full-banner=false&rounded-corners=true&discord-icon=true&badges=true&guess-nitro=false&background-color=%23fff&foreground-color=%23000"
            ></iframe> */}

            {/* Profile Pic */}
            <div className='relative className="h-full rounded-full aspect-square bg-white"'>
              <Image
                className='absolute'
                src={streamerData.discord.avatarDecoration}
                width={100} height={100}
                alt='Decoration'
                unoptimized
              />
              <Image
                className='rounded-full'
                src={streamerData.discord.avatarImage}
                width={50} height={50}
                quality={75}
                alt="Profile Pic"
                unoptimized
              />

            </div>

            {/* Username and Status */}
            <div className='h-full flex flex-col '>
              <div className='h-1/2 flex flex-row justify-center items-center gap-1'>
                <p className="text-white font-bold text-xl">{streamerData.discord.username}</p>
                
                {/* Clan Tag */}
                <div className='h-full flex flex-row justify-center items-center gap-1 p-2 rounded-2xl bg-accent/30'>
                  <Image
                    src={streamerData.discord.clanImage}
                    width={10} height={10}
                    alt='DiscordImageTag'
                    unoptimized
                  />
                  <p className="text-white text-xs font-bold">{streamerData.discord.clanTag}</p>
                  
                </div>

              </div>

              {/* Status */}
              <div className='h-1/2'>
                <p className="text-white text-base">{"Online (Placeholder)"}</p>
              </div> 
            
            </div>
            
            {/* Nameplate Deco */}
            <Image
              className='absolute h-full w-full'
              src={streamerData.discord.nameTagDecoration}
              width={672} height={126}
              alt='Nameplate Deco'
              loading='eager'
              unoptimized
            />
            
          </div>

          {/* bottom bar make the bigger div the link*/}
          <div className='relative w-full h-1 flex flex-row rounded-lg'>

            <div className='w-1/4 h-full flex items-center justify-start'>

              <Link href="/clips" className='w-40 h-10 flex flex-row items-center justify-center gap-1 bg-secondary rounded-2xl'>
                <FaClapperboard className='text-white text-xl'/>
                <p className='text-white font-bold text-xl'>Clips</p>
              </Link> 

            </div>

           

            <Link href="/guestbook"  className='w-3/4 h-full flex items-center justify-end gap-2 rounded-2xl'>

              <div className='w-65 h-10 flex flex-row items-center justify-center bg-secondary rounded-2xl'>
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
              loading="lazy" />
              {/* <div className='text-white font-bold text-xl'>Coming Soon</div> */}
            </div>
          </div>
         

        </div>

      </div>


    </main>

  );
}
