import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          className="addBtn"
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="deleteBtn"
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
    </tr>
  );
};
export default ExpenseItem;
