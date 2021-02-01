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

      const [open, setOpen] = useState( props.open);

  
      //close function to close snackbar
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };



    return (
      <div>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Something went wrong or the data is not available
          </Alert>
        </Snackbar>
      </div>
    );
}