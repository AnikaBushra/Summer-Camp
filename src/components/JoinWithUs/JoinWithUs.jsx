import { CiBullhorn, CiFaceSmile } from "react-icons/ci";
import { GiNetworkBars, GiOpenBook } from "react-icons/gi";
import './JoinWithUs.css';
import { Slide } from "react-awesome-reveal";

const JoinWithUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 bg-gray-200">
            <div className="my-auto">
                <img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=sph" alt="" />
            </div>
            <div className="md:my-12 md:p-10 ">
                <Slide duration={1000} direction={"right"}>
                    <p className="text-2xl text-blue-400">Join With Us</p>
                </Slide>
                <div className="text-4xl font-semibold leading-snug">
                    <p>Find out why should </p>
                    <p>you learn with New Beginnnings</p>
                </div>

                <div className="grid grid-cols-2 md:gap-16 p-4 md:py-10">
                    <Slide duration={1500} direction={"left"}>
                        <div className="grid grid-cols-4 gap-0  rounded-md p-4">

                            <CiBullhorn data-aos="fade-right" className="w-10 h-10 p-1 text-green-500 bg-green-200 rounded-full"></CiBullhorn>
                            <div className="text-xl col-span-3">
                                <p className="">Create Account</p>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                            </div>

                        </div>
                    </Slide>
                    <Slide duration={1400} direction={"right"}>
                        <div className="grid grid-cols-4 gap-0  rounded-md p-4">
                            <div className="bg-blue-200 rounded-full w-10 h-10">
                                <GiNetworkBars className="w-10 h-10 p-2 text-blue-500 "></GiNetworkBars>
                            </div>
                            <div className="text-xl col-span-3">
                                <p className="">
                                    Learn Your Skill</p>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide duration={1300} direction={"left"}>
                        <div className="grid grid-cols-4 gap-0  rounded-md p-4">
                            <CiFaceSmile className="w-10 h-10 p-1 text-yellow-500 bg-yellow-100 rounded-full"></CiFaceSmile>
                            <div className="text-xl col-span-3">
                                <p className="">
                                    Success Story</p>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide duration={1200} direction={"right"}>
                        <div className="grid grid-cols-4 gap-0  rounded-md p-4">
                            <div className="w-10 h-10 bg-orange-200 rounded-full">
                                <GiOpenBook className="w-full h-full p-2 text-orange-500"></GiOpenBook>
                            </div>
                            <div className="text-xl col-span-3">
                                <p className="">
                                    Select Course</p>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default JoinWithUs;