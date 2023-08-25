import Image from "next/image";

const Avatar = () => {
  return (
    <div className="group relative">
      <div className="transform scale-95 group-hover:motion-safe:animate-spin">
        <div className="hidden xl:flex xl:max-w-none">
          <Image
            src={"/header-img.svg"}
            width={0}
            height={0}
            alt=""
            className="translate-z-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
