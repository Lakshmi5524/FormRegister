import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import axios from 'axios'

const Register = (props) => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',

		},

		validationSchema: yup.object({
			name: yup.string()
				.strict()
				.trim()
				// .uppercase()
				.required('Name is Required'),
			// .min(5, "Minimum 5 characters Required")
			// .max(15, 'Maximum 15 Characters Only'),
			email: yup.string()
				.email('Enter Valid Email Address')
				.strict()
				.trim()
				.required('This field is required'),
			password: yup.string()
				.strict()
				.trim()
				.required('password is Required'),
			confirmPassword: yup.string()
				.oneOf([yup.ref('password'), null], "confirm password and password must be same")
				.required('ConfirmPassword is Required'),

		}),

		onSubmit: (data) => {
			console.log(data);
			axios.post('http://localhost:2020/api/register', data)
				.then(res => {
					toast.success(" User Register Succsefully")
					props.history.push('/login')
				})
				.catch(err => {
					toast.error(err.response.data);
				})

		}


	});
	return (
		<div className="container  col-6 mt-3">
			<h1>Register</h1>
			<div className="jumbotron">
				<form autoComplete="off" onSubmit={formik.handleSubmit}>
					<div className="form-group">
						<label>Name: </label>
						<input
							className="form-control"
							type="text"
							name="name"
							placeholder="Enter Your Name"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						{formik.errors.name ?
							<div className="text-danger">{formik.errors.name}</div>
							: null
						}
					</div>

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

					<div className="form-group">
						<label>Confirm Password</label>
						<input
							className="form-control"
							type="text"
							name="confirmPassword"
							placeholder="Enter Your Name"
							onChange={formik.handleChange}
							value={formik.values.confirmPassword}
						/>
						{formik.errors.confirmPassword ?
							<div className="text-danger">{formik.errors.confirmPassword}</div>
							: null
						}
					</div>
					<div className="d-flex justify-content-between">
						<button className=" btn btn-primary" type="submit">Submit</button>
						<a
							href="#"
							onClick={() => {
								window.location.href = 'login';
							}}
						>
							Login
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}


export default Register;