import React, { Component } from "react";

export default class IconMenu extends Component {
  render() {
    return (
      <svg
        aria-label={this.props.label}
        className="icon-menu"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="16"
        viewBox="0 0 12 16"
      >
        <title>{this.props.label}</title>
        <path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" />
      </svg>
    );
  }
}
