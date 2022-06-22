import React, { useState } from "react";
import { styles } from "./styles";
import { Task } from "../../model";
import {
  Switch,
  TextField,
  Typography,
  Button,
  Modal,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ItemTypes } from "../../ItemTypes";


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

const Form = ({
  urgentImportantTasks,
  setUrgentImportantTasks,
  urgentTasks,
  setUrgentTasks,
  importantTasks,
  setImportantTasks,
  otherTasks,
  setOtherTasks,
}: Props) => {
  const [urgent, setUrgent] = useState<boolean>(true);
  const [important, setImportant] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [deadline, setDeadline] = React.useState<Date | null>(new Date());
  const [category, setCategory] = useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clearForm = () => {
    setUrgent(true);
    setImportant(true);
    setTitle("");
    setComment("");
    setDeadline(null);
    setCategory("");
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError("title");
      return false;
    }
    if (urgent && important) {
      setUrgentImportantTasks([
        ...urgentImportantTasks,
        {
          urgent: true,
          important: true,
          id: Date.now(),
          title: title || " ",
          comment: comment || " ",
          deadline: deadline || new Date(),
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV],
        },
      ]);
    } else if (urgent) {
      setUrgentTasks([
        ...urgentTasks,
        {
          urgent: true,
          important: false,
          id: Date.now(),
          title: title || " ",
          comment: comment || " ",
          deadline: deadline || new Date(),
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV],
        },
      ]);
    } else if (important) {
      setImportantTasks([
        ...importantTasks,
        {
          urgent: false,
          important: true,
          id: Date.now(),
          title: title || " ",
          comment: comment || " ",
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV],
        },
      ]);
    } else {
      setOtherTasks([
        ...otherTasks,
        {
          urgent: false,
          important: false,
          id: Date.now(),
          title: title || " ",
          comment: comment || " ",
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV],
        },
      ]);
    }
    setError("");
    clearForm();
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={styles.addButton}>
        <AddIcon sx={styles.addIcon} />
        Add new task
      </Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="add-task">
        <Box sx={styles.modalBox}>
          <form className="Form" id="form" onSubmit={handleAdd}>
            <Typography
              id="server-modal-title"
              variant="h5"
              color="primary"
              sx={{ mb: 2 }}
            >
              Add a new task
            </Typography>

            <Box sx={styles.formBox}>
              <Box sx={styles.switchBox}>
                <Switch
                  checked={urgent}
                  onChange={(e) => setUrgent(!urgent)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography sx={styles.switchText}>urgent</Typography>
              </Box>

              <Box sx={styles.switchBox}>
                <Switch
                  checked={important}
                  onChange={(e) => setImportant(!important)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography sx={styles.switchText}>important</Typography>
              </Box>

              <TextField
                id="outlined-basic"
                label="Enter a task"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={error === "title"}
                helperText={error === "title" && "required"}
                sx={styles.textField}
              />
              <TextField
                id="comment"
                label="Enter a comment"
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={styles.textField}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                {urgent && (
                  <DatePicker
                    label="Deadline"
                    value={deadline}
                    onChange={(newValue) => setDeadline(newValue)}
                    renderInput={(props) => (
                      <TextField {...props} sx={styles.textField} />
                    )}
                  />
                )}
              </LocalizationProvider>

              <TextField
                id="category"
                label="Enter a category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={styles.textField}
              />
            </Box>

            <Button
              variant="contained"
              className="Button"
              type="submit"
              form="form"
              sx={styles.submitButton}
            >
              Add task
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Form;
