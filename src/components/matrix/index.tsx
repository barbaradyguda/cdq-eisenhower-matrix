import React, { useCallback, useState } from "react";
import { Task } from "../../model";
import { Typography, Grid, Box } from "@mui/material";
import { ItemTypes } from "../../ItemTypes";
import Square from "./Square";
import { colors, backgroundColors } from "../../colors";
import { styles } from "./styles";

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
  const [droppedTasks, setDroppedTasks] = useState<Task[]>([]);

  let taskTypes: Array<Task[]> = [
    urgentImportantTasks,
    urgentTasks,
    importantTasks,
    otherTasks,
  ];

  const handleDrop = useCallback(
    (index: number, item: any) => {
      let droppedTask = droppedTasks[0];
      setDroppedTasks((droppedTask = item.singleTask));

      {
        droppedTask.urgent &&
          droppedTask.important &&
          index !== 0 &&
          setUrgentImportantTasks(
            urgentImportantTasks.filter(
              (urgentImportantTask) => urgentImportantTask.id !== droppedTask.id
            )
          );
      }
      {
        droppedTask.urgent &&
          index !== 1 &&
          setUrgentTasks(
            urgentTasks.filter((urgentTask) => urgentTask.id !== droppedTask.id)
          );
      }
      {
        droppedTask.important &&
          index !== 2 &&
          setImportantTasks(
            importantTasks.filter(
              (importantTask) => importantTask.id !== droppedTask.id
            )
          );
      }
      {
        !droppedTask.urgent &&
          !droppedTask.important &&
          index !== 3 &&
          setOtherTasks(
            otherTasks.filter((otherTask) => otherTask.id !== droppedTask.id)
          );
      }
      switch (index) {
        case 0:
          return collectDroppedUITask(droppedTask);
        case 1:
          return collectDroppedUTask(droppedTask);
        case 2:
          return collectDroppedITask(droppedTask);
        case 3:
          return collectDroppedOTask(droppedTask);
      }
    },
    [
      droppedTasks,
      urgentImportantTasks,
      urgentTasks,
      importantTasks,
      otherTasks,
    ]
  );

  const collectDroppedUITask = (droppedTask: Task) => {
    if (!droppedTask.urgent || !droppedTask.important) {
      droppedTask.urgent = true;
      droppedTask.important = true;
      droppedTask.deadline = new Date();
      return setUrgentImportantTasks([...urgentImportantTasks, droppedTask]);
    } else return urgentImportantTasks;
  };

  const collectDroppedUTask = (droppedTask: Task) => {
    if (!droppedTask.urgent || droppedTask.important) {
      droppedTask.urgent = true;
      droppedTask.important = false;
      droppedTask.deadline = new Date();
      return setUrgentTasks([...urgentTasks, droppedTask]);
    } else return urgentTasks;
  };

  const collectDroppedITask = (droppedTask: Task) => {
    if (!droppedTask.important || droppedTask.urgent) {
      droppedTask.urgent = false;
      droppedTask.important = true;
      droppedTask.deadline = undefined;
      return setImportantTasks([...importantTasks, droppedTask]);
    } else return importantTasks;
  };

  const collectDroppedOTask = (droppedTask: Task) => {
    if (droppedTask.important || droppedTask.urgent) {
      droppedTask.urgent = false;
      droppedTask.important = false;
      droppedTask.deadline = undefined;
      return setOtherTasks([...otherTasks, droppedTask]);
    } else return otherTasks;
  };


const handleEdit=(id: number, singleTask: Task)=>{
console.log(singleTask)
}


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
        return "Urgent";
      case importantTasks:
        return "Important";
      case otherTasks:
        return "Not urgent & Not important";
    }
  };

  const getColor = (taskType: any) => {
    switch (taskType) {
      case urgentImportantTasks:
        return colors.urgentImportantTasks;
      case urgentTasks:
        return colors.urgentTasks;
      case importantTasks:
        return colors.importantTasks;
      case otherTasks:
        return colors.otherTasks;
    }
  };

  const getBackgroundColor = (taskType: any) => {
    switch (taskType) {
      case urgentImportantTasks:
        return backgroundColors.urgentImportantTasks;
      case urgentTasks:
        return backgroundColors.urgentTasks;
      case importantTasks:
        return backgroundColors.importantTasks;
      case otherTasks:
        return backgroundColors.otherTasks;
      default:
        return " ";
    }
  };

  return (
    <>
      <Box sx={styles.boxContainer}>
        <Grid container spacing={2} sx={styles.gridContainer}>
          {taskTypes &&
            taskTypes.map((taskType, index) => (
              <Grid
                item
                xs={6}
                sx={styles.gridItem}
                style={{backgroundColor: getBackgroundColor(taskType)}}
              >
                <Typography
                  variant="h6"
                  sx={{ pb: 2, color: getColor(taskType) + "1)" }}
                >
                  {getSquareTitle(taskType)}
                </Typography>
                <Square
                  tasks={taskType}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  accept={[ItemTypes.DIV]}
                  onDrop={(item) => handleDrop(index, item)}
                  key={index}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Matrix;
