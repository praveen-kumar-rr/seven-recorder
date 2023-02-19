import { useEffect, useState } from 'react';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const fn = () => {
			setIsMobile(window.innerWidth <= 576);
		};
		window.addEventListener('resize', fn);
		return () => window.removeEventListener('resize', fn);
	}, []);

	return isMobile;
};
