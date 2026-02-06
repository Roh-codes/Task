import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import AddTaskDialog from "../components/AddTaskDialog";
import { Grid, Typography, Button } from "@mui/material";

function Tasks() {
  console.log("📋 Tasks page rendered....mmm");

  const { tasks } = useContext(TaskContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("🪟 Open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("❌ Close dialoggggggg");
    setOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Tasks</Typography>

      <Button
        variant="contained"
        sx={{ my: 2 }}
        onClick={handleOpen}
      >
        + Add Task
      </Button>

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} md={4} key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Grid>

      <AddTaskDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default Tasks;
