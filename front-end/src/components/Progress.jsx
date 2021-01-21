import React from "react";
import "./progress.css";

function Progress(props) {
  // const { lists } = props;
  // const totalAmount = lists.length;
  // const completed = lists.filter((item) => (item.is_completed = true));
  // const completedAmount = completed.length;

  // const completedPercentage = completedAmount / totalAmount;

  const { todos, habits } = props;
  const totalAmount = todos.length + habits.length;
  const completed = habits.filter((item) => (item.is_completed = true));
  const completedAmount = completed.length;

  const completedPercentage = completedAmount / totalAmount;

  console.log("props.todos in progress", props.todos);
  console.log("props.habits in progress", props.habits);

  // const listsCount = props.lists;

  return (
    <div className="progress">
      <div
        className="completed"
        style={{ width: `${completedPercentage * 100}%` }}
      ></div>
      Hello {completedAmount} / {totalAmount}
    </div>
  );
}

export default Progress;
