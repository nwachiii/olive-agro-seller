import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import axios from "axios";
import "./Modal.css";

function getModalStyle() {
  return {
    width: "40vw",
    maxWidth: "100vw",
    maxHeight: "100%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgray",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({ PendingVendor }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [status] = useState("ACTIVATED");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmVendor = async (e) => {
    e.preventDefault();

    console.log("pending vendor userId", PendingVendor.user);

    const token = localStorage.getItem("token");
    console.log("token:", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(status);
    const body = JSON.stringify({
      status,
    });
    console.log("body:", body);
    try {
     const res = await axios.post(
        `https://www.api.oliveagro.org/api/merchant/activate/${PendingVendor.user}`,
        { status: "ACTIVATED" },
        config
      ); 
      console.log(res)
      handleClose();
    } catch (error) {
      console.log(error.response.data);
      // alert(error.response.data.message);
    }
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">Vendor Data</h3>
      <p id="simple-modal-description">
        Please check to confirm if the following credentails are valid before
        verifying this vendor
      </p>
      <form id="simple-modal-description">
        <div className="form_input">
          <label for="name" className="label">
            Company name:
          </label>
          <input
            className="input"
            type="text"
            value={PendingVendor.companyName}
            name="email"
          />
        </div>
        <div className="form_input">
          <label for="email">Company email:</label>
          <input
            className="input"
            type="email"
            value={PendingVendor.email}
            name="email"
          />
        </div>
        <div className="form_input">
          <label for="address" className="label">
            Company Address:
          </label>
          <input
            className="input"
            type="text"
            value={PendingVendor.companyAddress}
            name="address"
          />
        </div>
        <div className="form_input">
          <label for="number" className="label">
            Phone number:
          </label>
          <input
            className="input"
            type="text"
            value={PendingVendor.phoneNumber}
            name="text"
          />
        </div>
        <div className="form_input">
          <label for="cac" className="label">
            cac:
          </label>
          <input
            className="input"
            type="text"
            value={PendingVendor.cac}
            name="text"
          />
        </div>
        <div className="form_input">
          <label for="document" className="label">
            Document:
          </label>
          <img alt="img" src={PendingVendor.ID[0].documentUrl} />
        </div>
      </form>
      <div className="btn_area">
        <button
          onClick={handleConfirmVendor}
          style={{
            color: "white",
            backgroundColor: "#0e9146",
            width: "100px",
          }}
        >
          Verify
        </button>
        <button
          onClick={handleClose}
          style={{
            color: "white",
            backgroundColor: "red",
            width: "100px",
            marginLeft: "1em",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        See More
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
}

export default SimpleModal;
