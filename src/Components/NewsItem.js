import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    let { title, description, ImageUrl, NewsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text"> {description}</p>

            <a
              href={NewsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
