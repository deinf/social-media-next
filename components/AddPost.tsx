import { postOption } from "@/public/data"
import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      <Image className="w-12 h-12 object-cover rounded-full" src="https://images.pexels.com/photos/32954778/pexels-photo-32954778.jpeg" alt="" width={20} height={20}/>
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg flex-1 p-2"/>
          <Image className="w-5 h-5 cursor-pointer self-end" src="/assets/emoji.png" alt="" width={20} height={20}/>
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {
            postOption.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2 cursor-pointer">
                  <Image src={item.image} alt="" width={20} height={20} className="inline-block"/>
                  <span className="leading-none">{item.name}</span>
                </div>
              );
            })
          }
        </div>
      </div>
     
    </div>
  )
}

export default AddPost