import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  //   DialogTitle,
  Button,
} from "@material-ui/core";
// import VendorInfo from "./VendorInfo";

export const DeleteModal = (Props) => {
  const {
    open3,
    handleClose3,
    scroll,
    DialogContentText,
    descriptionElementRef,
  } = Props;
  return (
    <Dialog
      open={open3}
      onClose={handleClose3}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogContent dividers={scroll === "paper"}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={2}
        >
          {/* Modal content comes in here */}
          {/* <VendorInfo vendorId={vendorId} /> */}
          <h4>Are you sure you want to delete this category ?</h4>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="justify-content-center flex-wrap py-4">
        <Button
          onClick={handleClose3}
          style={{
            color: "white",
            backgroundColor: "#0e9146",
            width: "200px",
          }}
        >
          YES
        </Button>
        <Button
          onClick={handleClose3}
          style={{
            color: "white",
            backgroundColor: "red",
            width: "200px",
          }}
        >
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
};
