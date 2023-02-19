import { BaseProps } from './types';
import React from 'react';
import { useTheme } from '@mui/material/styles';

export const Dashboard = ({ children }: BaseProps) => {
	const theme = useTheme();
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: theme.palette.background.default,
			}}
		>
			{children}
		</div>
	);
};
