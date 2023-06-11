import { NavLink } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="flex flex-col justify-center align-middle w-1/2 mx-auto">
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=sph" alt="" />
            <NavLink to='/' className="mx-auto"> <button className="btn btn-warning">Back TO Home</button></NavLink>
        </div>
    );
};

export default NotFound;