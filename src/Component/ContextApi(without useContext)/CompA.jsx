import React, { createContext } from "react";
import CompB from "./CompB";
const FirstName = createContext();
const LastName = createContext();
const CompA = () => {
  return (
    <>
      <FirstName.Provider value={"Mofijul"}>
        <LastName.Provider value={"Haque"}>
          <CompB />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default CompA;
export { FirstName , LastName}; //Because every component have only one "export default";
