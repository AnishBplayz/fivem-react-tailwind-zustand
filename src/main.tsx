import App from '@/components/App';
import { isEnvBrowser } from '@/utils/misc';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

if (isEnvBrowser()) {
	const root = document.getElementById('root');

	// https://i.imgur.com/iPTAdYV.png - Night time img
	root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
	root!.style.backgroundSize = 'cover';
	root!.style.backgroundRepeat = 'no-repeat';
	root!.style.backgroundPosition = 'center';
	root!.style.webkitUserSelect = 'none';
	root!.style.userSelect = 'none';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
