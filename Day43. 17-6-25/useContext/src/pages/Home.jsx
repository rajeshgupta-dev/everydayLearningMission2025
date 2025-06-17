import React from "react";
import { Link ,Navigate} from "react-router-dom";

const Home = () => {
  return (
    <div>
    
      
    <Link to="page1">Page1</Link>
    <Link to="/page2">Page2</Link>
    <Link to="/page3">Page3</Link>
      
    </div>
  );
};

export default Home;
