import axios from "axios";

export const SUB_CATEGORIES_SUCCESS = "SUB_CATEGORIES_SUCCESS";
export const SUB_CATEGORIES_FAILURE = "SUB_CATEGORIES_FAILURE";
export const SUB_CATEGORIES_BY_ID_SUCCESS = "SUB_CATEGORIES_BY_ID_SUCCESS";
export const SUB_CATEGORIES_BY_ID_FAILURE = "SUB_CATEGORIES_BY_ID_FAILURE";

export const listSubCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/subCategory/list/all"
    );
    dispatch({
      type: SUB_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORIES_FAILURE,
    });
    console.log(error);
  }
};


export const listSubCatById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://www.api.oliveagro.org/api/subCategory/category/${id}`
    );
    dispatch({
      type: SUB_CATEGORIES_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORIES_BY_ID_FAILURE,
    });
    console.log(error);
  }
};

