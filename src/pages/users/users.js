import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

import { useStyles } from "./usersStyles";
import { apiCalling } from "../../api/api";
import HOC from "../../hoc/hoc";

const Users = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiCalling(
      "https://jsonplaceholder.typicode.com/users",
      setUsers,
      setLoading,
      navigate,
    )
  }, [navigate]);

  return (
    <HOC>
      {loading ? (
        <div className={classes.container}>
          <HourglassBottomIcon className={classes.loading} />
        </div>
      ) : (
        <Grid container>
          {Array.isArray(users) &&
            users.length &&
            users.map((data) => (
              <Grid xs={12} sm={6} md={4} key={data?.id}>
                <Card className={classes.cardStyles}>
                  <CardMedia
                    className={classes.avatar}
                    component="img"
                    height="140"
                    image="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
                    alt={data?.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data?.name}
                    </Typography>
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={() => {
                        navigate(`/user/${data?.id}/albums`);
                      }}
                      size="small"
                    >
                      View Albums
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            )
            )}
        </Grid>
      )}
    </HOC>
  );
};

export default Users;
