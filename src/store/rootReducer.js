import { combineReducers } from "redux";
import productData from "./productData/reducer";
import getCustomer from "./customers/reducer";

import admin from "./user/reducer";

export default combineReducers({ productData, getCustomer, admin });
