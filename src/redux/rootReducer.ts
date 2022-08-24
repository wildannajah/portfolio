/* eslint-disable import/no-cycle */
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import themeReducer from "./slice/theme";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export { rootPersistConfig, rootReducer };
