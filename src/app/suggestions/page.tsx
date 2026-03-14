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
      <div className="w-full h-screen flex items-center justify-center p-4">

        {/* centerpiece content */}
        <div className="relative w-100 h-150 p-4 flex flex-col items-center gap-2 bg-accent/80 rounded-xl shadow-xl">         

          {/* top bar */}
          <div className='w-full h-8 bg-midbackground/60 flex flex-row items-center justify-center gap-1 rounded-lg'>
              <TbBubbleTea className='text-white'/>
              <p className='text-white font-bold'>Suggestions-Box</p>
              <TbBubbleTea className='text-white'/>
          </div>

          {/* suggestion box */}
          <div className='w-full h-120 bg-midbackground/60 flex items-center justify-center rounded-lg'>
            <div className='w-full h-full p-3 flex items-center justify-center'>
              <div className='text-white font-bold text-xl'>Coming Soon</div>
            </div>
          </div>

          {/* Feedback comments */}
          <div className='w-full h-8 p-2 flex items-center  bg-secondary/50 rounded-2xl'>
            <TbSend />
          </div>
          


         

        </div>

      </div>


    </main>

  );
}
