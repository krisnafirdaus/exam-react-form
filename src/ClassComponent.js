import React, { Component, Fragment } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
  };

  handleOnclick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <Fragment>
        <p>
          Total klik <strong>{this.state.count}</strong>
        </p>
        <button onClick={this.handleOnclick}>Klik!</button>
      </Fragment>
    );
  }
}

export default ClassComponent;
