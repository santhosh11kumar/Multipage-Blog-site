import { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Tag from './Pages/Tag';
import Blog from './Pages/Blog';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { ContextApi } from './Context/ContextApi';

function App() {
  const { getData } = useContext(ContextApi);

  const [searchParams, setParams] = useSearchParams(); // used for the accessing the values of url which present after the quesiton mark
  const location = useLocation(); //used to access and change the url 

  useEffect(() => {

    // current page if present get or make it default page  = 1
    const page = searchParams.get("page") ?? 1;

    // do url contains the value tag
    if (location.pathname.includes("tags")) {

      // access the url by making different values of tags and accessing the last value of url 
      // https:abc-def-ghi/tags/software-development   below one returns the last value i.e: software development
      const tag = location.pathname.split("/").at(-1).replaceAll('-', ' ');
      getData(Number(page), tag);  // Number is type cast technqiue for string to int conversion

    }
    // when the click made the anchor tag append the value to url and when url contains category 
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll('-', ' ');
      getData(Number(page), null, category);
    }

    // if no tags and categories then
    else {
      getData(Number(page))
    }

  }, [location.pathname, location.search]); // render on change in url (file destintaion) or change in search paramenter(values after the  ? )


  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/blog/:blogId" element={<Blog />}></Route>
      <Route path="/tags/:tag" element={<Tag />} ></Route>
      <Route path="/categories/:category" element={<Category />}></Route>
    </Routes>
  );
}

export default App;

