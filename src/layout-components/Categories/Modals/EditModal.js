import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Modal } from "@material-ui/core";
import axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgray",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
}));

const inputStyle = {
  padding: "0.5em 7px",
  borderRadius: "10px",
  border: "1px solid lightgray",
  margin: "0 auto",
};

function EditModal({ category }) {
  let history = useHistory();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = JSON.stringify({
      name: category.name,
    });

    try {
      await axios.patch(
        `https://www.api.oliveagro.org/api/category/${category._id}`,
        body,
        config
      );
      handleClose();
    } catch (error) {
      console.log(error.response.data);
      error.response.data.message === "jwt expired"
        ? history.push("/Login")
        : console.log(error.response.data.message);
    }
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">Edit Category</h3>
      <form className="d-flex p-3 flex-wrap direction-column mb-3">
        <input
          type="text"
          defaultValue={category.name}
          onChange={(e) => e.target.value}
          name="category name"
          style={inputStyle}
        />
        <div className="mt-4 mb-3 d-flex direction-column">
          <input
            type="file"
            placeholder=""
            name={category.imageUrl}
            onChange={(e) => e.target.files[0]}
            required
          />
        </div>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleEditCategory}
          style={{
            color: "white",
            backgroundColor: "#0e9146",
            width: "100px",
          }}
        >
          Save
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
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "#0e9146",
          width: "100px",
        }}
      >
        Edit
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

export default EditModal;
