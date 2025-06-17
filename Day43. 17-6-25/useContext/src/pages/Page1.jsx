import React, { useContext } from "react";
import { UserContext } from "../contextPage/ContextPage";

const Page1 = () => {
  const { user, user1 } = useContext(UserContext);
  return (
    <>
      <h1>page1</h1>
      <p>user: {user.name}</p>
      <p>user1: {user1.name}</p>
    </>
  );
};

export default Page1;
