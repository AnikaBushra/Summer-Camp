import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleClass from "./SingleClass";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authporviders";
import Swal from "sweetalert2";

const AllClasses = () => {
    const allClasses = useLoaderData()
    console.log(allClasses);
    const { user } = useContext(AuthContext)
    const handleSelect = (id) => {
        if (!user) {
            Swal.fire('You have to log in before select a course')
        }
        const singleData = allClasses.find(data => data._id === id)
        console.log(singleData);
        fetch(`http://localhost:5000/myClass`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleData)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-4">Our All Courses</h2>
            <div className="grid grid-cols-3 m-10 gap-6">
                {
                    allClasses.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                        handleSelect={handleSelect}
                    ></SingleClass>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;