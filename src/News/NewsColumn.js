import React, { Component } from "react";
import NewSingle from "./NewsSingle.js";

class NewsColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      pageSize: 3,
    };
  }

  handleScroll = () => {
    const columnHeight = document.getElementById("news-col");
    if (
      document.documentElement.scrollTop + window.innerHeight >
      columnHeight.offsetHeight
    ) {
      this.loadArticles();
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  loadArticles = () => {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&pageSize=${this.state.pageSize}&apiKey=${this.props.apiKey}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
          pageSize: this.state.pageSize + 3,
        });
        window.addEventListener("scroll", this.handleScroll);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.loadArticles();
  }

  renderItem() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }
  render() {
    return (
      <div id="news-col" className="col-md-12" onScroll={this.handleScroll}>
        {this.renderItem()}
      </div>
    );
  }
}

export default NewsColumn;
