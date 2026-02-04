import { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { TaskContext } from "../context/TaskContext";

function AddTaskDialog({ open, handleClose }) {
  console.log("🪟 AddTaskDialog rendered");

  const { addTask } = useContext(TaskContext);

  // Local state for form fields
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      assignedTo,
      duration,
      status: "Todo",
      assignedAt: new Date().toLocaleString(), // auto date time
    };

    console.log("🆕 New task object:", newTask);

    addTask(newTask);

    // Reset form
    setTitle("");
    setAssignedTo("");
    setDuration("");

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Task</DialogTitle>

      <DialogContent>
        <TextField
          label="Task Title"
          fullWidth
          margin="dense"
          value={title}
          onChange={(e) => {
            console.log("⌨️ Title:", e.target.value);
            setTitle(e.target.value);
          }}
        />

        <TextField
          label="Assigned To"
          fullWidth
          margin="dense"
          value={assignedTo}
          onChange={(e) => {
            console.log("👤 Assigned to:", e.target.value);
            setAssignedTo(e.target.value);
          }}
        />

        <TextField
          label="Duration (e.g. 3 days)"
          fullWidth
          margin="dense"
          value={duration}
          onChange={(e) => {
            console.log("⏳ Duration:", e.target.value);
            setDuration(e.target.value);
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAddTask}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTaskDialog;
