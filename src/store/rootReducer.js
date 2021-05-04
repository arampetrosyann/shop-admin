import { combineReducers } from "redux";
import productData from "./productData/reducer";
import getCustomer from "./customers/reducer";

export default combineReducers({ productData, getCustomer });
