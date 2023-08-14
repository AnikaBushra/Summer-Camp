import { AiOutlineArrowRight } from "react-icons/ai";

const RecentBlog = ({ blog }) => {
    const { image, details, author_image, author_name, date, blog_name } = blog;

    return (
        <div className="rounded-lg bg-gray-100 shadow-md shadow-slate-400">
            <img className="h-60 w-full rounded-lg mb-6" src={image} alt="language learning" />
            <div className="text-justify p-4">
                <h3 className="text-2xl h-20">{blog_name}</h3>

                <p>{details.slice(0, 250)} . . .</p>
                <div className="flex items-center font-bold mb-10 hover:text-blue-400">
                    <button>Read More</button><AiOutlineArrowRight className="mt-1 ms-2 font-bold"></AiOutlineArrowRight>
                </div>
            </div>
            <div className="text-left grid grid-cols-4 w-3/5  p-4">
                <img className="w-10 h-9 rounded-full my-auto" src={author_image} alt="" />
                <div className="col-span-3">
                    <p>{author_name}</p>
                    <p className="text-gray-400">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;