import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";


const Instructors = () => {
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = fetch('https://summer-camp-server-lac-ten.vercel.app/instructors')

            return (await res).json()
        }
    })

    return (
        <>
            <h3 className='text-4xl font-bold text-center m-10 '>Our Popular Instructors</h3>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 m-4'>
                {
                    data?.sort((a, b) => a.numberOfStudents
                        > b.numberOfStudents
                        ? 1 : -1).slice(0, 6).map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                }
            </div>
        </>
    );
};

export default Instructors;