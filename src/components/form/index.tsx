import React, { useState } from "react";
import "../../App.css";
import { Task } from "../../model";
import Switch from "@mui/material/Switch";

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
  };

  return (
    <form className="Form" onSubmit={handleAdd}>
      <Switch
        checked={urgent}
        onChange={(e) => setUrgent(false)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>urgent</p>
      <Switch
        checked={important}
        onChange={(e) => setImportant(false)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>important</p>
      <input
        className="Input"
        type="input"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="Input"
        type="input"
        placeholder="Enter a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        className="Input"
        type="input"
        placeholder="Enter a category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="Button">go</button>
    </form>
  );
};

export default Form;
