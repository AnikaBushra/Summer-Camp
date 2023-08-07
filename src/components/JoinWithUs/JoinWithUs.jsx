import { CiBullhorn } from "react-icons/ci";


const JoinWithUs = () => {
    return (
        <div style={{ height: '800px' }} className="grid grid-cols-1 md:grid-cols-2 my-20">

            <div className="my-auto">
                <img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=sph" alt="" />
            </div>
            <div className="p-4 md:p-10">
                <p className="text-2xl text-blue-400">Join With Us</p>
                <p className="text-4xl font-semibold">Find out why should you learn with us</p>
                <div className="grid grid-cols-2 gap-4 p-4 md:py-10">
                    <div className="w-2/3 font-semibold">
                        <div className="flex">
                            <CiBullhorn className="w-20"></CiBullhorn><p className="text-2xl flex">Interactive Language Lessons</p>
                        </div>
                        <p className="text-gray-500 ms-10">The language learning website offers a range of interactive lessons designed to cater to various proficiency levels.</p>
                    </div>
                    <div className="w-2/3 font-semibold">
                        <div className="flex">
                            <CiBullhorn className="w-20"></CiBullhorn><p className="text-2xl flex">Diverse Language Selection</p>
                        </div>
                        <p className="text-gray-500 ms-10">With a comprehensive selection of languages to choose from, users can learn popular languages like Spanish, French, Mandarin.</p>
                    </div>
                    <div className="w-2/3 font-semibold">
                        <div className="flex">
                            <CiBullhorn className="w-20"></CiBullhorn><p className="text-2xl flex">Personalized Learning Paths</p>
                        </div>
                        <p className="text-gray-500 ms-10">The language learning website offers a range of interactive lessons designed to cater to various proficiency levels.</p>
                    </div>
                    <div className="w-2/3 font-semibold">
                        <div className="flex">
                            <CiBullhorn className="w-20"></CiBullhorn><p className="text-2xl flex">Engaging Practice Activities</p>
                        </div>
                        <p className="text-gray-500 ms-10"> To reinforce learning, the website ng practice activities, such as quizzes, games, speaking exercises.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JoinWithUs;