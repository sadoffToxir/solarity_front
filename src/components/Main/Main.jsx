import React from 'react';
import Layout from "../Layout/Layout.jsx";
import {Field, Form, Formik} from "formik";
import './Main.scss';
import {useNavigate} from "react-router";

const Main = () => {
  const navigate = useNavigate()

  const initialValues = {
    search: ''
  }
  const searchValidation = (values) => {
    const errors = {};
    if (!values.search) {
      errors.search = 'Required'
    }
    return errors
  }
  const submit = (values, {setSubmitting}) => {
    navigate(`/weather?city=${values.search}`);
    setSubmitting(false)
  }

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validate={searchValidation}
        onSubmit={submit}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
          <Form>
            <div className={'search-form'}>
              <Field name='search'>
                {({
                    field,
                    form: {touched, errors},
                    meta,
                  }) => (
                  <>
                    <input type="text" placeholder="Please type a city" {...field} className={'search-form'}/>
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <button className={'search-submit'} type="submit">Submit</button>

            </div>
          </Form>
        )}

      </Formik>

    </Layout>
  )
}

export default Main;
