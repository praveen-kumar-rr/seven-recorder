import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Dashboard } from '../common/dashboard';
import { useIsMobile } from '../common/hooks';

const mimeType = MediaRecorder.isTypeSupported('video/webm; codecs=vp9')
	? 'video/webm; codecs=vp9'
	: 'video/webm';

const startRecording = async (onComplete: (m: Blob[]) => void) => {
	const chunks: Blob[] = [];
	const stream = await navigator.mediaDevices.getDisplayMedia({
		audio: false,
		video: true,
	});
	const mediaRecorder = new MediaRecorder(stream, {
		mimeType,
	});
	mediaRecorder.ondataavailable = ({ data }) => {
		if (data.size > 0) {
			chunks.push(data);
		}
	};
	mediaRecorder.onstop = () => {
		onComplete(chunks);
	};
	mediaRecorder.start();
};

const saveFile = (url: string) => {
	const link = document.createElement('a');
	link.href = url;
	link.download = 'video.webm';
	link.click();
	link.remove();
};

export const Recorder = () => {
	const theme = useTheme();
	const isMobile = useIsMobile();
	const [source, setSource] = useState<string | null>(null);

	const recordScreen = () => {
		startRecording(blob => {
			const result = new Blob(blob, { type: mimeType });
			const objUrl = URL.createObjectURL(result);
			setSource(objUrl);
		});
	};

	const download = () => {
		if (source) {
			saveFile(source);
		}
	};

	return (
		<Dashboard>
			<div
				className='d-flex justify-content-center align-items-center'
				style={{
					height: '97%',
					padding: '10px',
				}}
			>
				<div className='d-flex flex-column justify-content-center align-items-center h-100'>
					<div className='mb-5'>
						<Typography
							variant='h4'
							className='text-center text-uppercase'
							color={'primary'}
							sx={{
								fontWeight: 'bold',
							}}
						>
							Record, View and Download
						</Typography>
					</div>
					<div className='mb-4'>
						<video controls width={isMobile ? '350px' : '570px'}>
							{source && <source src={source} />}
						</video>
					</div>
					<div className='mb-2'>
						<Button size='large' variant='contained' onClick={recordScreen}>
							Record
						</Button>
						<Button
							size='large'
							variant='outlined'
							onClick={download}
							className='ms-3'
							disabled={!source}
						>
							Download
						</Button>
					</div>
					<div className='text-center'>
						<Typography
							variant='caption'
							sx={{ color: theme.palette.text.primary }}
						>
							No data collected. You own your data.
						</Typography>
					</div>
				</div>
			</div>
		</Dashboard>
	);
};
