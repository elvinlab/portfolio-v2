import { Resources } from "../helpers/constants";

const TopLeftImg = () => {
  return (
    <img
      className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50"
      src={Resources.topLeftImg}
      width={400}
      height={400}
      alt="top left img"
    />
  );
};

export default TopLeftImg;
