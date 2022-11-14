import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import iconDollar from "../assets/images/icon-dollar.svg";
import iconPerson from "../assets/images/icon-person.svg";

const tipValues = ["5", "10", "15", "25", "50"];

const CalculatorForm = ({
  onChangeValue,
  submitCalcForm,
  bill,
  tip,
  customTip,
  people,
}) => {
  /* const [values, setValues] = useState({
    bill: 0,
    tip: "",
    customTip: "",
    people: 0,
  }); */

  /* const onChangeValue = (e) => {
    console.log(e.target.name);
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitCalcForm = (e) => {
    e.preventDefault();
  };
 */
  return (
    <form onSubmit={submitCalcForm} className="calculator__form">
      <h3>Bill</h3>
      <div className="input-control number">
        <img src={iconDollar} alt="" className="icon" />
        <input
          name="bill"
          id="bill"
          type="number"
          className="form__bill"
          value={bill}
          onChange={onChangeValue}
          required
        />
        <p className="error">Can't be empty</p>
      </div>
      <h3>Select Tip %</h3>
      <div className="input-control radio">
        {tipValues.map((item, i) => (
          <RadioBtn
            val={item}
            key={i}
            custom={customTip}
            onChangeValue={onChangeValue}
          />
        ))}

        <input
          type="number"
          placeholder="custom"
          name="customTip"
          value={customTip}
          className={customTip === "" ? "custom-radio" : "custom-radio select"}
          onChange={onChangeValue}
        />
        <p className="error">Must select a value</p>
      </div>
      <h3>Number of People</h3>
      <div className="input-control number">
        <img src={iconPerson} alt="" className="icon" />
        <input
          name="people"
          id="people"
          type="number"
          className="form__people"
          value={people}
          onChange={onChangeValue}
          required
        />
        <p className="error">Can't be empty</p>
      </div>
    </form>
  );
};

export default CalculatorForm;
