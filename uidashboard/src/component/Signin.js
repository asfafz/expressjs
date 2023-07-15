import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signin = () => {

    const [err, seterr] = useState("");
    const [employeename, setemployeename] = useState("")

    const history = useNavigate();


    const formik = useFormik({
        initialValues: {

            employeecode: '',
            psw: ''
        },


        validationSchema: Yup.object({
            employeecode: Yup.string()
                .max(8, 'Maximum 8 characters or less')
                .matches(/^[0-9A-Za-z]*[0-9a-zA-Z]*$/, "Invalid employee code")
                .required('Employee code required'),
            psw: Yup.string().required('Password required')
            //.max(20, 'Must be 20 characters or less')
            //email: Yup.string().email('Invalid email address').required('Required'),
        }),


        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            console.log(values);






            axios.post('http://apps.masoodtextile.com/webapi1/api/LABELID/LabelIdEmpInfo', {
                site: 'E',
                empcode: values.employeecode
            })
                .then(result => {
                    console.log(result)
                    console.log("--------------" + result.data.length)

                    if (result.data.length > 0) {
                        setemployeename(result.data[0].EMPNAME)
                        seterr("")
                        history('/dashboard');
                    }
                    else {
                        setemployeename("")
                        seterr("Invalid Username/Password")
                    }

                })
                .catch(error => { console.log(error) })




        }
    });

    return (
        <>
            <div className="center" style={{ marginTop: "200px" }}>
                <div className="row">
                    <div className="col-12">
                        <img src="assets/images/logo.jpg" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12" style={{ fontsize: "24px" }}>
                        <b>Sign in</b>
                    </div>
                </div>
                {/* Form Start-------------------------------------------------------------------------------------------------*/}
                <FadeIn>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" placeholder="Employee Code" name='employeecode' className={formik.errors.employeecode ? "error form-control" : 'form-control'} onChange={formik.handleChange}
                                    value={formik.values.employeecode} />
                            </div>
                        </div>
                        <div className="row"><div className="col-12 text-danger small">{formik.errors.employeecode}</div></div>

                        <div className="row">
                            <div className="col-12">
                                <input type="password" placeholder="Password" name='psw' className={formik.errors.psw ? "error form-control" : 'form-control'} onChange={formik.handleChange} value={formik.values.psw} />
                            </div>
                        </div>
                        <div className="row"><div className="col-12">
                            <span className='text-danger small'>{formik.errors.psw}</span>
                        </div></div>
                        <div className="row">
                            <div className="col-9 text-danger small">
                                {err}{employeename}
                            </div>
                            <div className="col-3" >
                                <button className="btn btn-primary" type="submit">Sign in</button>
                            </div>
                        </div>
                    </form></FadeIn>
            </div>
            {/* Form End-------------------------------------------------------------------------------------------------*/}
        </>
    );
}
export default Signin;
