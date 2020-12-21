import React, { Component } from "react";
import { connect } from "react-redux";

class UserItem extends Component {
  handleEditUser = () => {
    const action = {
      type: "SHOW_MODAL",
    };
    this.props.dispatch(action);
    //dispatch action set selectedUser
    this.props.dispatch({
      type: "SELECT_USER",
      payload: this.props.item,
    });
  };

  handleDeleteUser = () => {
    this.props.dispatch({
      type: "DELETE_USER",
      payload: this.props.item.username,
    });
  };

  render() {
    const { name, username, email, phoneNumber, type } = this.props.item;
    return (
      <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{type}</td>
        <td>
          <button onClick={this.handleEditUser} className="btn btn-info mr-2">
            Edit
          </button>
          <button onClick={this.handleDeleteUser} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(UserItem);
