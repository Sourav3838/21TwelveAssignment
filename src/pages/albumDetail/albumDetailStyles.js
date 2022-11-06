import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    bottom: 0,
  },
  albumTitle: {
    color: theme.palette.background.text,
    textAlign: "center",
    fontSize: "40px",
    padding: "10px 0px",
    textTransform:"capitalize",
    [theme.breakpoints.down("1000")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "20px",
    },
  },
  loading: {
    color: theme.palette.background.text,
    fontSize: '5rem !important',
  },
  container: {
    textAlign: "center",
    paddingTop: '20%',
  },
}));
