import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import { listCategories } from "../../../redux/actions/categoriesActions";

import { Grid, Card, CardContent } from "@material-ui/core";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";

function ShowCategories() {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, loading } = categoryList;
  console.log(categoryList);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

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
                    <div>{<EditModal category={category} />}</div>
                    <div>{<DeleteModal category={category} />}</div>
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
