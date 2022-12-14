import React, { createContext, useState } from "react";

export let AuthContext = createContext(0);
export default function AuthContextProvider(props) {
  const [userData, setUserData] = useState(null);
  return (
    <>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
