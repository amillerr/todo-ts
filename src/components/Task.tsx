import React  from "react";
import {ITask} from "../Interfaces";

interface Props {
  task : ITask;
  completeTask(taskToDel: string): void;
}

const Task = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>Дедлайн: {task.deadline} дн</span>
      </div>
      <button
       className="content__btn"
       onClick={() => {
         completeTask(task.taskName)
       }}
       >
         Удалить
      </button>
    </div>
  )
};

export default Task;