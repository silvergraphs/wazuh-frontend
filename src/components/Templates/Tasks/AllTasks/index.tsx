import {Container, Typography} from "@mui/material";
import {GridColumns} from '@mui/x-data-grid';
import axios from "axios";
import React from "react";
import FilterGrid from "../../../Organisms/FilterGrid";
import environment from "../../../../config/environment";

const AllTasks: React.FC = ({}) => {
  const [data, setData] = React.useState<Task[]>([]);

  React.useEffect(() => {
    // Request to all tasks
    axios.get<TaskApiResponseMultiple>(`${environment.ENDPOINT}/tasks?limit=200`)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const columns: GridColumns = [
    {field: 'id', headerName: "ID", width: 200},
    {field: 'title', headerName: "Title", width: 500},
    {field: 'completed', headerName: "Completed", width: 150, type: "boolean"},
    {field: 'user_id', headerName: "User ID", width: 170},
  ]

  return (
    <Container>
      <Typography variant={"h4"} paragraph>Tasks</Typography>
      <Typography variant={"body1"} paragraph>List all tasks and display the most important information to easily
        identify them</Typography>
      <FilterGrid rows={data} columns={columns} redirectionEntity={'/tasks'}/>
    </Container>
  );

};

export default AllTasks;