import React, { useState } from "react";
import axios from "axios";
import { Grid, Card, TextField, Divider, Button } from "@material-ui/core";

function AddSubCategory() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = JSON.stringify({
      name: subCategory,
      category_name: category,
    });

    try {
      await axios.post(
        "https://www.api.oliveagro.org/api/subCategory/create",
        body,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add Sub-category</div>
          <Divider className="my-4" />
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <form
                onSubmit={handleSubmit}
                className="d-flex p-3 flex-wrap direction-column"
              >
                <TextField
                  fullWidth
                  className="m-3"
                  id="outlined-basic"
                  label="sub-category name"
                  variant="outlined"
                  onChange={(e) => setSubCategory(e.target.value)}
                  value={subCategory}
                  required
                />
                <TextField
                  fullWidth
                  className="m-3"
                  id="outlined-basic"
                  label="category name"
                  variant="outlined"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  required
                />

                <Button
                  onClick={handleSubmit}
                  className="px-6 mx-auto my-3"
                  size="lg"
                  variant="contained"
                  type="submit"
                  style={{
                    color: "white",
                    backgroundColor: "#0e9146",
                    width: "60%",
                    fontWeight: 800,
                    padding: "1em 6px",
                    margin: "3px auto",
                  }}
                >
                  ADD NEW SUB CATEGORY
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddSubCategory;
