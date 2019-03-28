import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "../actions";

class Input extends Component {
  onFormSubmit = e => {
    e.preventDefault();
    console.log(this);
    if (e.currentTarget.querySelector("input").value.trim().length > 0) {
      this.props.addList(e.currentTarget.querySelector("input").value.trim());
      e.currentTarget.querySelector("input").value = "";
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="todos"
          className="button"
          placeholder="ToDos"
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state };
};

export default connect(
  mapStateToProps,
  { addList: addList }
)(Input);
