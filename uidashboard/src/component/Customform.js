import React from 'react';
import { useFormik, validateYupSchema, yupToFormErrors } from 'formik'
import * as Yup from 'yup'



const Customform = () => {

    const formik = useFormik(
        {
            initialValues: {
                employeecode: "",
                emppassword: ""
            },

            onSubmit: (values) => {
                console.log(values);
            },

            validationSchema: Yup.object({
                employeecode: Yup.string()
                    .max(8, "too long , invalid code")
                    .required("emp code required"),
                emppassword: Yup.string().required("Password Required!")
            })

        });




    return (
        <div class="panel panel-default">
            <div class="panel-body">
                <form onSubmit={formik.handleSubmit}>
                    <input type='text' name='employeecode' placeholder='Employee Code' value={formik.values.employeecode} onChange={formik.handleChange} /><br />
                    {formik.errors.employeecode}<br />
                    <input type='password' name='emppassword' placeholder='Password' value={formik.values.emppassword} onChange={formik.handleChange} /><br />
                    {formik.errors.emppassword}<br />
                    <button type='submit'>Click Me!</button>
                </form>
            </div>
        </div>
    );
}

export default Customform;
