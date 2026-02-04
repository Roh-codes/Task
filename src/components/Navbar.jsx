import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  console.log("🧭 Navbar rendered");

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TaskFlow
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} to="/tasks">
          Tasks
        </Button>
         <Button color="inherit" component={Link} to="/tasks">
          search bar
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
