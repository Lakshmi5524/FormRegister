import React from "react";
import { Route, Redirect } from 'react-router-dom'


const ProtectedRouter = ({ componet, ...rest }) => {

	var RenderComponents = componet;
	let hasToken = JSON.parse(localStorage.getItem('auth'));

	return (
		<Route
			{...rest}
			render={
				props => {
					return hasToken !== null ? (
						<RenderComponents{...props} />
					) : (
						<Redirect
							to={{
								pathname: '/Login'
							}}
						/>
					)
				}
			}

		/>
	)

}
export default ProtectedRouter