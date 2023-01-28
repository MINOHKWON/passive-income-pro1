import React, { Suspense } from 'react';

const LoginComponent = React.lazy(() => import('../../components/login/LoginComponent'));
const LoginPage = (props: any) => {
	return (
		<Suspense fallback={<div></div>}>
			<LoginComponent {...props} />
		</Suspense>
	);
};

export default LoginPage;
