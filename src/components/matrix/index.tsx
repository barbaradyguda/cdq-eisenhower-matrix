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
  
        <Grid container spacing={2} sx={{ width: "64%" }}>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#fae8d6", border: "4px solid #282c34" }}
          >
       <Typography variant="h6" sx={{pb:2}}> Urgent & Important</Typography> 
            {urgentImportantTasks &&
              urgentImportantTasks.map((urgentImportantTask) => (
                <MatrixSquare singleTask={urgentImportantTask} />
              ))}
          </Grid>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#f3ebd1", border: "4px solid #282c34" }}
          >
                   <Typography variant="h6" sx={{pb:2}}> Urgent</Typography> 
            {urgentTasks &&
              urgentTasks.map((urgentTask) => (
                <MatrixSquare singleTask={urgentTask} />
              ))}
          </Grid>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#ffecba", border: "4px solid #282c34" }}
          >
              <Typography variant="h6" sx={{pb:2}}>  Important</Typography> 
            {importantTasks &&
              importantTasks.map((importantTask) => (
                <MatrixSquare singleTask={importantTask} />
              ))}
          </Grid>
          <Grid
            item
            xs={6}
            style={{ backgroundColor: "#dbe6e3", border: "4px solid #282c34" }}
          >
              <Typography variant="h6" sx={{pb:2}}> Not urgent & Not important</Typography> 
            {otherTasks &&
              otherTasks.map((otherTask) => (
                <MatrixSquare singleTask={otherTask} />
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Matrix;
