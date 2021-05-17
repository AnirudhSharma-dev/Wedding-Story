import React, { createContext, useState } from "react";

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    uid: "",
    phone: "",
    isLoggedIn: null,
    // profilePhotoUrl: "default",
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
