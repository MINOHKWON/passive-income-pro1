import React, { Suspense } from 'react';

const CardComponent = React.lazy(() => import('../../components/card/CardComponent'));
const CardPage = (props: any) => {
	return (
		<Suspense fallback={<div></div>}>
			<CardComponent {...props} />
		</Suspense>
	);
};

export default CardPage;
