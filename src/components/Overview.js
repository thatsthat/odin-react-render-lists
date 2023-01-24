import React, { Component } from "react";

class Overview extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      tasks: ["Task 1", "Task 2", "Task 3"],
    };
  }

  render() {
    const tasksList = this.state.tasks.map((task) => <li>{task}</li>);
    return (
      <div className="Overview">
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default Overview;
