import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import { listCategories } from "../../../redux/actions/categoriesActions";

import {
  Grid,
  Card,
  CardContent,
  Button,
  DialogContentText,
} from "@material-ui/core";
import { DeleteModal } from "../Modals/DeleteModal";

function ShowCategories() {
  const [open3, setOpen3] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, loading } = categoryList;
  console.log(categoryList);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const handleClickOpen3 = (scrollType) => () => {
    setOpen3(true);
    setScroll(scrollType);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open3]);

  return (
    <>
      <MetaTags>
        <title>All Products</title>
        <meta name="Display Products" content="Display Products." />
      </MetaTags>
      <Grid container spacing={4}>
        {loading ? (
          <div>Loading....</div>
        ) : (
          categories.map((category, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <img
                  alt={category.name}
                  className="card-img-top .card-img-overlay"
                  src={category.imageUrl}
                />
                <CardContent className="p-3">
                  <h5 className="card-title font-weight-bold font-size-lg flex-wrap">
                    {category.name}
                  </h5>
                  <div className="my-3 d-flex flex-wrap">
                    {
                      <DeleteModal
                        open3={open3}
                        handleClose3={handleClose3}
                        scroll={scroll}
                        DialogContentText={DialogContentText}
                        descriptionElementRef={descriptionElementRef}
                      />
                    }
                    <Button
                      size="md"
                      style={{
                        color: "white",
                        backgroundColor: "#0e9146",
                        marginRight: "1.5em",
                      }}
                      className="px-4"
                    >
                      EDIT
                    </Button>
                    <Button
                      size="md"
                      style={{ color: "white", backgroundColor: "red" }}
                      className="px-4"
                      onClick={handleClickOpen3("paper")}
                    >
                      DELETE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default ShowCategories;
