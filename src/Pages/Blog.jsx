import Header from "../Componentes/Header";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/ContextApi";
import Card from "../Componentes/Card";
import Spinner from "../Componentes/Spinner";

function Blog() {
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    // const { loading, setLoading } = useContext(ContextApi); can also use this
    const { loading, setLoading } = useContext(ContextApi);

    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

    async function getBlogData() {
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlog(data.relatedBlog);
            console.log(res);
        }
        catch (error) {
            alert("Unable to fetch the related blogs, Check your internet connection and Refresh the page")
        }

        console.log(url);
        setLoading(false);
    }

    useEffect(() => {
        getBlogData();
    }, [location.pathname, location.search]);

    console.log(relatedBlog);
    console.log(blog);

    return (
        <div>
            <Header></Header>
            <div>
                {/* navigation (-1) is used to go back from the present call to prevoiusly made call from it stack */}
                <button
                    onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>

            {/* current blog */}

            (
            loading ? (<Spinner></Spinner>) :(blog ?(
            <div>
                <Card forEachPost={blog} ></Card>
            </div>

            <div className="text-2xl font-bold my-10">Related Blogs</div>

            {relatedBlog.map((forEachPost) => (
                <div key={forEachPost.id}>
                    <Card forEachPost={forEachPost} ></Card>
                </div>
            ))}

            ):<div>Unable to fetch data</div>
            )
            )

        </div >
    )
}

export default Blog;