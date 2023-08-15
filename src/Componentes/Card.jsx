import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { NavLink } from "react-router-dom";

function Card({ forEachPost }) {
    return (
        <div className="max-w-3xl mx-auto w-11/12">
            {/* like an anchor tag that connects connect to the path defined  */}
            <NavLink to={`/blog/${forEachPost.id}`}> <h2 className="font-bold text-sm ">{forEachPost.title}</h2> </NavLink>

            <p className="text-[14px]">By <span className="italic">{forEachPost.author}</span> on
                <NavLink to={`/categories/${forEachPost.category.replaceAll(" ", "-")}`}><span className="underline font-bold">{forEachPost.category}</span></NavLink>
            </p>

            <p className="text-[14px]">Posted on <span>{forEachPost.date}</span></p>
            <p className="text-[16px] mt-[13px]">{forEachPost.content}</p>

            <div className="flex flex-wrap gap-x-2 items-center"> {
                forEachPost.tags.map((tag, index) => {
                    return <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</NavLink>
                })
            }
            </div>
        </div >
    )
}
export default Card;