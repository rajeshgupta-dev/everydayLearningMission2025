import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
  return (
    <>
      <Home />

      <Routes>
        <Route path="page1" element={<Page1 />}></Route>
        <Route path="page2" element={<Page2 />}></Route>
        <Route path="page3" element={<Page3 />}></Route>
      </Routes>
    </>
  );
};

export default App;
