import React from "react";
import { RapperData } from "../../frontend assets/data";
import { useNavigate } from "react-router-dom";

const RappersSlice = () => {
  const navigate = useNavigate();

  return (
    <div>
      {RapperData.slice(-3).map((item, id) => (
        <div
          key={id}
          onClick={() => {
            navigate(`/rappers/${item.name}`);
            scrollTo(0, 0);
          }}
        >
          <img src={item.image} alt="" />
          <div>{item.name}</div>
          <div>{item.genre}</div>
        </div>
      ))}
      <button
        onClick={() => {
          navigate(`/rappers`);
          scrollTo(0, 0);
        }}
      >
        more
      </button>
    </div>
  );
};

export default RappersSlice;
