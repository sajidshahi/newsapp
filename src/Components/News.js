import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db0a24fad96e41e2befd9428f39c4ccc&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults});
  }

  handlePreClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${
      this.state.page - 1
    }&apiKey=db0a24fad96e41e2befd9428f39c4ccc&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  
  handleNextClick = async () => {
    if (this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))
    {}

    else {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${
      this.state.page + 1}&apiKey=db0a24fad96e41e2befd9428f39c4ccc&pageSize=${this.props.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
}

  render() {
    return (
      <div className="container my-3">
        <h1>NewsCat Top Headlines!</h1>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  ImageUrl={element.urlToImage}
                  NewsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreClick}
          >
            &larr;Previous
          </button>
          <button
          disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
