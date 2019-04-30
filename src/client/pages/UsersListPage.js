import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import axios from 'axios';

class UsersList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
    }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };
export default { loadData, component: connect(mapStateToProps)(UsersList) };
