import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import Content from "../Componentes/Content";
import Footer from "../Componentes/Footer";

function Tag() {
    const navigation = useNavigate(); // for accessing the curr route call
    const curr_url = useLocation();
    const curr_tag = curr_url.pathname.split("/").at(-1).replaceAll("-", " ");// getting the tag which have called
    return (
        <div className="mt-[100px]">
            <Header></Header>

            <div className="max-w-2xl mx-auto flex items-center space-x-2 w-11/12 -mb-[50px]">
                <button
                    className="border-2 border-gray-300 py-1 px-4 rounded-md"
                    onClick={() => navigation(-1)}

                >
                    Back
                </button>

                <h2 className="font-bold text-xl">Blogs Tagged <span className="underline text-blue-700">#{curr_tag}</span></h2>
            </div>

            <Content></Content>
            <Footer></Footer>


        </div >
    )
}
export default Tag;