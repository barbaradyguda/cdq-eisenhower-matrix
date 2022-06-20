import React, { useState } from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MatrixSquare from "./singleTask";

interface Props {
  urgentImportantTasks: Task[];
  setUrgentImportantTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  urgentTasks: Task[];
  setUrgentTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  importantTasks: Task[];
  setImportantTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  otherTasks: Task[];
  setOtherTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Matrix = ({
  urgentImportantTasks,
  setUrgentImportantTasks,
  urgentTasks,
  setUrgentTasks,
  importantTasks,
  setImportantTasks,
  otherTasks,
  setOtherTasks,
}: Props) => {
  let taskTypes: Array<Task[]> = [
    urgentImportantTasks,
    urgentTasks,
    importantTasks,
    otherTasks,
  ];

  const handleDone = (id: number, singleTask: Task) => {
    {
      singleTask.urgent &&
        singleTask.important &&
        setUrgentImportantTasks(
          urgentImportantTasks.map((urgentImportantTask) =>
            urgentImportantTask.id === id
              ? { ...urgentImportantTask, isDone: !urgentImportantTask.isDone }
              : urgentImportantTask
          )
        );
    }
    {
      singleTask.urgent &&
        setUrgentTasks(
          urgentTasks.map((urgentTask) =>
            urgentTask.id === id
              ? { ...urgentTask, isDone: !urgentTask.isDone }
              : urgentTask
          )
        );
    }
    {
      singleTask.important &&
        setImportantTasks(
          importantTasks.map((importantTask) =>
            importantTask.id === id
              ? { ...importantTask, isDone: !importantTask.isDone }
              : importantTask
          )
        );
    }
    {
      !singleTask.urgent &&
        !singleTask.important &&
        setOtherTasks(
          otherTasks.map((otherTask) =>
            otherTask.id === id
              ? { ...otherTask, isDone: !otherTask.isDone }
              : otherTask
          )
        );
    }
  };

  const handleDelete = (id: number, singleTask: Task) => {
    {
      singleTask.urgent &&
        singleTask.important &&
        setUrgentImportantTasks(
          urgentImportantTasks.filter(
            (urgentImportantTask) => urgentImportantTask.id !== id
          )
        );
    }
    {
      singleTask.urgent &&
        setUrgentTasks(
          urgentTasks.filter((urgentTask) => urgentTask.id !== id)
        );
    }
    {
      singleTask.important &&
        setImportantTasks(
          importantTasks.filter((importantTask) => importantTask.id !== id)
        );
    }
    {
      !singleTask.urgent &&
        !singleTask.important &&
        setOtherTasks(otherTasks.filter((otherTask) => otherTask.id !== id));
    }
  };

  const getSquareTitle = (taskType) => {
    switch (taskType) {
      case urgentImportantTasks:
        return "Urgent & Important";
      case urgentTasks:
        return "Urgent ";
      case importantTasks:
        return "Important";
      case otherTasks:
        return "Not urgent & Not important";
      default:
        return " ";
    }
  };

  const getTasks = (taskType) => {
    return (
      taskType &&
      taskType.map((task, index) => (
        <MatrixSquare
          index={index}
          singleTask={task}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))
    );
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 8,
          paddingBottom: 10,
          minHeight: 210,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ width: { lg: "64%", md: "80%", xs: "90%" } }}
        >
          {taskTypes &&
            taskTypes.map((taskType) => (
              <Grid
                item
                xs={6}
                style={{
                  backgroundColor: "#fae8d6",
                  border: "4px solid #282c34",
                }}
              >
                <Typography variant="h6" sx={{ pb: 2, color: "#E4801B" }}>
                  {getSquareTitle(taskType)}
                </Typography>
                {getTasks(taskType)}
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Matrix;
