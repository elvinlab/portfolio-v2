import { Bio } from "../helpers/constants";


const ResumeBtn = () => {
  return (
    <div className="relative mx-auto xl:mx-0">
      <a
        href={Bio.resume}
        target="_blank"
        className="inline-flex items-center px-6 py-3 text-2xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-center mr-2 mb-2"
      >
        Resume
        <svg
          className="w-3.5 h-3.5 ml-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <div className="absolute animate-ping right-0 top-0 transform scale-95 animate-custom-bounce">
          <div className="h-3 w-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  rounded-full "></div>
        </div>
      </a>
    </div>
  );
};

export default ResumeBtn;
