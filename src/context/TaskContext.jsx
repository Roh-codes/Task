import { createContext, useState } from "react";
import { dummyTasks } from "../data/dummyTasks";

// Create context
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  console.log("🧠 TaskProvider initialized");

  // Global task state
  const [tasks, setTasks] = useState(dummyTasks);

  // Add new task
 const addTask = (task) => {
  console.log("➕ Adding task to global state:", task);

  setTasks((prevTasks) => {
    console.log("📦 Previous tasks:", prevTasks);
    return [...prevTasks, task];
  });
};

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}
