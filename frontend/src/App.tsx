import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  function isLoggedIn() {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  return (
    <>
      <div className="wrapper w-full h-screen overflow-x-hidden">
        <Routes>
          <Route index element={loggedIn ? <Blogs /> : <Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/publish" element={<Publish />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
