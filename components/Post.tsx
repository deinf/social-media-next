import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image className='w-10 h-10 rounded-full object-cover' width={40} height={40} alt='' src="https://images.pexels.com/photos/32948647/pexels-photo-32948647.jpeg" />
                <span className='font-medium'>Antonio Mack</span>
            </div>
            <Image width={16} height={16} alt='' src="/assets/more.png" />
        </div>
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image className='object-cover rounded-md' fill alt='' src="https://images.pexels.com/photos/31452637/pexels-photo-31452637.jpeg" />
            </div>
            <p>term get slope map slipped greatest thirty touch column kitchen use baby house seldom straight congress ball trunk below note matter believed every easy</p>
        </div>
        <div className='flex items-center justify-between text-sm my-4'> 
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image className='cursor-pointer inline-block' width={16} height={16} alt='' src="/assets/like.png" />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500 leading-none'>122 <span className='hidden md:inline'>Likes</span></span>
                </div>
                 <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image className='cursor-pointer inline-block' width={16} height={16} alt='' src="/assets/comment.png" />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500 leading-none'>122 <span className='hidden md:inline'>Comments</span></span>
                </div>
            </div>
            <div>
                 <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image className='cursor-pointer inline-block' width={16} height={16} alt='' src="/assets/share.png" />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500 leading-none'>122 <span className='hidden md:inline'>Shares</span></span>
                </div>
            </div>
        </div>
        <Comments />
    </div>
  )
}

export default Post