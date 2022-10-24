import React from "react";
import "./App.css";

//Context Api (Without useContext)
// import CompA from "./Component/ContextApi(without useContext)/CompA";

//Google Keep
import Main from "./Component/GOOGLE_KEEP_CLONE/Main";

const App = () => {
  return (
    <>
      <div className="App">
        {/* //Context Api (Without useContext) */}
        {/* <CompA /> */}

        {/* //Google Keep */}
        <Main />
      </div>
    </>
  );
};

export default App;
