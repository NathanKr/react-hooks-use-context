import React, { useState } from "react";
import Level1 from "./components/Level1";
import { LanguageContext } from "./context/LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("english");
  const langObj = { language };

  return (
    <div style={{ margin: "10px" }}>
      <h4>choose a language (by click) and notice the button text changes</h4>
      <ui>
      <li onClick={() => setLanguage("english")}>us</li>
      <li onClick={() => setLanguage("portuguese")}>br</li>
      </ui>
      <br /><br />
      <LanguageContext.Provider value={langObj}>
        <Level1 />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
