import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input"
      type="text"
      placeholder="Add Task"/>
      <button data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
