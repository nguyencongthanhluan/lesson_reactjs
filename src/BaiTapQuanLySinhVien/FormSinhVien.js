import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class FormSinhVien extends Component {
  state = {
    maSinhVien: "",
    tenSinhVien: "",
    soDienThoai: "",
    email: "",
  };
  handleChange = (e) => {
    let { value, name } = e.target;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault(); // chặn sự kiện reload browser khi submit
    console.log(this.state);
    this.props.dispatch({
      type: "THEM_SINH_VIEN",
      sinhVien: this.state,
    });
  };

  //   static getDerivedStateFromProps(newProps, currentState) {//lifecycle chạy khi props thay đổi hoặc state thay đổi
  //     let newState = newProps.sinhVienSua;
  //     return newState;//trả về state mới cho component
  //   }

  //   componentWillReceiveProps(newProps) {
  //     //hàm lifecycle chạy sau khi props thay đổi và trước khi render
  //     //lấy props mới gán lại cho state
  //     this.setState(newProps.sinhVienSua);
  //   }

  render() {
    let { maSinhVien, tenSinhVien, soDienThoai, email } = this.state; //lấy dữ liệu từ state

    return (
      <div className="card text-left">
        <div className="card-header bg-dark text-white font-weight-bold">
          THÔNG TIN SINH VIÊN
        </div>
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div class="row">
            <div className="col-6">
              <div className="form-group">
                <p>Mã sinh viên</p>
                <input
                  value={maSinhVien}
                  className="form-control"
                  onChange={this.handleChange}
                  name="maSinhVien"
                />
              </div>
              <div className="form-group">
                <p>Tên sinh viên</p>
                <input
                  value={tenSinhVien}
                  className="form-control"
                  onChange={this.handleChange}
                  name="tenSinhVien"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  className="form-control"
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  onChange={this.handleChange}
                  name="soDienThoai"
                />
              </div>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-success">
                Thêm sinh viên
              </button>
              <button
                type="button"
                className="btn btn-primary ml-2"
                onClick={() => {
                  this.props.dispatch({
                    type: "CAP_NHAT_SINH_VIEN",
                    sinhVien: this.state,
                  });
                }}
              >
                Cập nhật sinh viên
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    //setState và nhận props mới đều chạy => 2 tham số là state cũ và props cũ
    //để setState được trong component này phải có if
    if (!_.isEqual(this.props.sinhVienSua.maSinhVien, this.state.maSinhVien)) {
      //nếu như props.sinhVienSua trước khi render !== state hiện tại => setState=props đó
      this.setState(prevProps.sinhVienSua);
    }
  }
}
const mapStateToProps = (state) => {
  return {
    sinhVienSua: state.BaiTapQuanLySinhVienReducer.sinhVienSua,
  };
};
export default connect(mapStateToProps)(FormSinhVien);
