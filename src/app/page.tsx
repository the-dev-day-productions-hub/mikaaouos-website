import Image from 'next/image'
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
        <div className="relative w-100 h-100 p-4 flex flex-col items-center justify-center gap-10 bg-accent/80 rounded-xl shadow-xl">

          {/* top bar add a border on profile pic */}
          <div className="w-full h-16 flex items-center  gap-3 p-2 bg-midbackground/60 rounded-lg">
            <div className="w-30 h-30 rounded-full overflow-hidden bg-white">
              <Image 
                className="w-full h-full object-cover" 
                src="/assets/images/skybackdrop.jpg"
                width={200} height={200} 
                alt=''
              />
            </div>
            <div className='flex flex-col gap-0.5'>
              <p className="text-white font-bold text-xl">Mikaaouo</p>
              <div className="flex flex-row gap-0.5">
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

          {/* bottom bar */}
          <div className='w-full h-16 bg-midbackground/60 flex flex-row items-center justify-center rounded-lg'>
            <div className='w-1/2 h-full p-3 flex items-center justify-start gap-15'>
              <FaClapperboard className='text-white'/>
              <div className='text-white font-bold'>Clips</div>
            </div>
            <GiDividedSquare />
            <div className='w-1/2 h-full p-3 flex items-center justify-end gap-1'>
              <div className='text-white font-bold'>Suggestions</div>
              <TbBubbleTea className='text-white'/>
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
