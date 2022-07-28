import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import BreadcrumbsTop from 'components/Shared/BreadcrumbsTop'
import Button from 'components/Shared/Button'

const Checkout = () => {
  const initialValues = {
    fullName: '',
    tel: '',
    flatHouseNo: '',
    landmark: '',
    townCity: '',
    pincode: '',
  }

  const validate = Yup.object({
    fullName: Yup.string().required('The Full Name field is required'),

    tel: Yup.string().required('The Mobile Number field is required'),

    flatHouseNo: Yup.string().required('The Flat, House No field is required'),

    landmark: Yup.string().required('The Landmark field is required'),

    townCity: Yup.string().required('The Town/city field is required'),

    pincode: Yup.string().required('The Pincode field is required'),
  })

  return (
    <div className="checkout">
      <div className="content-header">
        <BreadcrumbsTop title="Checkout" />
      </div>
      <div className="content-wrapper grid grid-col-1 grid-col-lg-3">
        <div className="address-form-wrapper">
          <div className="address-form-header">
            <h4>Add New Address</h4>
            <p>Be sure to check "Deliver to this address" when you have finished</p>
          </div>
          <div className="address-form-content">
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(value) => console.log(value)}
            >
              {() => (
                <Form className="grid grid-col-1 grid-col-md-2">
                  <div className="form-control">
                    <label htmlFor="fullName">Full Name</label>
                    <Field id="fullName" name="fullName" type="text" />
                    <ErrorMessage component="small" name="fullName" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="tel">Mobile Number</label>
                    <Field id="tel" name="tel" type="number" />
                    <ErrorMessage component="small" name="tel" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="flatHouseNo">Flat, House No</label>
                    <Field id="flatHouseNo" name="flatHouseNo" type="text" />
                    <ErrorMessage component="small" name="flatHouseNo" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="landmark">Landmark</label>
                    <Field id="landmark" name="landmark" type="text" />
                    <ErrorMessage component="small" name="landmark" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="townCity">Town/City</label>
                    <Field id="townCity" name="townCity" type="text" />
                    <ErrorMessage component="small" name="townCity" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="pincode">Pincode</label>
                    <Field id="pincode" name="pincode" type="number" />
                    <ErrorMessage component="small" name="pincode" />
                  </div>

                  <div className="form-btn">
                    <Button size="small" type="submit">
                      Save and Deliver Here
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="address-info">
          <h4 className="info-title">John Doe</h4>
          <p className="info-text">9447 Glen Eagles Drive</p>
          <p className="info-text">Lewis Center, OH 43035</p>
          <p className="info-text">UTC-5: Eastern Standard Time (EST)</p>
          <p className="info-text">202-555-0140</p>
          <Button btnBlock size="small">
            Deliver To This Address
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
