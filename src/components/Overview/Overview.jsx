import { MdPeopleAlt, MdOutlinePeople } from "react-icons/md";
import { FaBookOpen, FaCertificate } from "react-icons/fa";
import CountUp from 'react-countup';
import { Slide } from "react-awesome-reveal";

const Overview = () => {
    return (
        <Slide duration={3000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mx-auto my-32 w-4/5">
                <div className="flex bg-blue-100  items-center rounded-lg p-2">
                    <MdPeopleAlt className="w-full h-1/2 text-blue-500"></MdPeopleAlt>
                    <div className="p-4">
                        <p className="text-4xl font-bold"><CountUp
                            start={2440}
                            end={2455}
                            duration={10}
                        >2455</CountUp><span>+</span></p>
                        <p>Students</p>
                    </div>
                </div>
                <div className="flex bg-green-200 items-center rounded-lg">
                    <MdOutlinePeople className="w-full h-1/2 text-green-500"></MdOutlinePeople>
                    <div>
                        <p className="text-4xl font-bold "><CountUp
                            start={30}
                            end={40}
                            duration={10}
                        >40</CountUp>+</p>
                        <p>Certified Instructors</p>
                    </div>
                </div>
                <div className="flex bg-yellow-100 items-center rounded-lg">
                    <FaBookOpen className="w-1/2 h-1/2 text-yellow-500 mx-auto"></FaBookOpen>
                    <div className="p-4">
                        <p className="text-4xl font-bold"><CountUp
                            start={330}
                            end={340}
                            duration={10}
                        >340</CountUp>+</p>
                        <p>Courses</p>
                    </div>
                </div>
                <div className="flex bg-blue-200 items-center rounded-lg p-2">
                    <FaCertificate className="w-2/3 h-1/2 text-blue-500"></FaCertificate>
                    <div>
                        <p className="text-4xl font-bold "><CountUp
                            start={2330}
                            end={2400}
                            duration={10}
                        ></CountUp>+</p>
                        <p>Graduate Students</p>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Overview;