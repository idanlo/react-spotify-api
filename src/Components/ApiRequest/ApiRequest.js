import React, { Component } from "react";
import axios from "axios";

export default class ApiRequest extends Component {
  state = {
    data: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    console.log("REACT-SPOTIFY-API UPDATE");
    if (
      prevProps.url !== this.props.url ||
      prevProps.options.type !== this.props.options.type ||
      prevProps.options.q !== this.props.options.q
    ) {
      this.fetchData();
    }
  }

  fetchData = () => {
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
  };

  render() {
    return this.props.children(
      this.state.data,
      this.state.loading,
      this.state.error
    );
  }
}
