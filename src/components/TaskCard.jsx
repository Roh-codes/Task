import { Card, Typography, Chip, Box } from "@mui/material";

function TaskCard({ task }) {
  console.log("📄 Rendering task:", task);

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6">{task.title}</Typography>

      <Chip
        label={task.status}
        size="small"
        sx={{ mt: 1, mb: 1 }}
      />

      <Box>
        <Typography variant="body2">
          👤 Assigned To: {task.assignedTo}
        </Typography>

        <Typography variant="body2">
          ⏳ Duration: {task.duration}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          📅 Assigned At: {task.assignedAt}
        </Typography>
      </Box>
    </Card>
  );
}

export default TaskCard;
