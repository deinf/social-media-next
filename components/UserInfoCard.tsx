import Image from "next/image";
import Link from "next/link";

// Mock function to simulate user data
const getMockUser = (userId?: string) => {
  return {
    id: userId || "default",
    name: "Milton Singleton",
    username: "@jojona",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta neque voluptatem rem, vitae tempora ab quaerat doloremque porro numquam.",
    location: "Denhaag",
    education: "Sky High University",
    work: "International Space Station",
    website: "https://dandevlabs.my.id",
    joined: "30 November 2025",
  };
};

const UserInfoCard = ({ userId }: { userId?: string }) => {
  const user = getMockUser(userId); // safely get mock user

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
          <span className="text-xl text-black leading-none">{user.name}</span>
          <span className="text-sm text-black">{user.username}</span>
        </div>
        <p>{user.bio}</p>
        <div className="flex items-center gap-2">
          <Image src="/assets/map.png" alt="" width={16} height={16} />
          <span className="leading-none">
            Living in <b>{user.location}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/assets/school.png" alt="" width={16} height={16} />
          <span className="leading-none">
            Went to <b>{user.education}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/assets/work.png" alt="" width={16} height={16} />
          <span className="leading-none">
            Works at <b>{user.work}</b>
          </span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <div className="flex gap-1 items-center">
            <Image src="/assets/link.png" alt="" width={16} height={16} />
            <Link
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium leading-none"
            >
              {new URL(user.website).hostname.replace("www.", "")}
            </Link>
          </div>
          <div className="flex gap-1 items-center w-full sm:w-auto justify-start sm:justify-end">
            <Image src="/assets/date.png" alt="" width={16} height={16} />
            <span className="leading-none">Joined {user.joined}</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
