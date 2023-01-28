import React, { Suspense } from 'react';

const MainComponent = React.lazy(() => import('../../components/main/MainComponent'));
const MainPage = (props: any) => {
	return (
		<Suspense fallback={<div></div>}>
			메인
			<MainComponent {...props} />
		</Suspense>
	);
};

export default MainPage;
