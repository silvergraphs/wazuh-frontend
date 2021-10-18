import {Container, Typography} from "@mui/material";
import {GridColumns} from '@mui/x-data-grid';
import axios from "axios";
import React from "react";
import FilterGrid from "../../../Organisms/FilterGrid";
import {environment} from "../../../../config";

const AllUsers: React.FC = ({}) => {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    // Request to all users
    axios.get<UserApiResponseMultiple>(`${environment.ENDPOINT}/users?limit=200`)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const columns: GridColumns = [
    {field: 'id', headerName: "ID"},
    {field: 'name', headerName: "Name", width: 130},
    {field: 'username', headerName: "Username", width: 130},
    {field: 'email', headerName: "Email", width: 170},
    {field: 'city', headerName: "City", width: 120, valueFormatter: (params) => params.row.address.city},
    {field: 'phone', headerName: "Phone", width: 180},
    {field: 'website', headerName: "Website", width: 130},
    {field: 'company', headerName: "Company", width: 180, valueFormatter: (params) => params.row.company.name},
  ]

  return (
    <Container>
      <Typography variant={"h4"} paragraph>Users</Typography>
      <Typography variant={"body1"} paragraph>List all users and display the most important information to easily
        identify them</Typography>
      <FilterGrid rows={data} columns={columns} redirectionEntity={'/users'}/>
    </Container>
  );

};

export default AllUsers;