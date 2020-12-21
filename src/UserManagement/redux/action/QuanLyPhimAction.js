import axios from "axios";

export const layDanhSachPhimAction = () => {
  return callAjax;
};
const callAjax = (dispatch) => {
  axios({
    url:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET",
  })
    .then((result) => {
      const action = {
        type: "LAY_DANH-SACH_PHIM",
        danhSachPhim: result.data,
      };
      //dispatch lên reducer sau khi lấy dữ liệu từ api về
      dispatch(action);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
