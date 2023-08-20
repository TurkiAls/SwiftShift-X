import React, { useState } from 'react'
import { LoadingContext } from '../contexts/loadingContext'
import HeaderLayout2 from './HeaderLayout2'
import Main from './Main'
import FooterLayout2 from './FooterLayout2'
import { Outlet } from "react-router-dom";

const MainLayout2 =  ({ children }) => {
	const [isLoading, setLoading] = useState(true);
	const [loadingMessage, setLoadingMessage] = useState('');
	return (
		<LoadingContext.Provider value={{ isLoading, setLoading, loadingMessage, setLoadingMessage }}>
			<HeaderLayout2 />
			<Main>
			{children || <Outlet />}

			</Main>
			<FooterLayout2 />
		</LoadingContext.Provider>
	)
}

export default MainLayout2;
