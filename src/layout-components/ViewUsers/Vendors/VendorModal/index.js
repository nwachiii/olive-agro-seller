import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

function VendorModal(Props) {
  const {
    open3,
    handleClose3,
    scroll,
    DialogContentText,
    descriptionElementRef
  } = Props;
  return (
    <Dialog
      open={open3}
      onClose={handleClose3}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">
        <h4 className="mb-0">Vendor Info</h4>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={2}>
          {[...new Array(10)]
            .map(() => 'All vendor information comes in here.\n')
            .join('\n')}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="justify-content-center flex-wrap">
        <Button onClick={handleClose3} color="secondary" variant="contained">
          Accept
        </Button>
        <Button onClick={handleClose3} color="secondary" variant="contained">
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default VendorModal;
