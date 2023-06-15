import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleClass from "./SingleClass";


const AllClasses = () => {
    const allClasses = useLoaderData()
    console.log(allClasses);
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-4">Our All Courses</h2>
            <div className="grid grid-cols-3 m-10 gap-6">
                {
                    allClasses.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;