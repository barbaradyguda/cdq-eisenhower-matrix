import React from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography, Stack, IconButton } from "@mui/material";
import { Edit, Delete, Done } from "@mui/icons-material";

interface Props {
  index: number;
  singleTask: Task;
  handleDone: (id: number, singleTask: Task) => void;
  handleDelete: (id: number, singleTask: Task) => void;
}

const MatrixSquare = ({ index, singleTask, handleDone,handleDelete }: Props) => {
  const getBackgroundColor = (task: Task) => {
    if (task.urgent && task.important) {
      return "#F3C79B";
    } else if (task.important) {
      return "#E6D69F";
    } else if (task.urgent) {
      return "#FFD979";
    } else {
      return "#B5CCC6";
    }
  };

  const getColor = (task: Task) => {
    if (task.urgent && task.important) {
      return "#CB7218";
    } else if (task.important) {
      return "#B0922D";
    } else if (task.urgent) {
      return "#BD8700";
    } else {
      return "#5A8176";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        textAlign: "left",
        padding: 16,
        marginRight: 16,
        marginBottom: 16,
        backgroundColor: getBackgroundColor(singleTask),
        borderRadius: 8,
        opacity: singleTask.isDone ? 0.6 : 1,
        transition: "0.2s",
      }}
      className={"Square"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ 
            fontSize: 20,
             fontWeight: 800, 
             textTransform: "uppercase",
             textDecoration: singleTask.isDone ? "line-through" : "none"
            }}
        >
          {" "}
      {singleTask.title}
        </Typography>
        <Typography variant="caption" sx={{ color: getColor(singleTask), textTransform: "uppercase" }}>
          {" "}
          {singleTask.category}
        </Typography>
      </div>
      <Typography sx={{ opacity: 0.8 }}> {singleTask.comment}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        {singleTask.deadline ? (
          <Typography>
            {" "}
            {singleTask.deadline.toLocaleDateString("en-US")}
          </Typography>
        ) : (
          <span />
        )}
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <Edit sx={{ color: getColor(singleTask) }} />
          </IconButton>
          <IconButton 
          aria-label="delete"
           size="small"
           onClick={() => handleDelete(singleTask.id, singleTask)}
            >
            <Delete sx={{ color: getColor(singleTask) }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDone(singleTask.id, singleTask)}
          >
            <Done sx={{ color: getColor(singleTask) }} />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default MatrixSquare;
