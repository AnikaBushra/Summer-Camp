import { MdPeopleAlt, MdOutlinePeople } from "react-icons/md";
import { FaBookOpen, FaCertificate } from "react-icons/fa";


const Overview = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-20 md:mx-4 mx-2">
            <div className="grid grid-cols-2 bg-blue-100  items-center">
                <MdPeopleAlt className="w-full h-1/2 text-blue-500"></MdPeopleAlt>
                <div>
                    <p className="text-4xl font-bold ">2340+</p>
                    <p>Students</p>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-green-200 items-center">
                <MdOutlinePeople className="w-full h-1/2 text-green-500"></MdOutlinePeople>
                <div>
                    <p className="text-4xl font-bold ">40+</p>
                    <p>Certified Instructors</p>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-yellow-100 items-center">
                <FaBookOpen className="w-1/2 h-1/2 text-yellow-500 mx-auto"></FaBookOpen>
                <div>
                    <p className="text-4xl font-bold ">340+</p>
                    <p>Courses</p>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-blue-200 items-center">
                <FaCertificate className="w-full h-1/2 text-blue-500"></FaCertificate>
                <div>
                    <p className="text-4xl font-bold ">2340+</p>
                    <p>Graduate Students</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;