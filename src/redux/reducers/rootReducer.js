import auth from "./auth";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import ThemeOptions from "./ThemeOptions";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  auth,
  ThemeOptions,
  categoryList: categoriesReducer,
  subCategoryList: subCategoriesReducer,
});

export default rootReducer;
