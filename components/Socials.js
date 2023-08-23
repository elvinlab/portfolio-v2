// links
import Link from 'next/link';

// icons
import {
  RiGithubFill,
  RiLinkedinFill,
  RiSendPlaneFill,
  RiFacebookFill,
  RiInstagramLine,
  RiMailSendLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiMailSendLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
