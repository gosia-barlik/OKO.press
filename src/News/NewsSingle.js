import React from "react";

const NewSingle = ({ item }) => (
  <div className="card">
    <div className="card-image">
      <h5>{item.title}</h5>
      <img className="card-img-top" src={item.urlToImage} alt={item.title} />
      <span className="card-title">{item.source.name}</span>
    </div>

    <div className="card-action">
      <a href={item.url} className="btn btn-primary" target="_blank">
        Full article
      </a>
    </div>
  </div>
);

export default NewSingle;
