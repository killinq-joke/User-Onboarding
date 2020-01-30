import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';


function NormalForm(props) {
    

    
    console.log(props)
    
    function handleSubmit(values, actions) {
        // console.log(values);
        // console.log(actions);

        axios
        .post('https://reqres.in/api/users/', values)
        .then(res => {
            props.setUsers([...props.users, res.data]);
            actions.resetForm();
        })
        .catch(e => console.log(e))
        .finally(() => {
            // console.log('Axios request finished.');
        });
    }

    

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Minimum 3 characters').required('Please enter your name'),
        email: Yup.string().min(3, 'Minimum 3 characters').required('Please enter your email'),
        password: Yup.string().min(7, 'password not long enough').required('Please enter a password'),
        terms_of_service: Yup.boolean().oneOf([true], 'Field must be checked')
      });
      
      const initialState = {
        name: '',
        email: '',
        password: '',
        terms_of_service: false
      }

  return (
      <div >
          <Formik
          
          onSubmit={handleSubmit}
          initialValues={initialState}
          validationSchema={validationSchema}
          >
              <Form className="form">
                  <label htmlFor="name">Name</label>
                  <Field 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    className="input"/>
                    <ErrorMessage name="name" component="div" className="error"/>
                  <label htmlFor="email">Email</label>
                  <Field 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="input"/>
                    <ErrorMessage name="email" component="div" className="error"/>
                  <label htmlFor="password">Password</label>
                  <Field 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password here"
                    className="input"/>
                    <ErrorMessage name="password" component="div" className="error"/>
                  <label htmlFor="terms_of_service">Terms of Service</label>
                  <Field 
                    type="checkbox"
                    id="terms_of_service"
                    name="terms_of_service"
                    className="input"/>
                    <ErrorMessage name="terms_of_service" component="div" className="error"/>
                    <button type="submit">submit</button>
              </Form>
              
          </Formik>
      </div> 
  );
}

export default NormalForm;