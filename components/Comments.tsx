import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
        <div className='flex items-center gap-4'>
            <Image className='w-8 h-8 rounded-full object-cover' width={32} height={32} alt='' src="https://images.pexels.com/photos/18999212/pexels-photo-18999212/free-photo-of-candid-photo-of-men-standing-by-the-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className='flex-1 flex items-center justify-between rounded-xl bg-slate-100 text-sm px-6 py-2 w-full'>
                <input type='text' placeholder='Write a comment...' className='bg-transparent outline-none flex-1 leading-none' />
                <Image className='cursor-pointer' width={16} height={16} alt='' src="/assets/emoji.png" />
            </div>
        </div>
        <div>
            <div className='flex gap-4 justify-between mt-6'>
                <div>
                     <Image className='w-10 h-10 rounded-full object-cover' width={40} height={40} alt='' src="https://images.pexels.com/photos/18999212/pexels-photo-18999212/free-photo-of-candid-photo-of-men-standing-by-the-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Georgie Clarke</span>
                    <p>grown add but world cover taken let pond opinion water curious five possibly pressure writing seven press memory interest themselves ride bad table magnet</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                       <div className='flex items-center gap-4'>
                            <Image className='w-4 h-4 cursor-pointer' width={16} height={16} alt='' src="/assets/like.png" />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>122 Likes</span>
                       </div>
                        <div>Reply</div>
                    </div>
                  
                </div>
                 <Image className='w-4 h-4 cursor-pointer' width={16} height={16} alt='' src="/assets/more.png" />
            </div>
        </div>
    </div>
  )
}

export default Comments