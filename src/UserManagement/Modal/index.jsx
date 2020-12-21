import React, { Component } from "react";
import { connect } from "react-redux";
class Modal extends Component {
  handleCancelUser = () => {
    const action = {
      type: "HIDE_MODAL",
    };
    this.props.dispatch(action);
  };

  state = {
    user: {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "",
    },
  };

  updateUser = {
    username: "luan",
    name: "luan",
    email: "luan@gmail.com",
    phoneNumber: "123",
    type: "VIP",
  };

  handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //chặn reload trang của submit
    if (this.props.selectedUser) {
      this.props.dispatch({
        type: "UPDATE_USER",
        payload: this.state.user,
      });
    } else {
      this.props.dispatch({
        type: "ADD_USER",
        payload: this.state.user,
      });
    }
  };

  handleSetValue = () => {
    this.setState({
      user: this.updateUser,
    });
  };

  render() {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="bg-white w-50 mx-auto px-5 pb-3 rounded ">
          <h1 className="text-center display-4 m-0">Form User</h1>
          <button onClick={this.handleSetValue}>Set value</button>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                onChange={this.handleChange}
                name="username"
                disabled={!!this.props.selectedUser}
                value={this.state.user.username}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.user.name}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                name="email"
                value={this.state.user.email}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                onChange={this.handleChange}
                name="phoneNumber"
                value={this.state.user.phoneNumber}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                onChange={this.handleChange}
                name="type"
                value={this.state.user.type}
                className="form-control"
              >
                <option>USER</option>
                <option>VIP</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              onClick={this.handleCancelUser}
              className="btn btn-light ml-3"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.selectedUser &&
      this.setState({
        user: this.props.selectedUser,
      });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "SELECT_USER",
      payload: null,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(Modal);
