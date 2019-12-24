import React from "react";
import { NavLink } from "react-router-dom";

const link = {
	width: "100px",
	padding: "12px",
	margin: "0 6px 6px",
	background: "blue",
	textDecoration: "none",
	color: "white"
}

class Navbar extends React.Component {

	render() {
		return (
			<div>
				<NavLink exact
								 to="/"
								 style={link}
								 activeStyle={{
									 background: "darkblue"
								 }}>
					Home
				</NavLink>
				<NavLink exact
								 to="/about"
								 style={link}
								 activeStyle={{
									 background: "darkblue"
								 }}>
					About
				</NavLink>
				<NavLink exact
								 to="/login"
								 style={link}
								 activeStyle={{
									 background: "darkblue"
								 }}>
					Login
				</NavLink>
			</div>
		);
	}

}

export default Navbar
