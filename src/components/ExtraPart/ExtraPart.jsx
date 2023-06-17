import { Slide } from "react-awesome-reveal";

const ExtraPart = () => {
    return (
        <div className="lg:mx-44">
            <Slide>
                <p className="text-3xl font-bold my-10 text-center  ">What Our Students Tell About Us</p>
            </Slide>

            <div className='flex p-10 mx-20'>
                <Slide direction="right">
                    <img className='w-64 mx-10 rounded-full' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1683197559~exp=1683198159~hmac=6e341981b4a06c237a019393551a3ebb5bfd5688bd30dd526a9a89d6161bf53b" alt="" />
                </Slide>


                <Slide >
                    <div>
                        <p className='text-3xl w-96 text-blue-500 my-auto'><i>Helping language learners find the resourses they need</i></p>
                        <p className='text-xl w-96 text-green-600 m-6'>Huang chi</p>
                    </div>
                </Slide>

            </div>
            <div className='flex p-10 mx-20'>
                <Slide direction="right">
                    <div>
                        <p className='text-3xl w-96 text-blue-500 my-auto'><i>Helping language learners find the resourses they need</i></p>
                        <p className='text-xl w-96 text-green-600 m-6'>Ali  ahmed </p>
                    </div>
                </Slide>

                <Slide>
                    <img className='w-64 mx-10 rounded-full' src="https://as2.ftcdn.net/v2/jpg/01/15/85/23/1000_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg" alt="" />
                </Slide>


            </div>
            <div className='flex p-10 mx-20'>
                <Slide direction="right">
                    <img className='w-64 mx-10 rounded-full' src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1683298443~exp=1683299043~hmac=0bdab11d1c5ccc6643dfa2e3b1702d81747920c6592dc0a33d096738751bec39" alt="" />
                </Slide>

                <Slide>
                    <div>
                        <p className='text-3xl w-96 text-blue-500 my-auto'><i>Helping language learners find the resourses they need</i></p>
                        <p className='text-xl w-96 text-green-600 m-6'>Tina Huang</p>
                    </div>
                </Slide>

            </div>
        </div>
    );
};

export default ExtraPart;