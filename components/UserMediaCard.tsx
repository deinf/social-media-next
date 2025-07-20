import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({ userId } : { userId? : String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex gap-4 flex-wrap">        
          {
            [...Array(8)].map((_, i) => (
                <div className="relative w-1/5 h-24">
                  <Image src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg" alt="" fill className="object-cover rounded-md"/>
                </div>
            ))
          }
      </div>
       
    </div>
  )
}

export default UserMediaCard