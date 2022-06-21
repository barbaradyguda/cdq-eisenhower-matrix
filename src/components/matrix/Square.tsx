import React from "react";
import { Task } from "../../model";
import SingleTask from "./SingleTask";
import { useDrop } from 'react-dnd'

interface Props {
  handleDone: (id: number, singleTask: Task) => void;
  handleDelete: (id: number, singleTask: Task) => void;
  tasks: Task[];
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

const Square = ({
  handleDone,
  handleDelete,
  tasks,
  accept,
  lastDroppedItem,
  onDrop,
}: Props) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })


  return (
    <div style={{ width: "100%" }} ref={drop} >
      {tasks &&
        tasks.map((task, index) => (
          <SingleTask
            index={index}
            singleTask={task}
            handleDone={handleDone}
            handleDelete={handleDelete}
            key={index}
            // isDropped={isDropped(task)}
          />
        ))}
        {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )}
    </div>
  );
};

export default Square;
