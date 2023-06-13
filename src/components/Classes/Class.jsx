

const Class = ({ course }) => {
    const { _id, image, courseName, students } = course
    console.log(_id);
    return (
        <div>
            <div className="card h-60 mt-6 w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <p className="text-blue-200"><span className="text-yellow-400 font-bold text-2xl">{students}</span> students are doing the course</p>

                </div>
            </div>
        </div>
    );
};

export default Class;