import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { navlinks } from "@/public/data";
import Image from "next/image";
import ClerkSignInSignUp from "./ClerkSignInSignUp";


const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-600 uppercase">FriendsBook</Link>
        </div>
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
            <div className="flex gap-6 text-gray-600">
                {
                    navlinks.slice(0, 3).map((item, index) => {
                        return (
                            <Link href={item.path} className="flex gap-2 items-center leading-none" key={index}>
                                <Image src={item.image} alt={item.name} width={16} height={16} className="w-4 h-4 block"/>
                                <span>{item.name}</span>
                            </Link>
                        );
                    })
                }
            </div>
            <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                <input type="text" placeholder="search..." className="bg-transparent outline-none" />
                <Image src='/assets/search.png' alt="" width={14} height={14}/>
            </div>
        </div>
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkSignInSignUp/>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar