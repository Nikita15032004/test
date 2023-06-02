import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import FullBookItem from '../components/FullBookItem/FullBookItem';
//////////////////////////////////

const myRouter = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>
	},
	{
		path: '/:id',
		element: <FullBookItem></FullBookItem>
	},
]);


export default myRouter;