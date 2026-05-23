"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, ChangeEvent, use } from 'react'

import { TbBubbleTea, TbSend  } from "react-icons/tb"
import { FcLike } from "react-icons/fc"

const GUESTBOOK_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook`

interface GuestbookEntryProps {
  author_name: string
  content: string
  created_at: string
  likes: number
}

function GuestbookEntry({ author_name, content, created_at, likes }: GuestbookEntryProps) {

  return (
    <div className='w-full h-16 p-0.5 flex flex-row gap-1 bg-secondary rounded-2xl'>
      <div className='w-15 h-15 bg-secondary rounded-full overflow-hidden'>

        {/* Temp Image */}
        <Image
          className="w-full h-full object-cover" 
          src="/assets/images/profilePic.png"
          width={200} height={200} 
          alt=''
        />
      </div>
      <div className='w-3/4 h-16'>
        <div className='w-full h-1/3 flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-1'>
            <p className='text-accent font-bold'>{author_name}</p>
            <p className='text-textcol font-extralight text-xs'>{created_at}</p>
          </div>
          
          <div className='flex flex-row gap-1'>
            <p className='text-textcol text-xs'>{likes}</p>
            <FcLike className='text-textcol'/>
          </div>
          
        </div>
        
        <p className='text-textcol text-xs'>{content}</p>
      </div>
    </div>
  )
}

export default function Guestbook() {
 
  const [guestbookList, setGuestbookList] = useState([])
  useEffect(() => {
  async function fetchBackend(){
    console.log("john doe")
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook`)
  
    if (!response.ok) return setGuestbookList([])

    return setGuestbookList(await response.json())
  }

  fetchBackend()
  }, [])

  console.log(guestbookList)
  const [inputContent, setInputContent] = useState('Leave your mark');

  // Create funtion
  async function addResponse() {
    const newResponse = {
      id: guestbookList.length + 1,
      author_name: "JM",
      content: inputContent,
      created_at: '',
      likes: 0
    }


    // setGuestbookList([ ...guestbookList, newResponse ])
    const guestbookAdd = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook`, {
      method: "POST",
      body: JSON.stringify(newResponse)
    })
  
    if (!guestbookAdd.ok) {
    return <div>
      Failed to fetch data from {process.env.NEXT_PUBLIC_APP_URL}/api/guestbook
    </div>
    }
  }

  
  // Connect this to the insert thing
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const nextMessage = event.target.value
    setInputContent(nextMessage)
    console.log(nextMessage)
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
            <div className='w-full h-full p-3 flex flex-col items-center gap-1 justify-center'>

              {/* guest list render, resoponselist but its temp */}
              {guestbookList.map((entry) => {
                return <GuestbookEntry key={entry.id} author_name={entry.author_name} content={entry.content} created_at={entry.timestamp} likes={entry.likes} />
              })}

              <div className='text-white font-bold text-xl'>Coming Soon</div>
            </div>
          </div>

          {/* feedback comments */}
          <div className='w-full h-8 p-2 flex items-center gap-1 bg-secondary/50 rounded-2xl'>
            <button onClick={addResponse}><TbSend className='text-white text-xl'/></button>
            <input value={inputContent} onChange={handleChange} className='w-full h-full bg-transparent outline-none'/>
          </div>

        </div>

        {/* home Button */}
        <Link href="/" className='w-20 h-10 bg-accent rounded-b-lg flex items-center justify-center'>
          Home
        </Link>
      </div>

    </main>
  )
}
