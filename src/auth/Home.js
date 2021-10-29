import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
	const [json, setJson] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:2020/api/getAll', {
			headers: { 'auth': `${JSON.parse(localStorage.getItem('auth'))}` }

		})
			.then(res => {
				setJson(res.data);
			}).catch(err => {

			})

	}, [])
	return (
		<div>
			<h1>Welcome to Home page</h1>
			<p>{JSON.stringify(json)}</p>
			<button onClick={() => {
				localStorage.clear();
				props.history.push('/login');
			}} className="btn btn-primary">Logout</button>

		</div >
	)
}
export default Home;