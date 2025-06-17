import React, { useContext } from "react";
import { UserContext } from "../contextPage/ContextPage";
const Page2 = () => {
  const { user, user1 } = useContext(UserContext);
  return (
    <>
      <h2>Page 2</h2>
      <p>
        User 1: {user.name}, Age: {user.age}
      </p>
      <p>
        User 2: {user1.name}, Age: {user1.age}
      </p>
    </>
  );
};

export default Page2;
