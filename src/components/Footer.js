import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
    <div className="socials flex flex-row justify-around bg-color-primary px-8 py-4" >
        <div className=" text-base text-black font-bold w-1/2 mx-60">
            &copy; SendiT 2023. All rights reserved.
        </div>
        <div className='flex items-center justify-evenly w-1/2 text-white text-3xl mr-60'>
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
        </div>
   </div>
    );
}
 
export default Footer;