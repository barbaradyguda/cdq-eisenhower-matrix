import React, { useCallback, useState } from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SingleTask from "./SingleTask";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import Square from "./Square";

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

  const [drop] = useDrop(() => ({
    accept: ItemTypes.DIV,
    drop: (item: any) => {
      handleDrop(item.id, item);
    },
  }));

  const handleDrop = useCallback(
    (index: number, item: any) => {
      let droppedTask = droppedTasks[0];
      setDroppedTasks((droppedTask = item.singleTask));

      {
        droppedTask.urgent &&
          droppedTask.important && index !== 0 &&
          setUrgentImportantTasks(
            urgentImportantTasks.filter(
              (urgentImportantTask) => urgentImportantTask.id !== droppedTask.id
            )
          );
      }
      {
        droppedTask.urgent && index !== 1 &&
          setUrgentTasks(
            urgentTasks.filter((urgentTask) => urgentTask.id !== droppedTask.id)
          );
      }
      {
        droppedTask.important && index !== 2 &&
          setImportantTasks(
            importantTasks.filter(
              (importantTask) => importantTask.id !== droppedTask.id
            )
          );
      }
      {
        !droppedTask.urgent &&
          !droppedTask.important && index !== 3 &&
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
    if(!droppedTask.urgent || droppedTask.important){
      droppedTask.urgent = true;
    droppedTask.important = false;
    droppedTask.deadline = new Date();
    return setUrgentTasks([...urgentTasks, droppedTask]);}
    else return urgentTasks
  };

  const collectDroppedITask = (droppedTask: Task) => {
    if(!droppedTask.important || droppedTask.urgent){
    droppedTask.urgent = false;
    droppedTask.important = true;
    droppedTask.deadline = undefined;
    return setImportantTasks([...importantTasks, droppedTask]);}
    else return importantTasks
  };

  const collectDroppedOTask = (droppedTask: Task) => {
    if(droppedTask.important || droppedTask.urgent){
    droppedTask.urgent = false;
    droppedTask.important = false;
    droppedTask.deadline = undefined;
    return setOtherTasks([...otherTasks, droppedTask]);}
    else return otherTasks
  };

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
      default:
        return " ";
    }
  };

  const getSquareTitleColor = (taskType) => {
    switch (taskType) {
      case urgentImportantTasks:
        return "#cb7218";
      case urgentTasks:
        return "#d2ae53";
      case importantTasks:
        return "#b0922d";
      case otherTasks:
        return "#5a8176";
      default:
        return " ";
    }
  };

  const getBackgroundColor = (taskType) => {
    switch (taskType) {
      case urgentImportantTasks:
        return "#fae8d6";
      case urgentTasks:
        return "#f3ebd1";
      case importantTasks:
        return "#ffecba";
      case otherTasks:
        return "#dbe6e3";
    }
  };

  const getTasks = (taskType) => {
    return (
      taskType &&
      taskType.map((task, index) => (
        <SingleTask
          index={index}
          singleTask={task}
          handleDone={handleDone}
          handleDelete={handleDelete}
          // isDropped={isDropped(task)}
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
            taskTypes.map((taskType, index) => (
              <Grid
                item
                xs={6}
                style={{
                  backgroundColor: getBackgroundColor(taskType),
                  border: "4px solid #282c34",
                }}
                // ref={drop}
              >
                <Typography
                  variant="h6"
                  sx={{ pb: 2, color: getSquareTitleColor(taskType) }}
                >
                  {getSquareTitle(taskType)} ssssquare index:{index}
                </Typography>
                <Square
                  tasks={taskType}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                  accept={[ItemTypes.DIV]}
                  lastDroppedItem={null}
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
