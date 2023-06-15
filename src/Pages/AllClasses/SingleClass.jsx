import { useContext } from "react";
import { AuthContext } from "../../Providers/Authporviders";
import Swal from "sweetalert2";


const SingleClass = ({ singleClass }) => {

    const { user } = useContext(AuthContext)
    const { image, name, courseName, seats, price } = singleClass;
    const handleSelect = () => {
        if (!user) {
            Swal.fire('You have to log in before select a course')
        }
    }
    return (
        <div>
            <div className={`card w-96 bg-base-100 shadow-xl ${seats === 0 ? "bg-red-400" : ""}`}>
                <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {courseName}

                    </h2>
                    <p>Instructor Name: {name}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Price : ${price}</div>
                        <div className="badge badge-outline">{seats} are available</div>
                    </div>
                    <div className="card-actions mx-auto">
                        <button onClick={handleSelect}
                            disabled={seats === 0 ? true : false}
                            className="btn btn-outline btn-warning mt-6">Select Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;