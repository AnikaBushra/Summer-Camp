import Banner from "../../components/Banner/Banner";
import Classes from "../../components/Classes/Classes";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Classes></Classes>
            <Footer></Footer>
        </div>
    );
};

export default Home;