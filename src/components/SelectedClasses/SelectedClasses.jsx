import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authporviders";
import { AiFillDelete } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

const SelectedClasses = () => {
    const { user } = useContext(AuthContext)
    const { data } = useQuery({
        queryKey: ['myClass', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClass?email=${user.email}`)
            return res.json()
        }

    })
    console.log(data)
    return (
        <div>
            <h3 className="text-3xl font-bold my-6">My Selected Classes</h3>
            <div className="overflow-x-auto my-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((table, index) => <tr
                                key={table._id}>
                                <th>{index + 1}</th>
                                <td>{table.courseName}</td>
                                <td>{table.name}</td>
                                <td>$ {table.price}</td>
                                <td><MdPayment className="bg-red-200 w-8 h-8 rounded"></MdPayment></td>
                                <td><AiFillDelete className="bg-red-200 w-8 h-8 rounded"></AiFillDelete></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SelectedClasses;