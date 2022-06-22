import React from "react";
import { Task } from "../../model";
import SingleTask from "./SingleTask";
import { useDrop } from "react-dnd";
import { Box } from "@mui/material";
import { styles } from "./styles";

interface Props {
  handleDone: (id: number, singleTask: Task) => void;
  handleDelete: (id: number, singleTask: Task) => void;
  tasks: Task[];
  accept: string[];
  onDrop: (item: any) => void;
}

const Square = ({ handleDone, handleDelete, tasks, accept, onDrop }: Props) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Box sx={styles.squareBox} ref={drop}>
      {tasks &&
        tasks.map((task, index) => (
          <SingleTask
            index={index}
            singleTask={task}
            handleDone={handleDone}
            handleDelete={handleDelete}
            key={index}
          />
        ))}
    </Box>
  );
};

export default Square;
