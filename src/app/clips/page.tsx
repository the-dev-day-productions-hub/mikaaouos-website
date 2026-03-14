import Link from 'next/link'
import Image from 'next/image'
import { FaClapperboard, FaRegShareFromSquare} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

// add a home button somehere

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
      <div className="w-full h-screen flex flex-col items-center justify-center p-4">

        {/* centerpiece content */}
        <div className="relative w-100 h-150 p-4 flex flex-col items-center justify-center gap-2 bg-accent/80 rounded-xl shadow-xl">         

          {/* Clips Gallery */}
          <div className='w-full h-60 bg-midbackground/60 flex flex-col items-center justify-center rounded-lg'>

            <p className='text-white font-bold text-xl'>Clips Gallery</p>

            <div className='relative w-80 h-45 p-3 flex items-center justify-center bg-black'>

              <div className='absolute w-85 h-5 bottom-[-10] flex flex-row justify-between'>
                <div className='w-10 h-5 flex flex-row items-center bg-secondary/40'>
                  <FcLike className='w-5 h-5'/>
                  <p className='text-white text-xs'>1.2K</p>
                </div>
                <div className='w-10 h-5 flex flex-row items-center bg-secondary/40'>
                  <p className='text-white text-xs'>1.2K</p>
                  <FaRegShareFromSquare className='w-5 h-5'/>  
                </div>
              </div>

              <div className='w-full h-full flex items-center justify-center'>
                <FaClapperboard className='text-white/20' size={100}/>
              </div>
              <p className='text-white font-bold text-xl'>Coming Soon Clips</p>
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
