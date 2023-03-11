import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            header: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          hjlasdfh alskdjf kljasd flkjsd flkajsdf aksdjf kalsdjf laksdjf lksadfj
          laskdjf asld fjaksdf lkjdf lksdjfg lkdjsf g lqkrkjt lqkrjoi
          dsfgkjodsifg lksjd fgnlkjhs dfg oi dgfj lksdfjg i dfgokjslkdfjg o
          dfkgjjlskdfg oidjf lkj oiqjw relkjoisfdjg laksjfgoiasg lksjgf aodsd
          goakdjgoaksjd goi.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
