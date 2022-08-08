import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer"
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
let reducers = combineReducers({
  MessagePage: DialogsReducer,
  ContentPage: ProfileReducer,
  UsersPage:UsersReducer,
  Auth:AuthReducer
});
export let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));

