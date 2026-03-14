import Image from 'next/image'
import Link from 'next/link'
import { FaTiktok, FaTwitch, FaTwitter, FaDiscord, FaClapperboard } from "react-icons/fa6";
import { TbTipJar } from "react-icons/tb";
import { TbBubbleTea } from "react-icons/tb"
import { GiDividedSquare } from "react-icons/gi";


export default function Home() {
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
      <div className="w-full h-screen flex items-center justify-center p-4">

        {/* centerpiece content */}
        <div className="relative w-100 h-100 p-4 flex flex-col items-center justify-center gap-10 bg-accent/10 rounded-xl shadow-xl">

          {/* top bar add a border on profile pic */}
          <div className="w-full h-16 flex items-center  gap-3 p-2 rounded-lg">
            <div className="w-30 h-30 rounded-full overflow-hidden bg-white">
              <Image 
                className="w-full h-full object-cover" 
                src="/assets/images/profilePic.png"
                width={200} height={200} 
                alt=''
              />
            </div>
            <div className='flex flex-col gap-0.5'>
              <p className="text-white font-bold text-3xl">Mikaaouo</p>
              <div className="flex flex-row gap-0.5 text-xl">
                <FaTwitch/>
                <FaDiscord/>
                <FaTiktok/>
                <FaTwitter/>
                <TbTipJar/>
              </div>
            </div>
          </div>

          {/* Disocf */}
          <div className='w-full h-16 bg-[#5865F2]'>discord</div>

          {/* bottom bar make the bigger div the link*/}
          <div className='relative w-full h-1 flex flex-row rounded-lg'>

            <div className='w-1/4 h-full flex items-center justify-start'>

              <div className='w-40 h-10 flex flex-row items-center justify-center gap-1 bg-secondary rounded-2xl'>
                <FaClapperboard className='text-white text-xl'/>
                <Link href="/clips" className='text-white font-bold text-xl'>Clips</Link>
              </div> 

            </div>

           

            <div className='w-3/4 h-full flex items-center justify-end gap-2 rounded-2xl'>

              <div className='w-65 h-10 flex flex-row items-center justify-center bg-secondary rounded-2xl'>
                <Link href="/suggestions" className='text-white font-bold text-xl'>Suggestions</Link>
                <TbBubbleTea className='text-white tracking-tighter text-3xl'/>
              </div>

            </div>

          </div>

          {/* spotify */}
          <div className='w-full h-16 bg-midbackground/60 flex items-center justify-center rounded-lg'>
            <div className='w-full h-full p-3 flex items-center justify-center'>
              <div className='text-white font-bold text-xl'>Coming Soon</div>
            </div>
          </div>
         

        </div>

      </div>


    </main>

  );
}
