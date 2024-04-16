import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import PageNotFound from "./components/PageNotFound";
import Shirt from "./components/pages/Shirt";
import Jeans from "./components/pages/Jeans";
import UserDetails from "./components/pages/UserDetails";
import Admin from "./components/Admin";
import Search from "./components/Search";
import FormValidation from "./components/FormValidation";
const App = () => {
  // const navigate = useNavigate();
  // const navigateTo = (url) => {
  //   navigate(url);
  // };
  // const navigateToWhere = () => {
  //   const name = "Narendra";
  //   if (name === "Narendra") {
  //     navigate("/about");
  //   } else {
  //     navigate("/contact");
  //   }
  // };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Shirt />} />
          <Route path="shirt" element={<Shirt />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/admin" element={<Admin />} />
        <Route path="/search" element={<Search />}></Route>
        <Route path="/formvalidation" element={<FormValidation />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <button
        className="border-2 bg-blue-500 text-white p-1"
        onClick={() => navigateTo("/")}
      >
        Home
      </button>
      <button
        className="border-2 bg-blue-500 text-white m-4 p-1"
        onClick={() => navigate("/about")}
      >
        About
      </button>
      <button
        className="border-2 bg-blue-500 text-white p-1"
        onClick={() => navigateTo("/contact")}
      >
        Contact
      </button>
      <button
        className="border-2 bg-purple-500 text-white p-1 ml-1"
        onClick={() => navigateToWhere()}
      >
        Click Me{" "}
      </button>
      <button
        className="border-2 bg-zinc-500 text-white p-1 ml-1"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button> */}
    </>
  );
};

export default App;
