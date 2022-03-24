import React, { Component } from "react";
// import { ReactPropTypes } from 'react';
export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3 md-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <button className="btn btn-sn " color="white">
              <a color="white" href={newsUrl}>
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
