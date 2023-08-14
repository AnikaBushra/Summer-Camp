import { useEffect, useState } from "react";

import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-gray-200">
            <div className="hero-content text-center flex flex-col md:m-10">
                <h1 className="text-3xl my-10">Recent Blogs And Articles</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-2 ">
                        {
                            blogs.map(blog => <RecentBlog
                                key={blog._id}
                                blog={blog}
                            ></RecentBlog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;