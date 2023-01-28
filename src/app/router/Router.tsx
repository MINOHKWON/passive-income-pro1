import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
import MainPage from '../pages/main/MainPage';
import CardPage from '../pages/card/CardPage';
import MyPage from '../pages/my/MyPage';
import CommonError from '../pages/common/CommonError';

const Router = (paramProps: any) => {
	return (
		<Suspense>
			<Routes>
				{ /* Redirect from root URL to /login.  */ }
				<Route path='/' element={<Navigate replace to='/login' {...paramProps} />} />

				{/* login 관련 router */}
				<Route path={'/login'} element={<LoginPage {...paramProps} />} />

				{/* main 관련 router */}
				<Route path={'/main'} element={<MainPage {...paramProps} properties={paramProps.properties} />} />

				{/* 카드 야로 router */}
				<Route path={'/card/:cardId'} element={<CardPage {...paramProps} properties={paramProps.properties} />} />

				{/* 기타 짜바리 친구들 */}
				<Route path={'/my'} element={<MyPage {...paramProps} />} />
				<Route path={'/error'} element={<CommonError {...paramProps} />} />
				<Route path='*' element={<CommonError {...paramProps} />} />
			</Routes>
		</Suspense>
	);
};

export default Router;
