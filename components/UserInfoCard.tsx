import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({ userId } : { userId? : String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-start flex-col">
          <span className="text-xl text-black leading-none">Milton Singleton</span>
          <span className="text-smtext-black">@jojona</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta neque voluptatem rem, vitae tempora ab quaerat doloremque porro numquam.</p>
        <div className="flex items-center gap-2">
          <Image src="/assets/map.png" alt="" width={16} height={16} />
          <span className="leading-none">Living in <b>Denhaag</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/assets/school.png" alt="" width={16} height={16} />
          <span className="leading-none">Went to <b>Sky High University</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/assets/work.png" alt="" width={16} height={16} />
          <span className="leading-none">Works at <b>International Space Station</b></span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <div className="flex gap-1 items-center">
             <Image src="/assets/link.png" alt="" width={16} height={16} />
             <Link href="https://dandevlabs.my.id" className="text-blue-500 font-medium leading-none">
              dandevlabs
             </Link>
          </div>
           <div className="flex gap-1 items-center w-full sm:w-auto justify-start sm:justify-end">
             <Image src="/assets/date.png" alt="" width={16} height={16} />
             <span className="leading-none">Joined 30 November 2025</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard