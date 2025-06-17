import React, { useContext } from "react";
import { UserContext } from "../contextPage/ContextPage";

const Page3 = () => {
  const { user, user1 } = useContext(UserContext);

  return (
    <div>
      <h2>Page 3</h2>
      <p>
        User 1: {user.name}, Age: {user.age}
      </p>
      <p>
        User 2: {user1.name}, Age: {user1.age}
      </p>
    </div>
  );
};

export default Page3;
