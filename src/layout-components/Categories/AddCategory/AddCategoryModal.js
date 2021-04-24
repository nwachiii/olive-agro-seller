import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { useHistory } from "react-router";

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
    height: 250,
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

function AddCategoryModal() {
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

  let history = useHistory()
  const handleAddCatSuccess = (e) => {
    e.preventDefault();

  handleClose()
  history.push("/SeeAllCategories")

  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id="simple-modal-description" className="my-2">
        You have successfully added a new category!!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleAddCatSuccess}
          style={{
            color: "white",
            backgroundColor: "#0e9146",
            width: "100px",
          }}
        >
          SEE ALL CATEGORIES
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
          backgroundColor: "red",
          width: "100px",
          marginLeft: "1em",
        }}
      >
        AddCatButton
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddCategoryModal;
