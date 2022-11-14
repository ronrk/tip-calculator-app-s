import React from "react";

const CalculatorSummary = ({ reset, total, people }) => {
  return (
    <div className="calculator__summary">
      <div className="content">
        <div className="summary summary__tip">
          <div className="title">
            <h4>Tip Amount</h4>
            <span>/ person</span>
          </div>
          <div className="value">
            <span>${(total.tip / people).toFixed(2)}</span>
          </div>
        </div>
        <div className="summary summary__total">
          <div className="title">
            <h4>Total</h4>
            <span>/ person</span>
          </div>
          <div className="value">
            <span>${(total.sum / people).toFixed(2) || 0}</span>
          </div>
        </div>
      </div>

      <button type="button" onClick={reset} className="reset-btn">
        RESET
      </button>
    </div>
  );
};

export default CalculatorSummary;
