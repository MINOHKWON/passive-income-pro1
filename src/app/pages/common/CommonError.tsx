import React, { Suspense } from 'react';

const CommonError = (props: any) => {
	return (
		<Suspense fallback={<div></div>}>
			<div>에러다 임마</div>
		</Suspense>
	);
};

export default CommonError;
