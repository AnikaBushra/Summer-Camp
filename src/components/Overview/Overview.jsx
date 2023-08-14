import { MdPeopleAlt, MdOutlinePeople } from "react-icons/md";
import { FaBookOpen, FaCertificate } from "react-icons/fa";
import CountUp from 'react-countup';

const Overview = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20 md:mx-4 mx-2">
            <div className="flex bg-blue-100  items-center">
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
            <div className="flex bg-green-200 items-center">
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
            <div className="flex bg-yellow-100 items-center">
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
            <div className="flex bg-blue-200 items-center">
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
    );
};

export default Overview;