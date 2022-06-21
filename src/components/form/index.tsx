import React, { useState } from "react";
import "../../App.css";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
          deadline: new Date(),
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV]
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
          deadline: new Date(),
          category: category || " ",
          isDone: false,
          accepts: [ItemTypes.DIV]
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
          accepts: [ItemTypes.DIV]
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
          accepts: [ItemTypes.DIV]
        },
      ]);
    }
    setError("");
    clearForm();
    handleClose();
  };


  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ width: {lg: "64%", md: "80%", xs:"90%"} }}>
        <AddIcon sx={{ marginRight: 2 }} />
        Add new task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="Form" id="form" onSubmit={handleAdd}>
            <Typography
              id="server-modal-title"
              variant="h5"
              component="h2"
              color="primary"
              sx={{ mb: 2 }}
            >
              Add a new task
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                width: "80%",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <Switch
                  checked={urgent}
                  onChange={(e) => setUrgent(!urgent)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography  sx={{ ml: 1, color: "white" }}>
                  urgent
                </Typography>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <Switch
                  checked={important}
                  onChange={(e) => setImportant(!important)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography color="primary" sx={{ ml: 1, color: "white" }}>
                  important
                </Typography>
              </div>

              <TextField
                id="outlined-basic"
                label="Enter a task"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={error === "title"}
                helperText={error === "title" && "required"}
                sx={{ margin: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Enter a comment"
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ margin: 1 }}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                {urgent && (
                  <DatePicker
                    label="Deadline"
                    value={deadline}
                    onChange={(newValue) => setDeadline(newValue)}
                    renderInput={(props) => (
                      <TextField {...props} sx={{ margin: 1 }} />
                    )}
                  />
                )}
              </LocalizationProvider>
              <TextField
                id="outlined-basic"
                label="Enter a category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ margin: 1 }}
              />
            </div>
            <Button
              variant="contained"
              className="Button"
              type="submit"
              form="form"
              sx={{ marginTop: 4, marginBottom: 2, width: "40%" }}
            >
              Add task
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Form