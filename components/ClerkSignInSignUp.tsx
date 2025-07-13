import { signedIn } from "@/public/data";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const ClerkSignInSignUp = () => {
  return (
    <div className="hidden md:flex">
        <ClerkLoading>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-gray-500" role="status"/>
        </ClerkLoading>
        <ClerkLoaded>
            <SignedIn>
                <div className="flex items-center gap-5 flex-row">
                    {
                        signedIn.map((item, index) => {
                            return (
                                <div className="cursor-pointer" key={index}>
                                    <Image src={item.image} width={20} height={20} alt=""/>
                                </div>
                            );
                        })
                    }
                <UserButton/>
                </div>
            </SignedIn>

            <SignedOut>
                <Link href="/sign-in" className="flex items-center gap-2 text-sm leading-none">
                    <div className="w-5 h-5 relative">
                        <Image
                        src="/assets/account.png"
                        alt="Account icon"
                        fill
                        className="block"
                        />
                    </div>
                    <span>Login/Register</span>
                </Link>

            </SignedOut>
        </ClerkLoaded>
    </div>
  )
}

export default ClerkSignInSignUp