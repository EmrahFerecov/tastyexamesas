import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { Link } from "react-router-dom";

const AddPage = () => {
  const [product, setproduct] = useState();
  const [search,setSearch] = useState("")








  async function getproducts() {
    const res = await axios.get(`http://localhost:3000/products`);
    setproduct(res.data);
  }

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:3000/products/${productId}`);
    getproducts();
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <section id="addpage">
      <Helmet>
        <title>Addpage</title>
      </Helmet>

      <Formik
        initialValues={{ title: "", price: "", categories: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          categories: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await axios.post("http://localhost:3000/products", values);
          resetForm;
        }}
      >
        <Form>
          <label htmlFor="title">First Name</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <label htmlFor="categories">Categories</label>
          <Field name="categories" type="text" />
          <ErrorMessage name="categories" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <input type="text" onChange={(e)=>setSearch(e.target.value)} />

      <table>
      <tr>
      <th>title</th>
      <th>price</th>
      <th>categories</th>
      </tr>

      

        {product && 
          product.filter(x=>x.title.toLowerCase().trim().includes(search.toLowerCase())).map((item) => (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.categories}</td>
                <td> <Link to={`/detail/${item._id}`}><button>Detail</button></Link></td>
                <td><button onClick={() => handleDelete(item._id)}>Sil onu</button></td>
            </tr>
          ))}
      </table>
    </section>
  );
};

export default AddPage;
