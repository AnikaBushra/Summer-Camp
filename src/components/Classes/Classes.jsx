import { useQuery } from '@tanstack/react-query'
import Class from './Class';

const Classes = () => {

    const { data } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')

            return res.json()
        },
    })
    console.log(data);
    return (
        <>
            <h3 className='text-4xl font-bold text-center mt-10'>Our Popular Classes</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 m-10'>
                {
                    data?.sort((a, b) => a.students > b.students ? 1 : -1).map(course => <Class
                        key={course._id}
                        course={course}
                    ></Class>)
                }
            </div>
        </>
    );
};

export default Classes;