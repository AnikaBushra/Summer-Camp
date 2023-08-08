import { AiOutlineArrowRight } from "react-icons/ai";

const RecentBlogs = () => {
    return (
        <div>
            <div className="hero-content text-center flex flex-col md:m-10">
                <h1 className="text-3xl my-10">Recent Blogs And Articles</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="text-left">
                            <img
                                className="h-1/3"
                                src="https://img.freepik.com/free-vector/hand-drawn-english-school-illustration_23-2149491453.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais" alt="kids playing" />
                            <div>
                                <h2 className="text-3xl text-bold my-4"><i>8 Most Asked Questions About The Ielts Exam</i></h2>
                                <p>IELTS is a standardized test designed to assess the language proficiency of non-native English speakers. It measures their ability to listen, read, write, and speak in English. IELTS scores are often used for university admissions, visa applications, and employment purposes.</p>
                                <button className="font-bold my-2 flex">Read More<AiOutlineArrowRight className="m-2"></AiOutlineArrowRight></button>
                            </div>
                        </div>
                        <div className="text-left">
                            <img
                                className="h-1/3"
                                src="https://img.freepik.com/free-photo/young-english-teacher-doing-her-class-online_23-2149019784.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais" alt="kids playing" />
                            <div>
                                <h2 className="text-3xl text-bold my-4"><i>8 Most Asked Questions About The Ielts Exam</i></h2>
                                <p>IELTS is a standardized test designed to assess the language proficiency of non-native English speakers. It measures their ability to listen, read, write, and speak in English. IELTS scores are often used for university admissions, visa applications, and employment purposes.</p>
                                <button className="font-bold my-2 flex">Read More<AiOutlineArrowRight className="m-2"></AiOutlineArrowRight></button>
                            </div>
                        </div>
                        <div className="text-left">
                            <img
                                className="h-1/3"
                                src="https://img.freepik.com/free-vector/hand-drawn-english-school-illustration_23-2149491453.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais" alt="kids playing" />
                            <div>
                                <h2 className="text-3xl text-bold my-4"><i>8 Most Asked Questions About The Ielts Exam</i></h2>
                                <p>IELTS is a standardized test designed to assess the language proficiency of non-native English speakers. It measures their ability to listen, read, write, and speak in English. IELTS scores are often used for university admissions, visa applications, and employment purposes.</p>
                                <button className="font-bold my-2 flex">Read More<AiOutlineArrowRight className="m-2"></AiOutlineArrowRight></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;