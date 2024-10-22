import React, { useContext, useEffect, useState } from "react";
import { RapperData } from "../frontend assets/data";
import { MyAppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Rappers = () => {
  const { RapperData } = useContext(MyAppContext);
  const { genre } = useParams();
  console.log(genre);
  console.log(RapperData);

  const [filter, setFilter] = useState([]);

  const appyFilter = () => {
    if (genre) {
      setFilter(
        RapperData.filter(
          (rap) => rap.genre.toLowerCase() === genre.toLowerCase()
        )
      );
    } else {
      setFilter(RapperData);
    }
  };

  useEffect(() => {
    appyFilter();
  }, [RapperData, genre]);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Artistes</h1>
      <span
        onClick={() =>
          genre === "Rapper"
            ? navigate("/rappers")
            : navigate("/rappers/genres/Rapper")
        }
      >
        Rapper
      </span>
      <br />
      <span
        onClick={() =>
          genre === "Singer"
            ? navigate("/rappers")
            : navigate("/rappers/genres/Singer")
        }
      >
        Singer
      </span>
      <br />
      <span
        onClick={() =>
          genre === "Producer"
            ? navigate("/rappers")
            : navigate("/rappers/genres/Producer")
        }
      >
        Producer
      </span>
      <br />
      <span
        onClick={() =>
          genre === "Poet"
            ? navigate("/rappers")
            : navigate("/rappers/genres/Poet")
        }
      >
        Poet
      </span>
      <br />
      {filter.map((item, id) => (
        <div key={id} onClick={() => navigate(`/rappers/${item.name}`)}>
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default Rappers;
