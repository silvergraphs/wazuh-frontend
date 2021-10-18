import {Button, Container, Typography} from "@mui/material";
import axios from "axios";
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {environment} from "../../../../config";

const SingleTask: React.FC = ({}) => {
  const [data, setData] = React.useState<Task | undefined>(undefined);
  const {id} = useParams<{ id: string }>();
  const history = useHistory();

  React.useEffect(() => {
    // Request to single task
    axios.get<TaskApiResponse>(`${environment.ENDPOINT}/tasks/${id}`)
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
      <Typography variant={"h4"} paragraph>Task #{id}</Typography>
      <Typography variant="body1">Completed: {data?.completed ? 'Yes' : 'No'}</Typography>
      <Typography variant="body1">Title: {data?.title}</Typography>
      <Typography variant="body1" paragraph>User ID: {data?.user_id}</Typography>
      <Button variant={"outlined"} startIcon={<ArrowBackIcon/>}
              onClick={() => history.push('/tasks')}>Go back to Tasks</Button>
    </Container>)

};

export default SingleTask;