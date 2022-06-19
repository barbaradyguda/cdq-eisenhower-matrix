import React, { useState } from "react";
import { Task } from "../../model";
import "../../App.css";


interface Props {
    urgentImportantTasks: Task[];
    urgentTasks: Task[];
    importantTasks: Task[];
    otherTasks: Task[];
}

const MatrixSquare = ({ urgentImportantTasks, urgentTasks, importantTasks, otherTasks }: Props) => {

  return (
    <div >
     {urgentImportantTasks && urgentImportantTasks.map((urgentImportantTask)=>(
         <p>UI {urgentImportantTask.title}</p>
     ))}
         {urgentTasks && urgentTasks.map((urgentTask)=>(
         <p>U {urgentTask.title}</p>
     ))}
         {importantTasks && importantTasks.map((importantTask)=>(
         <p>I{importantTask.title}</p>
     ))}
         {otherTasks && otherTasks.map((otherTask)=>(
         <p>O {otherTask.title}</p>
     ))}
    </div>
  );
};

export default MatrixSquare;
