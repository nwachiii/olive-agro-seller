import axios from "axios";

export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_FAILURE = "CATEGORIES_FAILURE";

export const listCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/category/list/all"
    );
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAILURE,
    });
    console.log(error);
  }
};

//Get ImageUrl from Cloudinary
export const getImageUrl = async ({ imageUrl }) => {
  const image = new FormData();
  image.append("image", imageUrl);
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
    console.log(res.data.image);
    return res.data.image;
  } catch (error) {
    console.log(error);
  }
};
