import React from "react";
import Accordion from "../components/accordion/accordion";
import RappersSlice from "../components/accordion/RappersSlice";
import GenreNames from "../components/accordion/GenreNames";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* <GenreNames /> */}
      <Accordion />
      {/* <RappersSlice/> */}
    </div>
  );
};

export default Home;
