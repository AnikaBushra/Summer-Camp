

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/different-language-speech-bubble-hello-concept_53876-132626.jpg?w=740&t=st=1686627642~exp=1686628242~hmac=ab9a9ba78dca140126861c8cb74d9a61321137ca9eb717eb33c92784abafa817" className="w-1/2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2  bg-black bg-blend-multiply opacity-50 h-full items-center">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="  absolute left-1/2 top-14 text-white m-20">
                        <p className="uppercase text-5xl
                    font-semibold text-white">Learn new language and move forward</p>
                        <p className="my-10">Learn a new language this summer.Learnin with new beginings is fun</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <img src="https://img.freepik.com/free-photo/i-love-being-teacher-screenshot-latin-young-woman-giving-english-class-through-video-call_662251-2228.jpg?w=740&t=st=1686628393~exp=1686628993~hmac=fa33c2e4329270561ba8b60107bdbf11918769ac14a846e4521490b15641c65d" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2  bg-black bg-blend-multiply opacity-50 h-full items-center">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute right-1/2 top-14 text-white m-20">
                        <p className="uppercase text-5xl
                    font-semibold text-white">Learn new language and move forward</p>
                        <p className="my-10">Learn a new language this summer.Learnin with new beginings is fun</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/young-woman-teaching-english-lessons_23-2149019790.jpg?w=740&t=st=1686628307~exp=1686628907~hmac=fda37b432852d07efb06678209f7eebe6adb4c1cbe46b66fffef76d7ef17cf2e" className="w-2/3" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2  bg-black bg-blend-multiply opacity-50 h-full items-center">
                        <a href="#slide2" className="btn btn-circle">❮</a>

                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="  absolute left-1/2 top-14 text-white m-20">
                        <p className="uppercase text-5xl
                    font-semibold text-white">Learn new language and move forward</p>
                        <p className="my-10">Learn a new language this summer.Learnin with new beginings is fun</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;