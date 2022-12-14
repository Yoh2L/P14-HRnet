import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
	return (
		<main className="main-error">
			<div className="error-nbr">404</div>
			<div className="error-oups">
				Oups ! La page que vous demandez n'existe pas.
			</div>
			<NavLink to="/" className="navigation">
				<div className="error-return">Retourner sur la page d'accueil</div>
			</NavLink>
		</main>
	);
};

export default Error;
