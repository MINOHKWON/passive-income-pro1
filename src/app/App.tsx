import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/layout/Layout';

const App = (props: any) => (
	<Suspense>
		<BrowserRouter basename={props.basename}>
			<Layout {...props} />
		</BrowserRouter>
	</Suspense>
);

export default App;
