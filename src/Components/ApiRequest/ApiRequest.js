import React, { Component } from "react";
import axios from "axios";

export default class ApiRequest extends Component {
  state = {
    data: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    axios
      .get(this.props.url, {
        params: this.props.options,
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      })
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    return this.props.children(
      this.state.data,
      this.state.loading,
      this.state.error
    );
  }
}
