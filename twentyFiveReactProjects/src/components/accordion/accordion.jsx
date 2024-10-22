import React, { useState } from "react";
import dummyData from "./accordionData";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMutiSelect, setenableMutiSelect] = useState(false);
  const [mulipleSelected, setmulipleSelected] = useState([]);

  const titleClickHandler = (getCurrId) => {
    console.log(getCurrId);
    setSelected(getCurrId === selected ? null : getCurrId);
  };

  const multiSelectHandler = (getCurrId) => {
    let cpyMultiple = [...mulipleSelected];
    const findCurrentIdIndex = cpyMultiple.indexOf(getCurrId);
    console.log(findCurrentIdIndex);

    findCurrentIdIndex === -1
      ? cpyMultiple.push(getCurrId)
      : cpyMultiple.splice(findCurrentIdIndex, 1);

    setmulipleSelected(cpyMultiple);
  };
  console.log(selected, mulipleSelected);

  return (
    <div className="accordionWrapper">
      <h1 className="heading">Accordion</h1>
      <button
        className="multiBtn"
        onClick={() => setenableMutiSelect(!enableMutiSelect)}
      >
        Enable Multiple Selection
      </button>
      <div className="accordionDiv">
        {dummyData && dummyData.length > 0 ? (
          dummyData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMutiSelect
                    ? () => multiSelectHandler(dataItem.id)
                    : () => titleClickHandler(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span className="plusIcon">+</span>
              </div>

              {selected === dataItem.id ||
              mulipleSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
