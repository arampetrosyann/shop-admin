import { combineReducers } from "redux";
import productData from "./productData/reducer";
import user from "./user/reducer";

export default combineReducers({ productData, user });
