import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

const Form = () => {
  const formik = useFormik({
    // initialvalues is used for getting a values from inputs
    initialValues: {
      mobile: "",
      email: "",
    },

    // validation schema is used for set validation on input
    validationSchema: yup.object({
      mobile: yup.string().required().min(2).max(10),
      email: yup.string().required().email(),
    }),

    // this function runs when initalvalues and validation schema successfully runs
    onSubmit: () => {
      toast.success("You Have Successfully Sign up");
    },
  });

  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header text-center">Form Validation</div>
              <form onSubmit={formik.handleSubmit}>
                <div class="card-body">
                  <div class="mt-2">
                    <label for="mobile" class="form-label">
                      Please Enter Your Mobile (Only Numbers Allowed)
                    </label>
                    <input
                      type="number"
                      className={`form-control
                    ${
                      formik.touched.mobile &&
                      (formik.errors.mobile ? "is-invalid" : "is-valid")
                    }
                    `}
                      id="mobile"
                      {...formik.getFieldProps("mobile")}
                      placeholder="Enter Your Mobile "
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Enter Your Mobile it's Mandatory
                    </div>
                  </div>
                  <div>
                    <label for="email" class="form-label">
                      Enter Your Email
                    </label>
                    <input
                      type="text"
                      className={`form-control
                    ${
                      formik.touched.email &&
                      (formik.errors.email ? "is-invalid" : "is-valid")
                    }
                    `}
                      id="email"
                      {...formik.getFieldProps("email")}
                      placeholder="Enter Your Email"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Enter Your Email it's Mandatory ...
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary w-100 mt-3">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
