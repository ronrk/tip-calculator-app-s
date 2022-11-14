import React from "react";

const RadioBtn = ({ val, custom, onChangeValue }) => {
  return (
    <div className="radio-btn">
      <input
        onChange={onChangeValue}
        type="radio"
        id={val}
        name="tip"
        value={val}
        disabled={custom === "" ? false : true}
      />
      <label htmlFor={val}>{val}%</label>
    </div>
  );
};

export default RadioBtn;
