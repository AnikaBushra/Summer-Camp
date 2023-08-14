import Banner from "../../components/Banner/Banner";
import Classes from "../../components/Classes/Classes";
import ExtraPart from "../../components/ExtraPart/ExtraPart";
import Footer from "../../components/Footer/Footer";
import Instructors from "../../components/Instructors/Instructors";
import JoinWithUs from "../../components/JoinWithUs/JoinWithUs";
import Navbar from "../../components/Navbar/Navbar";
import Overview from "../../components/Overview/Overview";

import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <JoinWithUs></JoinWithUs>
            <Overview></Overview>
            <RecentBlogs></RecentBlogs>

            <ExtraPart></ExtraPart>
            <Footer></Footer>
        </div>
    );
};

export default Home;