import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTimer } from "../selectors";

export default function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);

  return (
    <div className="container">
      <span>timer: {timer}</span>
      <button OnClick={()=>dispatch(startTimer)}
    </div>
  );
}
