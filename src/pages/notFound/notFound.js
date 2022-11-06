import React from 'react'
import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';

import { useStyles } from "./notFoundStyles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.backgroundFill}>
        <FolderOffOutlinedIcon className={classes.icon} />
      </div>
      <div className={classes.text}>This page does not exist!</div>
    </div>
  )
}

export default NotFound