import { createContext, useEffect, useState } from "react";
import { BaseUrl } from "../Componentes/BaseUrl";
import { useNavigate } from "react-router-dom";


export const ContextApi = createContext(); // using the inbuilt function create context

export default function ContextApiProvider({ children }) {
    // children should be same as  c-h-i-l-d-r-e-n
    // state variables(the dynamic values which are used frequently in many pages)
    const [loading, setLoading] = useState(false);
    const [post, setpost] = useState([]); // data
    const [page, setPage] = useState(1); // initital page to show
    const [TotalPages, setTotalPages] = useState(null);
    const Navigate = useNavigate();

    async function getData(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${BaseUrl}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }
        try {
            const url_data = await fetch(url);
            const data = await url_data.json();
            setPage(data.page);
            setpost(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            alert("Error in  fecting data");
        }
        setLoading(false);

    }



    function handlePagesPrevNext(page) {
        Navigate({ search: `?page=${page}` });
        setPage(page);
    }




    //above function are not been sent
    // when we want to set the data then we will access the varibles and function values and store 

    const ValuesToSend = {
        getData,
        loading,
        setLoading,
        post,
        setpost,
        page,
        setPage,
        TotalPages,
        setTotalPages,
        handlePagesPrevNext
    };

    // values are passed to App component

    return <ContextApi.Provider value={ValuesToSend}>
        {children}
    </ContextApi.Provider>



}
