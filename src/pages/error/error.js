import React from 'react'
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

import { useStyles } from "../notFound/notFoundStyles";

const Error = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.backgroundFill}>
        <FlutterDashOutlinedIcon className={classes.icon} />
      </div>
      <div className={classes.text}>Something went wrong, please try again later!</div>
    </div>
  )
}

export default Error