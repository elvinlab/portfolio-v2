import Link from "next/link";

import { Bio } from "../helpers/constants";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiMailSendFill,
  RiTwitterFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl text-secondary">
      <Link
        target="_blank"
        href={Bio.github}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiGithubFill />
      </Link>
      <Link
        target="_blank"
        href={Bio.mail}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiMailSendFill />
      </Link>
      <Link
        target="_blank"
        href={Bio.linkedin}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        target="_blank"
        href={Bio.facebook}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiFacebookFill />
      </Link>
      <Link
        target="_blank"
        href={Bio.instagram}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiInstagramFill />
      </Link>
      <Link
        target="_blank"
        href={Bio.twitter}
        className="hover:text-accent transition-all duration-300"
        rel="noopener noreferrer"
      >
        <RiTwitterFill />
      </Link>
    </div>
  );
};

export default Socials;
