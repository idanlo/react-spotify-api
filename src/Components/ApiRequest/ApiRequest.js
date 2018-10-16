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
    if (
      prevProps.url !== this.props.url ||
      (prevProps.options &&
        this.props.options &&
        prevProps.options.type &&
        this.props.options.type &&
        prevProps.options.type !== this.props.options.type) ||
      (prevProps.options &&
        this.props.options &&
        prevProps.options.q &&
        this.props.options.q &&
        prevProps.options.q !== this.props.options.q)
    ) {
      this.fetchData();
    }
  }

  fetchData = () => {
    console.log("REACT-SPOTIFY-API UPDATE - FETCHING DATA");
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
