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


  let taskTypes: Array<Task[]> = [
    urgentImportantTasks,
    urgentTasks,
    importantTasks,
    otherTasks,
  ];

  interface ContainerState {
    accepts: string[];
    lastDroppedItem: any;
    id: number;
  }

  // type test = Person & {
    //   city: string;
    // };

  const [containers, setContainers] = useState<ContainerState[]>([
    {
      accepts: [ItemTypes.DIV],
      lastDroppedItem: null,
      id: 0
    },
    {
      accepts: [ItemTypes.DIV],
      lastDroppedItem: null,
      id: 1
    },
    {
      accepts: [ItemTypes.DIV],
      lastDroppedItem: null,
      id: 2
    },
    {
      accepts: [ItemTypes.DIV],
      lastDroppedItem: null,
      id: 3
    },
  ]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.DIV,
    lastDropItem: null,
    drop: (item: any, monitor) => {
      handleDrop(item.id, item);
    },
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
      // canDrop: monitor.canDrop,
    }),
  }));

  const [droppedTasks, setDroppedTasks] = useState<Task[]>([]);

  function isDropped(task: Task) {
    // return droppedTasks.indexOf(task) > -1;
    return true;
  }

  const handleDrop = useCallback(
    (index, item: any) => {
      setDroppedTasks((droppedTasks[0] = item.singleTask));
      {
        item.singleTask.urgent &&
          item.singleTask.important &&
          setUrgentImportantTasks(
            urgentImportantTasks.filter(
              (urgentImportantTask) =>
                urgentImportantTask.id !== item.singleTask.id
            )
          );
      }
      {
        item.singleTask.urgent &&
          setUrgentTasks(
            urgentTasks.filter(
              (urgentTask) => urgentTask.id !== item.singleTask.id
            )
          );
      }
      {
        item.singleTask.important &&
          setImportantTasks(
            importantTasks.filter(
              (importantTask) => importantTask.id !== item.singleTask.id
            )
          );
      }
      {
        !item.singleTask.urgent &&
          !item.singleTask.important &&
          setOtherTasks(
            otherTasks.filter(
              (otherTask) => otherTask.id !== item.singleTask.id
            )
          );
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
              >
                <Typography variant="h6" sx={{ pb: 2, color: getSquareTitleColor(taskType) }}>
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
