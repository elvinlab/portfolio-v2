// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/header-img.svg"}
        width={0}
        height={0}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
