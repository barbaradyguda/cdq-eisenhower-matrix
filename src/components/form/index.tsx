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

const label = { inputProps: { "aria-label": "Switch demo" } };

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
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [deadline, setDeadline] = useState<number>();
  const [category, setCategory] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clearForm = () => {
    setUrgent(true);
    setImportant(true);
    setTitle("");
    setComment("");
    setCategory("");
    setIsDone(undefined);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.debug("here");
    if (urgent && important) {
      setUrgentImportantTasks([
        ...urgentImportantTasks,
        {
          urgent: true,
          important: true,
          id: Date.now(),
          title: title || " ",
          comment: comment || " ",
          deadline: Date.now(),
          category: category || " ",
          isDone: false,
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
          deadline: Date.now(),
          category: category || " ",
          isDone: false,
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
          deadline: Date.now(),
          category: category || " ",
          isDone: false,
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
          deadline: Date.now(),
          category: category || " ",
          isDone: false,
        },
      ]);
    }

    clearForm();
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ width: "64%" }}>
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
            <Typography id="server-modal-title" variant="h5" component="h2" color="primary" sx={{mb:2}}>
             Add a new task
            </Typography>
            {/* <Typography id="server-modal-description" sx={{ pt: 2, mb:2 }} color="primary">
              If you disable JavaScript, you will still see me.
            </Typography> */}
            <div style={{display: "flex", flexDirection: "column", justifyContent: "left", width: "80%"}}>
            <div style={{ display: "flex", alignItems: "center", padding:4 }}>
              <Switch
                checked={urgent}
                onChange={(e) => setUrgent(!urgent)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography color="primary" sx={{ml:1}}>urgent</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding:4  }}>
              <Switch
                checked={important}
                onChange={(e) => setImportant(!important)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography color="primary" sx={{ml:1}}>important</Typography>
            </div>

            <TextField
              id="outlined-basic"
              label="Enter a task"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ margin:1 }}
            />
            <TextField
              id="outlined-basic"
              label="Enter a comment"
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              sx={{ margin:1 }}
            />
            <TextField
              id="outlined-basic"
              label="Enter a category"
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ margin:1 }}
            />
            </div>
            <Button
              variant="contained"
              className="Button"
              type="submit"
              form="form"
              sx={{marginTop: 4, marginBottom: 2, width: "40%"}}
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
function e(e: any) {
  throw new Error("Function not implemented.");
}
