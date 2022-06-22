import React from "react";
import { Task } from "../../model";
import "../../App.css";
import { Typography, Stack, IconButton, Box } from "@mui/material";
import { Edit, Delete, Done } from "@mui/icons-material";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import { colors } from "../../colors";
import { styles } from "./styles";

interface Props {
  index: number;
  singleTask: Task;
  handleDone: (id: number, singleTask: Task) => void;
  handleDelete: (id: number, singleTask: Task) => void;
}

const SingleTask = ({ index, singleTask, handleDone, handleDelete }: Props) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.DIV,
      item: { singleTask },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [singleTask, ItemTypes.DIV]
  );

  const getColor = (task: Task) => {
    if (task.urgent && task.important) {
      return colors.urgentImportantTasks;
    } else if (task.important) {
      return colors.urgentTasks;
    } else if (task.urgent) {
      return colors.importantTasks;
    } else {
      return colors.otherTasks;
    }
  };

  return (
    <Box
      key={index}
      ref={drag}
      sx={styles.taskContainer}
      style={{
        backgroundColor: getColor(singleTask) + "0.3)",
        opacity: singleTask.isDone ? 0.6 : 1,
        borderWidth: isDragging ? "thick" : "thin",
        borderColor: isDragging
          ? getColor(singleTask) + "0.2)"
          : getColor(singleTask) + "1)",
      }}
    >
      <Box sx={styles.taskTitleBox}>
        <Typography
          sx={styles.taskTitle}
          style={{
            textDecoration: singleTask.isDone ? "line-through" : "none",
          }}
        >
          {" "}
          {singleTask.title}
        </Typography>
        <Typography
          variant="caption"
          sx={styles.taskCategory}
          style={{ color: getColor(singleTask) + "1)" }}
        >
          {" "}
          {singleTask.category}
        </Typography>
      </Box>
      <Typography sx={styles.taskComment}> {singleTask.comment}</Typography>
      <Box sx={styles.taskBottomBox}>
        {singleTask.deadline ? (
          <Typography>
            {" "}
            {singleTask.deadline.toLocaleDateString("en-US")}
          </Typography>
        ) : (
          <span />
        )}
        <Stack direction="row" alignItems="center" spacing={1}>
        {/* {!singleTask.isDone &&  <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleEdit(singleTask.id, singleTask)}
          >
            <Edit sx={{ color: getColor(singleTask) + "0.9)" }} />
          </IconButton>} */}
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDelete(singleTask.id, singleTask)}
          >
            <Delete sx={{ color: getColor(singleTask) + "0.9)" }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDone(singleTask.id, singleTask)}
          >
            <Done sx={{ color: getColor(singleTask) + "0.9)" }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleTask;
