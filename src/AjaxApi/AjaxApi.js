import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { layDanhSachPhimAction } from "../UserManagement/redux/action/QuanLyPhimAction";

class AjaxApi extends Component {
  state = {
    danhSachPhim: [],
  };
  renderPhim = () => {
    return this.props.danhSachPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top" src={phim.hinhAnh} alt="HinhAnh" />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh sách phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(layDanhSachPhimAction());
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
  };
};

export default connect(mapStateToProps)(AjaxApi);
