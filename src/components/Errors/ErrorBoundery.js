import React, { Component } from "react";

export default class ErrorBoundery extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    const errorStyle = {
      backgroundColor: "#efacac",
      border: "2px solid #ff0000",
    };
    if (error)
      return (
        <div className="error" style={errorStyle}>
          <h3>We are sorry... something went wrong</h3>
          <p>We cannot process your request at this moment.</p>
          <p>ERROR: {error.message}</p>
        </div>
      );
    return children;
  }
}
