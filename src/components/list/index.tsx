import React, { useState } from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography } from "@mui/material";
import SingleTask from "./singleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const List = ({ tasks, setTasks }: Props) => {
  return (
    <div>
      {tasks.map((task) => (
        <li className="TaskList">
         <SingleTask task={task}/>
        </li>
      ))}
    </div>
  );
};

export default List;
