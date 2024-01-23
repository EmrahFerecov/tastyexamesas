import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Detail = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();
  async function getproducts() {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    setproduct(res.data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <section>
      <Helmet>
    <title>Detail</title>
    </Helmet>
      
      {product ? (
        <div className="card">
          <h3>{product.title}</h3>
          <h2>{product.price}</h2>
          <p>{product.categories}</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Detail;
