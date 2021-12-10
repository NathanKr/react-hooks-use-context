import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Level4 = () => {
  const val = useContext(LanguageContext);

  return (
    <div>
      Level4
      <br />
      <button >{val.language === 'english' ? 'Click' : 'Clique' }</button>
    </div>
  );
};

export default Level4;
