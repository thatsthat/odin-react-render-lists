import React, { Component } from "react";

class Overview extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const tasksList = this.props.tasks.map((task) => (
      <li key={task}>{task}</li>
    ));
    return (
      <div className="Overview">
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default Overview;
