import { BsDot } from "react-icons/bs";


const Pricing = () => {
    return (
        <div className="text-4xl font-semibold text-center">
            <h2>Our Pricing Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-5">
                <div className="card border border-sky-200 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Standar User</h2>
                        <p className="text-blue-500">$49,90/<span className="text-xl">month</span></p>
                        <hr />
                        <div className="text-xl">
                            <ol>
                                <li className="flex"><BsDot></BsDot>3 Language In A Month</li>
                                <li className="flex"><BsDot></BsDot>10 Excercise In A Day</li>
                                <li className="flex"><BsDot></BsDot>5 Live Speaking</li>
                                <li className="flex"><BsDot></BsDot> Get Certificated</li>
                                <li className="flex"><BsDot></BsDot>2 Level Test</li>
                            </ol>
                        </div>
                        <button className="btn btn-active btn-primary px-8 mt-6">Register Now</button>
                    </div>
                </div>


                <div className="card border border-sky-200 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Standar User</h2>
                        <p className="text-blue-500">$99,90/<span className="text-xl">month</span></p>
                        <hr />
                        <div className="text-xl">
                            <ol>
                                <li className="flex"><BsDot></BsDot>5 Language In A Month</li>
                                <li className="flex"><BsDot></BsDot>9 Excercise In A Day</li>
                                <li className="flex"><BsDot></BsDot>5 Live Speaking</li>
                                <li className="flex"><BsDot></BsDot> Get Certificated</li>
                                <li className="flex"><BsDot></BsDot>2 Level Test</li>
                            </ol>
                        </div>
                        <button className="btn btn-active btn-primary px-8 mt-6">Register Now</button>
                    </div>
                </div>

                <div className="card border border-sky-200 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Standar User</h2>
                        <p className="text-blue-500">$79,90/<span className="text-xl">month</span></p>
                        <hr />
                        <div className="text-xl">
                            <ol>
                                <li className="flex"><BsDot></BsDot>10 Language In A Month</li>
                                <li className="flex"><BsDot></BsDot>20 Excercise In A Day</li>
                                <li className="flex"><BsDot></BsDot>5 Live Speaking</li>
                                <li className="flex"><BsDot></BsDot> Get Certificated</li>
                                <li className="flex"><BsDot></BsDot>2 Level Test</li>
                            </ol>
                        </div>
                        <button className="btn btn-active btn-primary px-8 mt-6">Register Now</button>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default Pricing;