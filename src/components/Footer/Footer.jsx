import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdLocationPin, MdEmail } from 'react-icons/md';



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-3">
                <div>
                    <h3 className="text-5xl web-name"><i>New Bginings</i></h3>
                    <p className="my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus rem optio nobis inventore adipisci nulla officia tempora repellendus nemo?</p>
                    <div className="flex justify-center">
                        <Link to=''><FaFacebookF className="bg-black w-10 p-2 rounded-full h-10"></FaFacebookF></Link>
                        <Link to=''><FaLinkedinIn className="bg-black w-10 mx-4 p-2 rounded-full h-10"></FaLinkedinIn></Link>
                        <Link to=''><FaTwitter className="bg-black w-10 p-2 rounded-full h-10"></FaTwitter></Link>
                    </div>

                </div>
                <div className="m-auto">
                    <p className="footer-title text-xl">Useful Links</p>
                    <p>Privacy Policy</p>
                    <p>Terms And services</p>

                    <p>FAQ</p>
                </div>

                <div className="m-auto">
                    <span className="footer-title text-xl">Stay Connected</span>

                    <div className="flex items-center mt-2">
                        <MdLocationPin className="w-8 h-8"></MdLocationPin> <p> Jl. Sunset Road No.815, Kuta</p>
                    </div>
                    <div className="flex items-center"><MdEmail className="w-6 h-6 mx-1"></MdEmail><p>support@domain.com</p></div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;