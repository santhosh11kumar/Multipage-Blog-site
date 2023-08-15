import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import Spinner from "./Spinner";
import Card from "./Card";

function Content() {

    // using context values
    const { loading, post } = useContext(ContextApi);




    return (
        <div className=" my-[100px]">
            <div className="flex flex-col gap-y-10 my-4">
                {
                    loading ? (<Spinner></Spinner>) :
                        (post.map((forEachPost) => (
                            (
                                <Card key={forEachPost.id} forEachPost={forEachPost}></Card>)
                        )

                        ))
                }
            </div>
        </div>
    );
}
export default Content;