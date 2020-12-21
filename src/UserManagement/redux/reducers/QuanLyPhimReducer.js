let initialState = {
  danhSachPhim: [
    {
      maPhim: 1344,
      tenPhim: "I am not a rapper",
      biDanh: "i-am-not-a-rapper",
      trailer: "https://www.youtube.com/embed/rCitoVqfyM8",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.png",
      moTa:
        "Remember when this show first came out and everyone started realizing that the way they treat others actually matters, but only for about a week, then everyone went back to pushing ppl towards suicide again.",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-08-28T09:55:06.537",
      danhGia: 10,
    },
  ],
};
const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAY_DANH-SACH_PHIM":
      //lấy danh sách phim từ api về cập nhật lại state Redux
      state.danhSachPhim = action.danhSachPhim;
      return { ...state };
    default:
      return state;
  }
};
export default QuanLyPhimReducer;
