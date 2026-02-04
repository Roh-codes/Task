import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Typography } from "@mui/material";

function Dashboard() {
  const { tasks } = useContext(TaskContext);

  console.log("📊 Dashboard loaded");
  console.log("📊 Total tasks:", tasks.length);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Dashboard</Typography>
      
      <Typography>Total Tasks: {tasks.length}</Typography>
    </div>
  );
}

export default Dashboard;
