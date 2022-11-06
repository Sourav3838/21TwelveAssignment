import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardStyles: {
    width: "calc(100% - 12%)",
    margin: '20px 0px 20px 20px' ,
  },
  avatar: {
    width: "40% !important",
    margin: "auto",
  },
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.text,
  },
  loading: {
    color: theme.palette.background.text,
    fontSize: '5rem !important',
  },
  container:{
    textAlign:"center",
    paddingTop:'20%',
  }
}));
