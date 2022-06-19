import React from "react";
import { Task } from "../../model";
import { Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
}

const singleTask = ({ task }: Props) => {
  return (
    <div>
      <Typography className="Task">{task.title && task.title}</Typography>
      <Typography className="Task">{task.comment && task.comment}</Typography>
      <Typography className="Task">{task.category && task.category}</Typography>
      <Typography className="Task">{task.id && task.id}</Typography>
      <EditIcon style={{color: "white"}} />
      <DeleteIcon style={{color: "white"}} />
    </div>
  );
};

export default singleTask;
