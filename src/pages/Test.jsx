import React, { useReducer } from "react";

const Test = () => {
  let initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "increase") {
      return state + action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        className=" px-3 py-1 bg-sky-700 m-52"
        onClick={() => dispatch({ type: "increase", payload: 2 })}
      >
        Increase
      </button>
      <p>{state}</p>
    </div>
  );
};

export default Test;
