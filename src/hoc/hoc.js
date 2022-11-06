import React from 'react'
import { useStyles } from "./hocStyles";

const HOC = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.backgroundFill}>
            {children}
        </div>
    )
}

export default HOC