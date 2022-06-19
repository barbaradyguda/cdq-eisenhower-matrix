import React, { useState } from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MatrixSquare from "./matrixSquare";

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
        }} 
      >
        <Grid container spacing={2} sx={{ width: "80%" }}>
          <Grid item xs={6} style={{ backgroundColor: "#fae8d6", border: "4px solid #282c34"}}>
          <MatrixSquare urgentImportantTasks={urgentImportantTasks} urgentTasks={[]} importantTasks={[]} otherTasks={[]} />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "#f3ebd1", border: "4px solid #282c34"}}>
          <MatrixSquare urgentTasks={urgentTasks} urgentImportantTasks={[]} importantTasks={[]} otherTasks={[]} />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "#ffecba", border: "4px solid #282c34"}}>
          <MatrixSquare importantTasks={importantTasks} urgentImportantTasks={[]} urgentTasks={[]} otherTasks={[]} />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "#dbe6e3", border: "4px solid #282c34"}}>
          <MatrixSquare otherTasks={otherTasks} urgentImportantTasks={[]} urgentTasks={[]} importantTasks={[]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Matrix;
