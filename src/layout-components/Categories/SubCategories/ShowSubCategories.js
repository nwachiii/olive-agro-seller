import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { listSubCategories } from "../../../redux/actions/subCategoriesAction";

import { Grid, Card, CardContent } from "@material-ui/core";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";

function ShowSubCategories() {
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategories, loading } = subCategoryList;
  console.log(subCategoryList);
  console.log(subCategories);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const id = location.search.slice(1);

  useEffect(() => {
    dispatch(listSubCategories());
  }, [dispatch]);

  const matchedSubCatsFromCat = subCategories.filter((subCategory) => {
    console.log("matched category_id: ", subCategory.category_id)
    console.log("matched id: ", id)
    return subCategory.category_id === id
      ? subCategory
      : (history.push("/SeeAllCategories"),
        alert("There are no subcategories for this category"));
  });

  return (
    <>
      <MetaTags>
        <title>Sub Categories</title>
        <meta name="Display Sub Categories" content="Display Sub Categories" />
      </MetaTags>
      <Grid container spacing={4}>
        {loading ? (
          <div>Loading....</div>
        ) : (
          matchedSubCatsFromCat.map((subCategory, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <img
                  alt={subCategory.name}
                  className="card-img-top .card-img-overlay"
                  src={subCategory.imageUrl}
                />
                <CardContent className="p-3">
                  <h5 className="card-title font-weight-bold font-size-lg flex-wrap">
                    {subCategory.name}
                  </h5>
                  <div className="my-3 d-flex flex-wrap">
                    <div>{<EditModal category={subCategory} />}</div>
                    <div>{<DeleteModal category={subCategory} />}</div>
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

export default ShowSubCategories;

