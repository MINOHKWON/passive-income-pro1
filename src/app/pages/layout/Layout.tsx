import React, { useEffect } from 'react';
import Router from '../../router/Router';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (props: any) => {
	//const location = useLocation();
	//const match = { params: useParams() };
	const navigate = useNavigate();

	useEffect(() => {}, []);
	// match={match}
	// {props.location.pathname === '/login' && <Footer />}

	return (
		<>
			<Header />
			<Router navigate={navigate} {...props} />
			<Footer />
		</>
	);
};

export default Layout;
