import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import VendorInfo from './VendorInfo';

export const VendorModal = Props => {
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
        <h4 className="mb-0">Vendor Documents</h4>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={2}>
          <VendorInfo />
        </DialogContentText>
      </DialogContent>
      <DialogActions className="justify-content-center flex-wrap py-4">
        {/* <div style={ToggleBtnDisplay}> */}
        <Button
          onClick={handleClose3}
          style={{
            color: 'white',
            backgroundColor: '#0e9146',
            width: '200px'
          }}>
          Verify
        </Button>
        <Button
          onClick={handleClose3}
          style={{
            color: 'white',
            backgroundColor: 'red',
            width: '200px'
          }}>
          Decline Request
        </Button>
        {/* </div> */}
      </DialogActions>
    </Dialog>
  );
};
