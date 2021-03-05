import React from "react";
import "./input-button.css";

export default function InputButton(props) {
  const onClickHandler = () => {
    props.buttonAction(
      props.buttonData.value,
      props.buttonData.operator,
      props.buttonData.scientific
    );
  };

  return (
    <button className="input-button" onClick={onClickHandler}>
      {" "}
      {props.buttonData.label}{" "}
    </button>
  );
}
