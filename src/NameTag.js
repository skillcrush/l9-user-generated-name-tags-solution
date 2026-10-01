import React from "react";

const NameTag = (props) => {
  const deleteByIndex = () => props.removeName(props.index);
  return (
    <div className="name-tag">
      <h2 className="title">HELLO</h2>
      <p className="subtitle">my name is</p>
      <h3 className="name">{props.name}</h3>
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

export default NameTag;
