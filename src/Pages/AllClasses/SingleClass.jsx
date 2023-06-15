
const SingleClass = ({ singleClass, handleSelect }) => {


    const { image, name, courseName, seats, price, _id } = singleClass;

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
                        <button onClick={() => handleSelect(_id)}
                            disabled={seats === 0 ? true : false}
                            className="btn btn-outline btn-warning mt-6">Select Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;