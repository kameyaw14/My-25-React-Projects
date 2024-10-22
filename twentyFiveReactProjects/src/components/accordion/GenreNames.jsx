import React, { useContext } from "react";
import { MyAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";


const GenreNames = () => {

    const {Genres}= useContext(MyAppContext)

  return (
    <div>
      <h2>Genres</h2>
      {Genres.map((item,id)=>(
        <Link key={id} to={`/rappers/genres/${item.genre}`}>
            {item.genre}&nbsp;&nbsp;
        </Link>
      ))}
      
    </div>
  );
};

export default GenreNames;
