import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "https://my-first-serverless-functions.netlify.app/api/2-basic-api";

const Basic = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section-center section">
      <div className="title">
        <h2>basic setup</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const {
            id,
            image: { url },
            price,
            name,
          } = product;
          return (
            <article className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h4>{name}</h4>
                <h6 className="price">${price}</h6>
              </div>
            </article>
          );
        })}
      </div>
    </section>
    // <h1>hello</h1>
  );
};

export default Basic;
