import React, { useState } from "react";
import axios from "axios";
import { Grid, Card, TextField, Divider, Button } from "@material-ui/core";
import AddCategoryModal from "./AddCategoryModal";

function AddCategory() {
  const [name, setName] = useState("");
  const [catImg, setCatImg] = useState(null);

  const reset = () => {
    setName("");
    setCatImg("");
  };

  const getImageUrl = async () => {
    const image = new FormData();
    image.append("image", catImg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/upload",
        image,
        config
      );
      return res.data.image;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await getImageUrl();
    //handle token
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

        
    try {
      await axios.post(
        "https://www.api.oliveagro.org/api/category/create",
        { name: name, imageUrl: imageUrl },
        config
      ) 
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add category</div>
          <Divider className="my-4" />
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <form
                onSubmit={handleSubmit}
                className="d-flex p-3 flex-wrap direction-column"
              >
                <TextField
                  fullWidth
                  className="m-2"
                  id="outlined-basic"
                  label="category name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <Grid
                  item
                  xs={12}
                  lg={12}
                  className="d-flex flex-column my-3 align-items-center "
                >
                  <label className="text-ash align-self-start ml-3">
                    Category Image:
                  </label>
                  <input
                    type="file"
                    placeholder=""
                    name={catImg}
                    onChange={(e) => setCatImg(e.target.files[0])}
                    required
                  />
                </Grid>

                <Button
                  onClick={handleSubmit}
                  className="px-6 mx-auto my-3"
                  size="xl"
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
                  ADD NEW CATEGORY
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddCategory;
