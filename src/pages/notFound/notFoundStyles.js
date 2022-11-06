import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  backgroundFill: {
    backgroundColor: theme.palette.background.default,
    minHeight: "30vh",
    textAlign: "center",
  },
  text: {
    fontSize: "40px",
    fontWeight: "bolder",
    textAlign: "center",
    paddingTop: "12px",
    [theme.breakpoints.down("1000")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "20px",
    },
  },
  icon: {
    fontSize: "6rem !important",
    color: theme.palette.background.text,
    marginTop: "10%",
    [theme.breakpoints.down("1000")]: {
      fontSize: "4rem !important",
      marginTop: "16%",
    },
    [theme.breakpoints.down("700")]: {
      marginTop: "20%",
      fontSize: "3rem !important",
    },
  }
}));