import { createContext } from "react";
import { Genres, RapperData } from "../frontend assets/data";

export const MyAppContext = createContext();

const MyContextProvider = (props) => {
  const value = {
    RapperData,
    Genres,
  };

  return (
    <MyAppContext.Provider value={value}>
      {props.children}
    </MyAppContext.Provider>
  );
};

export default MyContextProvider;
