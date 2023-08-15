import { useLocation, useNavigate } from "react-router-dom";
import Content from "../Componentes/Content";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import React from 'react';

function Category() {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
    console.log(category);
    return (
        <div>
            <Header></Header>
            <div className="mt-[100px] -mb-[50px] max-w-2xl mx-auto flex items-center space-x-2 w-11/12">
                <button
                    className="border-2 border-gray-300 py-1 px-4 rounded-md"
                    onClick={() => navigation(-1)}
                >
                    Back
                </button>

                <h2 className="font-bold text-xl"> Blogs on{" "} <span className="underline text-blue-700">#{category}</span></h2>
            </div>

            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Category;