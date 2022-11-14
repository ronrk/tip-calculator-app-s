import React, { useState, useEffect } from "react";
import CalculatorForm from "./components/CalculatorForm";
import CalculatorSummary from "./components/CalculatorSummary";
import logo from "./logo.svg";

const App = () => {
  const [values, setValues] = useState({
    bill: 0,
    tip: false,
    customTip: "",
    people: 1,
  });
  const [total, setTotal] = useState({ sum: 0, tip: 0 });

  useEffect(() => {
    let tipAmount = 0;
    if (values.customTip !== "" && values.customTip > 0) {
      tipAmount = values.bill * (values.customTip * 0.01);
      console.log(tipAmount);
    }
    if (values.customTip === "") {
      tipAmount = values.bill * (values.tip * 0.01);
    }
    setTotal({ sum: Number(values.bill) + Number(tipAmount), tip: tipAmount });
  }, [values]);

  const onChangeValue = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitCalcForm = (e) => {
    e.preventDefault();
  };

  const resetValues = () => {
    setValues({ bill: 0, tip: false, customTip: "", people: 1 });
  };
  return (
    <main>
      <img src={logo} alt="logo" className="logo" />
      <div className="app-container">
        <CalculatorForm
          onChangeValue={onChangeValue}
          submitCalcForm={submitCalcForm}
          {...values}
        />
        <CalculatorSummary
          reset={resetValues}
          total={total}
          people={values.people}
        />
      </div>
    </main>
  );
};

export default App;
