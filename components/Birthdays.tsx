import Image from 'next/image'
import Link from 'next/link'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 overflow-hidden flex-1'>
          <div className="w-10 h-10 relative shrink-0">
            <Image
              alt=''
              src="https://images.pexels.com/photos/16094038/pexels-photo-16094038.jpeg"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className='font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-full'>
            Harvey Boyd
          </span>
        </div>

        <div className='flex justify-end gap-3 ml-3'>
          <button className='text-white bg-blue-500 text-xs px-2 py-1 rounded-sm'>
            Celebrate
          </button>
        </div>
      </div>

      <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
        <Image
            alt=''
            src="/assets/gift.png"
            width={24}
            height={24}
            className="rounded-full object-cover w-10 h-10"
        />
        <Link href="/" className='flex flex-col gap-1 text-xs'>
            <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
            <span className='text-gray-500'>USee other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays
