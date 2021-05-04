import { combineReducers } from "redux";
import productData from "./productData/reducer";
import admin from "./user/reducer";

export default combineReducers({ productData, admin });
