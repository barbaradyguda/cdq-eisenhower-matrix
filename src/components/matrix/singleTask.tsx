import React from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography } from "@mui/material";

interface Props {
  singleTask: Task;
}

const MatrixSquare = ({ singleTask }: Props) => {
  const getColor = (task: Task) => {
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        textAlign: "left",
        padding: 12,
        marginRight: 16,
        marginBottom: 16,
        backgroundColor: getColor(singleTask),
        borderRadius: 8
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ fontSize: 20, fontWeight: 800, textTransform: "uppercase" }}
        >
          {" "}
          {singleTask.title}
        </Typography>
        <Typography> {singleTask.category}</Typography>
      </div>
      <Typography> {singleTask.comment}</Typography>
      <Typography> {singleTask.deadline}</Typography>
    </div>
  );
};

export default MatrixSquare;
