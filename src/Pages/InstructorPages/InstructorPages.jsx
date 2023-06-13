import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const InstructorPages = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className='text-4xl font-bold text-center m-10 uppercase'>Our All Instructors</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 m-10 '>
                    {
                        data.map(instructor => <div
                            key={instructor._id}
                            className="card w-96 bg-gray-200 shadow-xl my-6 ">
                            <figure className="px-10 pt-10">
                                <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>Email: <span className="text-xl font-bold">{instructor.email}</span></p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InstructorPages;