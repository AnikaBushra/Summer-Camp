import { FaHome } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { SiGoogleclassroom, SiCoursera } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {


    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center my-4 mx-auto">

                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button ">Open drawer</label>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to='/dashboard'><SiCoursera></SiCoursera>Selected Class</Link></li>
                        <li><Link to='/dashboard/enrolledClass'><SiGoogleclassroom></SiGoogleclassroom>  My Enrolled Classes</Link></li>

                        <li><Link to="/dashboard/history"><BiHistory></BiHistory>Order History</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;