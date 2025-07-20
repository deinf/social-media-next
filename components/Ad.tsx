import Image from 'next/image'

const Ad = ({ size }:{ size: "sm" | "md" | "lg" }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        <div className='flex items-center justify-between text-shadow-gray-500 font-medium'>
            <span>Sponsored Ads</span>
            <Image src="/assets/more.png" alt='' width={16} height={16} />
        </div>

        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48" }`}>
                <Image 
                    src="https://images.pexels.com/photos/32755775/pexels-photo-32755775.jpeg"
                    alt=''
                    fill
                    className='rounded-lg object-cover'
                />
            </div>
            <div className='flex items-center gap-4'>
                <Image 
                    src="https://images.pexels.com/photos/32755775/pexels-photo-32755775.jpeg"
                    alt=''
                    width={24}
                    height={24}
                    className='rounded-full w-6 h-6 object-cover'
                />
                <span className='text-blue-500 font-medium leading-none'>Computer Sci</span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                {
                    size === "sm" ?
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    : size === "md"
                    ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, explicabo! Laborum, praesentium!"
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam minima ipsum quod exercitationem natus nam, eos ratione iste quasi?"

                }
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg cursor-pointer'>Learn more</button>
        </div>
    </div>
  )
}

export default Ad