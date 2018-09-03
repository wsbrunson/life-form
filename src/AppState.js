import { Component } from "react";

export default class AppState extends Component {
  state = {
    data: []
  };

  addData = data => this.setState({ data: this.state.data.concat(data) });

  render() {
    return this.props.children({
      data: this.state.data,
      addData: this.addData
    });
  }
}
