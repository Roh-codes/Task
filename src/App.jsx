import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import { TaskProvider } from "./context/TaskContext";

function App() {
  console.log("🚀 App component loaaa");

  return (
    // Global task state provider
    <TaskProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
