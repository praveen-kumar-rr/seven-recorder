import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseProps } from './common/types';
import { Recorder } from './recorder/recorder';
import { miuiTheme } from './styles/theme';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Recorder />,
	},
]);

const Providers = ({ children }: BaseProps) => {
	return <ThemeProvider theme={miuiTheme}>{children}</ThemeProvider>;
};

function App() {
	return (
		<Providers>
			<RouterProvider router={routes} />
		</Providers>
	);
}

export default App;
