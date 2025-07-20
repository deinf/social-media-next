import Image from 'next/image'
import Link from 'next/link'

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Friend Requests</span>
        <Link href='/' className='text-blue-500 text-xs'>
          See all
        </Link>
      </div>

      {[...Array(3)].map((_, i) => (
        <div key={i} className='flex items-center justify-between'>
          <div className='flex items-center gap-4 flex-1 overflow-hidden'>
            <div className='w-10 h-10 relative shrink-0'>
              <Image
                alt=''
                src='https://images.pexels.com/photos/16094038/pexels-photo-16094038.jpeg'
                fill
                className='rounded-full object-cover'
              />
            </div>
            <span className='font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-full'>
              Harvey Boyd
            </span>
          </div>

          <div className='flex justify-end gap-3 shrink-0'>
            <Image
              alt='Accept'
              width={20}
              height={20}
              className='cursor-pointer'
              src='/assets/accept.png'
            />
            <Image
              alt='Reject'
              width={20}
              height={20}
              className='cursor-pointer'
              src='/assets/reject.png'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FriendRequest
