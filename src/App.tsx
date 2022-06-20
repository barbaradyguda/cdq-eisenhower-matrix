import React, { useState, useEffect } from "react";
import "./App.css";
import { TabClassKey, Typography } from "@mui/material";
import Form from "./components/form";
import { Task } from "./model";
import { Category } from "@mui/icons-material";
import Matrix from "./components/matrix";
import {initialValuesUI, initialValuesU, initialValuesI, initialValuesO} from "./initialValues"

// let name: string = "basia";
// let age: number | string = 22;
// let isStudent: boolean;
// isStudent = true;
// let hobbies: string[];
// let role: [number, string];
// role = [5, "11"];

// type Person = {
//   name: string;
//   age?: number | string;
// };
// let person: Person = {
//   name: "basia",
//   age: 26,
// };

// type test = Person & {
//   city: string;
// };

// let checkIt: test = {
//   name: "aaa",
//   age: "33",
//   city: "blue",
// };

// let personName: unknown;

// let printName: (name: string) => unknown;

const App: React.FC = () => {
  const [task, setTask] = useState<Task>({} as Task);
  const [tasks, setTasks] = useState<Task[]>([]);

  const [urgentImportantTasks, setUrgentImportantTasks] = useState<Task[]>(initialValuesUI);
  const [urgentTasks, setUrgentTasks] = useState<Task[]>(initialValuesU);
  const [importantTasks, setImportantTasks] = useState<Task[]>(initialValuesI);
  const [otherTasks, setOtherTasks] = useState<Task[]>(initialValuesO);

  console.log(urgentImportantTasks);
  return (
    <div className="App">
      <Typography className="Header">Eisenhover Matrix</Typography>
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
