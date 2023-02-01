import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { value: "", tasks: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ tasks: [...this.state.tasks, this.state.value] });
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Overview tasks={this.state.tasks} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
