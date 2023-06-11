import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h3 className="text-5xl web-name"><i>New Bginings</i></h3>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <p className="footer-title">Contact Us</p>
                    <p>+8801211212</p>
                    <p>Bonani,  Dhaka</p>
                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <Link to=''><FaFacebookF></FaFacebookF></Link>
                        <Link to=''><FaLinkedinIn></FaLinkedinIn></Link>
                        <Link to=''><FaTwitter></FaTwitter></Link>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;