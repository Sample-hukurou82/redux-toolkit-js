import React from "react";
import { useDispatch, usedispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <spam>{task.title}</spam>
      <button onClick={() => dispatch(deleteTask(task))}>削除</button>
    </div>
  );
};

export default TaskItem;
