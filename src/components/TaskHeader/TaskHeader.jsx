import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <p>ToDo List</p>
      <b data-testid="header-remaining-task"> You Have {unCompletedTask}</b>
      <b data-testid="header-total-task"> out of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
