import Nav from './../../components/Nav/index'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Helmet } from "react-helmet"
import './index.scss'



export default function Index() {

  const URL = "http://localhost:8080/product"
  const [data, setData] = useState([])

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  useEffect(() => {
    get()
  }, [])

  async function get() {
    const response = await axios.get(URL);
    setData(response.data)
  }

  async function deleteById(id) {

  }
  async function add(values) {
    console.log('oooo')
    console.log('v', values)
    const response = await axios.post(URL, values);
  }




  return (
    <div className='crud-page'>

      <Helmet>
        <meta charSet="utf-8" />
        <title> Project || Home </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Nav />

      <h1> Crud  </h1>

      <Formik
        initialValues={{
          name: '',
          category: '',
          price: '',
          img: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log('ee')
          add(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className='container'>
            <div className="group">
              <Field name="name" placeholder="Name" />
              <ErrorMessage name="name" />
            </div>
            <div className="group">
              <Field name="category" placeholder="Category" />
              <ErrorMessage name="category" />
            </div>
            <div className="group">
              <Field name="price" placeholder="Price" />
              <ErrorMessage name="price" />
            </div>
            <div className="group">
              <Field name="img" placeholder="Image URL" />
              <ErrorMessage name="img" />
            </div>
            <button type="submit">Submeit</button>
          </Form>
        )}
      </Formik>

      <div className="row">
        <header>
          <h3 className="name"> a </h3>
          <h3 className="category"> accessories </h3>
          <h3 className="price"> 52$ </h3>
          <h3 className="desc"> This is elon musk </h3>
        </header>
        <div className="body">
          {data.map((item, index) =>  (
            <div key={index} className="item">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <h3>{item.category}</h3>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
