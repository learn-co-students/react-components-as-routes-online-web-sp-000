import React from "react"

class Login extends React.Component {

	render() {
		return (
			<div>
				<h1>
					Login
				</h1>
				<form>
					<div>
						<label htmlFor="username">Username</label>
						<input type="text" name="username" placeholder="Username" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="Password" />
					</div>
					<input type="submit" value="Log In" />
				</form>
			</div>
		);
	}

}

export default Login
