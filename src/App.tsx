import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Form from "./components/form";
import { Task } from "./model";
import Matrix from "./components/matrix";
import {
  initialValuesUI,
  initialValuesU,
  initialValuesI,
  initialValuesO,
} from "./initialValues";

const App: React.FC = () => {
  const [urgentImportantTasks, setUrgentImportantTasks] =
    useState<Task[]>(initialValuesUI);
  const [urgentTasks, setUrgentTasks] = useState<Task[]>(initialValuesU);
  const [importantTasks, setImportantTasks] = useState<Task[]>(initialValuesI);
  const [otherTasks, setOtherTasks] = useState<Task[]>(initialValuesO);

  return (
    <div className="App">
      <Typography variant="h1" className="Header">
        Eisenhower Matrix
      </Typography>
      <Form
        urgentImportantTasks={urgentImportantTasks}
        setUrgentImportantTasks={setUrgentImportantTasks}
        urgentTasks={urgentTasks}
        setUrgentTasks={setUrgentTasks}
        importantTasks={importantTasks}
        setImportantTasks={setImportantTasks}
        otherTasks={otherTasks}
        setOtherTasks={setOtherTasks}
      />

      <Matrix
        urgentImportantTasks={urgentImportantTasks}
        setUrgentImportantTasks={setUrgentImportantTasks}
        urgentTasks={urgentTasks}
        setUrgentTasks={setUrgentTasks}
        importantTasks={importantTasks}
        setImportantTasks={setImportantTasks}
        otherTasks={otherTasks}
        setOtherTasks={setOtherTasks}
      />
    </div>
  );
};

export default App;
