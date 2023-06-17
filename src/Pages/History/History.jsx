
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authporviders";
import { useQuery } from "@tanstack/react-query";

const History = () => {
    const { user } = useContext(AuthContext)
    const { data } = useQuery({
        queryKey: ['enrolled', user.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-lac-ten.vercel.app/enrolled?email=${user.email}`)
            return res.json()
        }

    })

    console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>price</th>
                        <th>TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data?.map((dt, index) => <tr
                            key={dt._id}
                        >
                            <th>{index + 1}</th>
                            <td>{dt.courseName}</td>
                            <td>{dt.price}</td>
                            <td>{dt.transactionId}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default History;