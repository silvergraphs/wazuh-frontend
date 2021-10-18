import {Button, Container, Typography} from "@mui/material";
import axios from "axios";
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {environment} from "../../../../config";

const SingleUser: React.FC = ({}) => {
  const [data, setData] = React.useState<User | undefined>(undefined);
  const {id} = useParams<{ id: string }>();
  const history = useHistory();

  React.useEffect(() => {
    // Request to single user
    axios.get<UserApiResponse>(`${environment.ENDPOINT}/users/${id}`)
      .then(function (response) {
        console.log(response.data)
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <Container>
      <Typography variant={"h4"} paragraph>User #{id}</Typography>
      <Typography variant="body1">Name: {data?.name}</Typography>
      <Typography variant="body1">Username: {data?.username}</Typography>
      <Typography variant="body1">Email: {data?.email}</Typography>
      <Typography variant="body1">Address: {data?.address.street} - {data?.address.suite} - {data?.address.city} - {data?.address.zipcode}</Typography>
      <Typography variant="body1">Phone: {data?.phone}</Typography>
      <Typography variant="body1">Website: {data?.website}</Typography>
      <Typography variant="body1" paragraph>Company: {data?.company.name} - {data?.company.catchPhrase} - {data?.company.bs}</Typography>
      <Button variant={"outlined"} startIcon={<ArrowBackIcon/>}
              onClick={() => history.push('/users')}>Go back to Users</Button>
    </Container>)

};

export default SingleUser;