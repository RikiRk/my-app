/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Newsitem from "./Newsitem";
import data from "../setupOutput.json";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        //ends here
      ],
      loading: false,
      page: 1,
    };
  }

  // async componentDidMount() {
  //   let Url =
  //     "https://newsapi.org/v2/everything?q=tesla&from=2022-01-01&sortBy=publishedAt&apiKey=c89c27d0fc9646ebb8430ac2888508db";

  //   let data = await fetch(Url);
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   this.setState({ articles: parseData.articles });
  // }

  Prev = () => {
    console.log("previous");
  };
  Next = () => {
    console.log("Next");
  };

  render() {
    return (
      <div className="container my-3 md-4">
        <h2>News Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element ? element.title : ""}
                  description={element ? element.description : ""}
                  imageUrl={element ? element.urlToImage : ""}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <button className="btn btn-dark " onClick={this.Prev}>
            &larr; Previous
          </button>
          <button className="btn btn-dark " onClick={this.Next}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
