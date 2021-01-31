import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

export default function PositionedSnackbar(props) {
    const [state] =useState({
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal } = state;

    return (
      <div>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
          <Alert onClose={props.handleClose} severity="error">
            Something went wrong or the data is not available {props.message}
          </Alert>
        </Snackbar>
      </div>
    );
}