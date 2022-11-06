import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: "calc(100% - 12%)",
    margin: '20px 0px 20px 20px',
    maxHeight: 400,
    [theme.breakpoints.down("700")]: {
      maxHeight: 300,
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
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.text,
  },
  heading:{
    margin:0,
    [theme.breakpoints.down("1000")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "15px",
    },
  }
}));