import Banner from "../../components/Banner/Banner";
import Classes from "../../components/Classes/Classes";
import Footer from "../../components/Footer/Footer";
import Instructors from "../../components/Instructors/Instructors";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <Footer></Footer>
        </div>
    );
};

export default Home;