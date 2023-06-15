import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";
import SelectedClasses from "../../components/SelectedClasses/SelectedClasses";


const Dashboard = () => {


    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center my-4">

                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>

                    <SelectedClasses></SelectedClasses>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to='/enrolledClass'><SiGoogleclassroom></SiGoogleclassroom>  My Enrolled Classes</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;