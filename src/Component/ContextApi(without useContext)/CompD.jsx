import React from "react";
import { FirstName, LastName } from "./CompA";
const CompD = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>
                      <div>- - - - ComponetD - - - -</div>
                      My First Name is {fname} & Last Name is {lname}
                    </h1>
                    ;
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompD;
