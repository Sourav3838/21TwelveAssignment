import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

import { useStyles } from "./albumDetailStyles";
import { apiCalling } from "../../api/api";
import HOC from "../../hoc/hoc";

const AlbumDetail = () => {
  const { albumId = '', albumTitle = '' } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const [albumDetails, setAlbumDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (albumId && albumTitle) {
      setLoading(true);
      apiCalling(
        "https://jsonplaceholder.typicode.com/photos",
        setAlbumDetails,
        setLoading,
        navigate,
      )
    }
  }, [albumId, navigate, albumTitle]);

  return (
   <HOC>
      {loading ? (
        <div className={classes.container}>
          <HourglassBottomIcon className={classes.loading} />
        </div>
      ) : (
        <div>
          <Typography gutterBottom variant="h5" component="div" className={classes.albumTitle}>
            {albumTitle}
          </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
              {Array.isArray(albumDetails) &&
                albumDetails.length &&
                albumDetails.filter((data) => data?.albumId === Number(albumId)).map((item) => (
                  <ImageListItem key={item?.url}>
                    <img
                      src={`${item?.url}?w=248&fit=crop&auto=format`}
                      srcSet={`${item?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item?.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      className={classes.title}
                      title={item?.title}
                    />
                  </ImageListItem>
                ))}
            </ImageList>
        </div>
      )}
    </HOC>
  );
};

export default AlbumDetail;
