import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles, setArticles]= useState([])
  const [loading, setLoading]= useState(true)
  const [page, setPage]= useState(1)
  const [totalResults, setTotalResults]= useState(0)
  
  const capitalizeFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(()=>{
    document.title = `${capitalizeFirstChar(props.category)} - NewsCat`;
    updateNews()
    //eslint-disable-next-line
  },[])

  const updateNews = async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.setTotalResults)
    setLoading(false)

    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    setPage(page + 1)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
    return (
      <div className="container my-3">
        <h1 style={{marginTop:'90px'}}>
          NewsCat Top Headlines- {capitalizeFirstChar(props.category)}
          !
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="row my-4">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    ImageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={new Date(element.publishedAt).toLocaleString()}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
