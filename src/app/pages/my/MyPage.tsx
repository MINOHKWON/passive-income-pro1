import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('../../components/my/MyComponent'));
const MyPage = (props: any) => {
	return (
		<Suspense fallback={<div></div>}>
			<MyComponent {...props} />
		</Suspense>
	);
};

export default MyPage;
