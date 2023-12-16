
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="socials flex flex-row justify-around bg-color-primary py-4 rounded-lg my-4">
      <div className="text-base text-black font-bold w-1/2 sm:mx-8 md:mx-16 lg:mx-44 py-4">
        &copy; SendiT 2023. All rights reserved.
      </div>
      <div className='flex items-center justify-evenly w-1/2 text-white text-xl mx-4 sm:mx-8 md:mx-16 lg:mr-60'>
      <h3 className='text-xl font-bold text-black'>Follow Us</h3>
          <ul className="social-icons flex justify-between">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
