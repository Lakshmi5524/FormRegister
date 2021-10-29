import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';

import axios from 'axios'

const Login = (props) => {
	const formik = useFormik({
		initialValues: {

			email: '',
			password: '',
		},

		validationSchema: yup.object({
			email: yup.string()
				.email('Enter Valid Email Address')
				.strict()
				.trim()
				.required('This field is required'),
			password: yup.string()
				.strict()
				.trim()
				.required('password is Required'),
		}),

		onSubmit: (data) => {
			// console.log(data);
			axios.post('http://localhost:2020/api/login', data)

				.then(res => {
					console.log(res);
					localStorage.setItem('auth', JSON.stringify(res.data));

					toast.success("Success Notification !")
					props.history.push('/home');
				})
				.catch(function (error) {
					toast.error(error.response.data);
				})

		}


	});
	return (
		<div className="container  col-6 mt-3">
			<h1>Login</h1>
			<div className="jumbotron">
				<form autoComplete="off" onSubmit={formik.handleSubmit}>

					<div className="form-group">
						<label>Email: </label>
						<input
							className="form-control"
							type="email"
							name="email"
							placeholder="Enter Your email"
							onChange={formik.handleChange}
							value={formik.values.emil}
						/>
						{formik.errors.emil ?
							<div className="text-danger">{formik.errors.emil}</div>
							: null
						}
					</div>

					<div className="form-group">
						<label>password: </label>
						<input
							className="form-control"
							type="text"
							name="password"
							placeholder="Enter Your Name"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						{formik.errors.password ?
							<div className="text-danger">{formik.errors.password}</div>
							: null
						}
					</div>

					<div className="d-flex justify-content-between">
						<button className=" btn btn-primary" type="submit">submit</button>
						<a
							href="#"
							onClick={() => {
								window.location.href = 'register';
							}}
						>
							Register
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}


export default Login;