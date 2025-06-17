import React, { createContext, useState } from 'react';

// export const UserContext = createContext(null);

const UserContext = createContext(null);

export { UserContext };


const ContextPage = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John',
    age: 30
  });

  const [user1] = useState({
    name: 'Jane',
    age: 25
  });

  return (
    <UserContext.Provider value={{ user, setUser, user1 }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextPage;
