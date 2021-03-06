import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import { listCategories } from "../../redux/actions/categoriesActions";

import {
  Grid,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from "@material-ui/core";
function ShowCategories() {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategories());
  }, []);
  return (
    <>
      <MetaTags>
        <title>All Categories</title>
        <meta name="Categories" content="Categories." />
      </MetaTags>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={index} className="mb-4">
              <img
                alt={category.name}
                className="card-img-top"
                src={category.imageUrl}
              />
              <CardContent className="p-3">
                <h5 className="card-title font-weight-bold font-size-lg flex-wrap">
                  {category.name}
                </h5>
                <ButtonGroup>
                  <Button color="secondary" variant="contained">
                    Edit
                  </Button>
                  <Button color="secondary" variant="contained">
                    Delete
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ShowCategories;
