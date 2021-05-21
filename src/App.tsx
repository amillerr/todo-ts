import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import Task from "./components/Task";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskToDel: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskToDel
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <input
            className="container__input"
            type="text"
            placeholder="Задача..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            className="container__input"
            type="number"
            placeholder="Дедлайн..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button className="header__btn" onClick={addTask}>
          Добавить
        </button>
      </div>
      <div className="todo-list">
        {todo.map((task: ITask, index: number) => {
          return <Task 
          key={index} 
          task={task}
          completeTask={completeTask}
          />;
        })}
      </div>
    </div>
  );
};

export default App;
