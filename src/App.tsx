import {Box, Button, Stack, Typography} from "@mui/material";
import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import WazuhLogo from "./assets/wazuh_logo.png";
import AllUsers from "./components/Templates/Users/AllUsers";
import SingleUser from "./components/Templates/Users/SingleUser";
import AllTasks from "./components/Templates/Tasks/AllTasks";
import SingleTask from "./components/Templates/Tasks/SingleTask";

const classes = {
  navBarBtn: {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
  },
  wLogo: {
    width: "10%"
  },
  root: {
    padding: 30,
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <Box sx={{
          backgroundColor: "#1976d2",
          color: "rgba(0, 0, 0, 0.87)",
          WebkitTransition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxSizing: "border-box",
          flexShrink: 0,
          position: "static"
        }}>
          <Stack spacing={2} direction="row" sx={{alignItems: 'center', padding: 2}}>
            <img src={WazuhLogo} style={classes.wLogo}/>
            <Typography variant={"subtitle2"} sx={{color: "white"}}>Technical Task</Typography>
            <Box sx={{borderLeft: "1px solid"}}>
              <Link to={"/users"} style={classes.navBarBtn}>
                <Button variant="text" color={"inherit"}>Users</Button>
              </Link>
              <Link to={"/tasks"} style={classes.navBarBtn}>
                <Button variant="text" color={"inherit"}>Tasks</Button>
              </Link>
            </Box>
          </Stack>
        </Box>

        <div style={classes.root}>
          <Switch>
            <Route path="/tasks/:id">
              <SingleTask/>
            </Route>
            <Route path="/tasks">
              <AllTasks/>
            </Route>
            <Route path="/users/:id">
              <SingleUser/>
            </Route>
            <Route path="/users">
              <AllUsers/>
            </Route>
            <Route path="/">
              <AllUsers/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}