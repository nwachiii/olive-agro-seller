const API_KEY = '19F48E1111';

const requests = {
  fetchTrending: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchAllCategories: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchCategoryById: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  createCategory: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchAllProducts: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  addNewProduct: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchProductById: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchProductBySubCategory: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  createSubCategory: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchSubCategoryById: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchAllSubCategories: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchAllSubCategoriesById: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  uploadImage: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  fetchUserById: `/trending/all/movie?api_key=${API_KEY}&language=german`,
  updateUserById: `/trending/all/movie?api_key=${API_KEY}&language=german`
};

export default requests;
