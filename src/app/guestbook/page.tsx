import Link from 'next/link'
import Image from 'next/image'
import { TbBubbleTea, TbSend  } from "react-icons/tb"
import { FcLike } from "react-icons/fc";


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
        <div className="relative w-100 h-150 p-4 flex flex-col items-center gap-2 bg-accent/80 rounded-xl shadow-xl">         

          {/* top bar */}
          <div className='w-full h-8 bg-midbackground/60 flex flex-row items-center justify-center gap-1 rounded-lg'>
              <TbBubbleTea className='text-white'/>
              <p className='text-white font-bold'>Guest-Book</p>
              <TbBubbleTea className='text-white'/>
          </div>

          {/* make a textarea along with date of comment */}
          {/* Guest book */}
          <div className='w-full h-120 bg-midbackground/60 flex items-center justify-center rounded-lg'>
            <div className='w-full h-full p-3 flex flex-col items-center justify-center'>

              <div className='w-full h-16 p-0.5 flex flex-row gap-1 bg-secondary rounded-2xl'>
                <div className='w-15 h-15 bg-secondary rounded-full overflow-hidden'>
                  <Image 
                    className="w-full h-full object-cover" 
                    src="/assets/images/profilePic.png"
                    width={200} height={200} 
                    alt=''
                  />
                </div>
                <div className='w-3/4 h-16'>
                  <p className='text-white font-bold'>John Doe</p>
                  <p className='text-white text-xs'>omg you should def like go over there and do the things plus the subathons and akin to that</p>
                </div>

              </div>
              <div className='text-white font-bold text-xl'>Coming Soon</div>
            </div>
          </div>

          {/* Feedback comments */}
          <div className='w-full h-8 p-2 flex items-center gap-1 bg-secondary/50 rounded-2xl'>
            <TbSend type="submit" className='text-white text-xl cursor-pointer'  />
            <input type="text" placeholder='Leave your mark' className='w-full h-full bg-transparent outline-none'/>
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
