import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./albumsStyles";
import { apiCalling } from "../../api/api";
import HOC from "../../hoc/hoc";

const Albums = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const [albumRecord, setAlbumRecord] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      apiCalling(
        "https://jsonplaceholder.typicode.com/albums",
        setAlbumRecord,
        setLoading,
        navigate,
      )
    }
  }, [id, navigate]);

  return (
    <HOC>
      {loading ? (
        <div className={classes.container}>
          <HourglassBottomIcon className={classes.loading} />
        </div>
      ) : (
        <Grid container>
          {Array.isArray(albumRecord) &&
            albumRecord.length &&
            albumRecord.filter((data) => data?.userId === Number(id)).map((data) => (
              <Grid xs={12} sm={6} md={4} key={data?.id} >
                <Card className={classes.card}>
                  <CardContent >
                    <Typography component="div" variant="h5" className={classes.heading}>
                      {data?.title}
                    </Typography>
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={() => {
                        navigate(`/album/${data?.id}/${data?.title}`);
                      }}
                      size="small"
                    >
                      View
                    </Button>
                  </CardContent>

                  <CardMedia
                    component="img"
                    image="https://img.discogs.com/GshsBZG_rHTh_nhMOzCx0yaaOLk=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13773504-1560804923-4546.jpeg.jpg"
                    alt={data?.title}
                  />
                </Card>
              </Grid>
            )
            )}
        </Grid>
      )}
    </HOC>
  );
};

export default Albums;
