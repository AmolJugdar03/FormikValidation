import React from "react";
import {connect} from 'react-redux';
import{ addData} from '../components/Redux/asyncAction/add'
import { useFormik } from "formik";
import {bindActionCreators} from 'redux'

const initialValues = {
  name: "",
  customerMobile: "",
  model: "",
  pincode: "",
  state: "",
  date: "",
  bateryNo: "",
  chasisNo: "",
  ModelColor: "",
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is Required*";
  }
  if (!values.customerMobile) {
    errors.customerMobile = "Mobile no is Required*";
  }
  if (!values.date) {
    errors.date = "Date is Required*";
  }
  if (!values.model) {
    errors.model = "Model is Required*";
  }
  
  if (!values.state) {
    errors.state = "State is Required*";
  }
  if (!values.pincode) {
    errors.pincode = "Pincode is Required*";
  }
  if (!values.bateryNo) {
    errors.bateryNo = "Battery No is Required*";
  }
  if (!values.chasisNo) {
    errors.chasisNo = "Chasi No is Required*";
  }
  if (!values.state) {
    errors.state = "State is Required";
  }
  return errors;
};

function WarrantyForm(props) {
  

  const formik = useFormik({
    initialValues,
    validate,
    /* onSubmit(values) {
      console.log("form values are", values);
      const payload={name:values.name,
      model: values.customerMobile,
      pincode: values.pincode,
      state: values.state,
      date: values.date,
      bateryNo: values.bateryNo,
      chasisNo: values.chasisNo,
      ModelColor: values.ModelColor}
      //addData(payload);
      //console.log(addData(payload));
      console.log("Data from when submit values",payload);
      
    }*/
    onSubmit(values, { props, setSubmitting }) {
      const { addData } = props
      const payload ={name:values.name,
        model: values.customerMobile,
        pincode: values.pincode,
        state: values.state,
        date: values.date,
        bateryNo: values.bateryNo,
        chasisNo: values.chasisNo,
        ModelColor: values.ModelColor}
      addData(payload).then(() => setSubmitting(false))
    },
  })
    
  
  return (
    <div className="container w-50">
      <br />
      <br />
      <div>
        <h3>WARRANTY REGESTRATION</h3>
      </div>
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={formik.handleSubmit}
        
      >
        <div class="col-md-12">
          <label for="validationCustom01" className="form-label text-danger">
            <h6>Customer Name*</h6>
          </label>
          <input
            type="text"
            value={formik.values.name}
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="validationCustom01"
            placeholder="Enter Name"
            required
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Customer mobile*</h6>
          </label>
          <input
            type="number"
            class="form-control"
            id="validationCustom01"
            name="customerMobile"
            onChange={formik.handleChange}
            placeholder="Enter Mobile No"
            onBlur={formik.handleBlur}
            required
          />
          {formik.errors.customerMobile && formik.touched.customerMobile ? (
            <div className="text-danger">{formik.errors.customerMobile}</div>
          ) : null}
        </div>
        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Model Purchased*</h6>
          </label>
          <input
            type="text"
            name="model"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            class="form-control"
            id="validationCustom01"
            placeholder="Enter Mobile No"
            required
          />
          {formik.errors.model && formik.touched.model ? (
            <div className="text-danger">{formik.errors.model}</div>
          ) : null}
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Pincode*</h6>
          </label>
          <input
            type="Number"
            name="pincode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            class="form-control"
            id="validationCustom01"
            placeholder="Enter Pincode No"
            required
          />
          {formik.errors.pincode && formik.touched.pincode ? (
            <div className="text-danger">{formik.errors.pincode}</div>
          ) : null}
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>State*</h6>
          </label>
          <input
            type="text"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="state"
            id="validationCustom01"
            placeholder="Enter State"
            required
          />
          {formik.errors.state && formik.touched.state ? (
            <div className="text-danger">{formik.errors.state}</div>
          ) : null}
        </div>
        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Date of invoice*</h6>
          </label>
          <input
            type="date"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="date"
            id="validationCustom01"
            placeholder="Enter Mobile No"
            required
          />
          {formik.errors.date && formik.touched.date ? (
            <div className="text-danger">{formik.errors.date}</div>
          ) : null}
        </div>
        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Battery NO*</h6>
          </label>
          <input
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="bateryNo"
            class="form-control"
            id="validationCustom01"
            placeholder="Enter Mobile No"
            required
          />
          {formik.errors.bateryNo && formik.touched.bateryNo ? (
            <div className="text-danger">{formik.errors.bateryNo}</div>
          ) : null}
        </div>
        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6> Chasis No*</h6>
          </label>
          <input
            type="number"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="chasisNo"
            id="validationCustom01"
            placeholder="Enter Mobile No"
            required
          />
          {formik.errors.chasisNo && formik.touched.chasisNo ? (
            <div className="text-danger">{formik.errors.chasisNo}</div>
          ) : null}
        </div>
        <div class="col-md-12">
          <label for="validationCustom01" class="form-label text-danger">
            <h6>Model Color*</h6>
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            default="Select Color"
            >
            <option selected>Select Color</option>
            <option value="1">red</option>
            <option value="2">green</option>
            <option value="3">blue</option>
            <option value="3">orange</option>
            <option value="3">Yellow</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="row-3">
          <div class="form-check form-check-inline">
            <label class="form-check-label" for="inlineRadio3">
              <h6 className="text-danger">Finance Through Bajaj</h6>
            </label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Yes
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              NO
            </label>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-danger" type="submit">
              Submit form
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
  console.log("from mapdispatchToProps");
  return bindActionCreators({addData},dispatch)
}
export default connect(null,mapDispatchToProps)(WarrantyForm);
