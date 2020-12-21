import { combineReducers } from "redux";
import modalReducer from "./modal";
import userList from "./userList";
import selectedUser from "./selectedUser";
import BaiTapQuanLySinhVienReducer from "./BaiTapQuanLysinhVienReducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
  //chứa state ( dữ liệu lưu trên store)
  // tenDuLieu: tenReducerQuanLyDuLieu
  showModal: modalReducer,
  userList,
  selectedUser,
  BaiTapQuanLySinhVienReducer,
  QuanLyPhimReducer,
});

export default rootReducer;
