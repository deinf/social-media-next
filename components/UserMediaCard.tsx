import Image from "next/image";
import Link from "next/link";

// Mock function to simulate user-specific media
const getMockUserMedia = (userId?: string) => {
  const baseImage = "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg";
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: `${userId || "guest"}-${i}`,
    url: baseImage + `?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940&uid=${userId || "guest"}-${i}`
  }));
  return images;
};

const UserMediaCard = ({ userId }: { userId?: string }) => {
  const media = getMockUserMedia(userId);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex gap-4 flex-wrap">
        {media.map((item) => (
          <div key={item.id} className="relative w-1/5 h-24">
            <Image
              src={item.url}
              alt="User Media"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMediaCard;
