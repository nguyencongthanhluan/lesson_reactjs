import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import { connect } from "react-redux";

class BaiTapQuanLySinhVien extends Component {
  renderSinhvien = () => {
    return this.props.mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSinhVien}</td>
          <td>{sinhVien.tenSinhVien}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button className="btn btn-danger mr-2">Xóa</button>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.dispatch({ type: "CHINH_SUA", sinhVien: sinhVien });
              }}
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <FormSinhVien />
        <table className="table">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhvien()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.BaiTapQuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps)(BaiTapQuanLySinhVien);
