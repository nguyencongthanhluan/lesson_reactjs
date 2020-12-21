let initialState = {
  mangSinhVien: [
    {
      maSinhVien: 1,
      tenSinhVien: "Nguyễn văn a ",
      email: "vana@gmail.com",
      soDienThoai: "0909090909",
    },
    {
      maSinhVien: 2,
      tenSinhVien: "Trần thị b ",
      email: "thib@gmail.com",
      soDienThoai: "0123456789",
    },
  ],
  sinhVienSua: {
    maSinhVien: 1,
    tenSinhVien: "Nguyễn văn a ",
    email: "vana@gmail.com",
    soDienThoai: "0909090909",
  },
};
const BaiTapQuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSinhVienUpdate;
      return { ...state };
    }
    case "CHINH_SUA": {
      return { ...state, sinhVienSua: { ...action.sinhVien } };
    }
    case "CAP_NHAT_SINH_VIEN": {
      let mangSinhVienUpdate = [...state.mangSinhVien];
      let index = state.mangSinhVien.findIndex(
        (sv) => sv.maSinhVien === action.sinhVien.maSinhVien
      );
      if (index !== -1) {
        mangSinhVienUpdate[index] = { ...action.sinhVien };
      }
      state.mangSinhVien = mangSinhVienUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
export default BaiTapQuanLySinhVienReducer;
