import { combineReducers } from "redux";
import admin from "./user/reducer";
import categories from "./categories/reducer";

export default combineReducers({ admin, categories });
