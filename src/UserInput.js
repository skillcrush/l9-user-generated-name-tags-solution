import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: "",
  };
  updateName = (event) => this.setState({ name: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="name-input-form">
        <div className="name-submit">
          <label htmlFor="name" className="input-label">
            Add a new name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ann"
            value={this.state.name}
            onChange={this.updateName}
          />
        </div>
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
