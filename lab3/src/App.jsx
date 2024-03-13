import { useEffect, useState } from 'react';
import SeasonDisplay from './SeasonDisplay';
import './index.css';

function App() {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				setLat(position.coords.latitude);
			},
			(err) => {
				setErrorMessage(err.message);
			}
		);
	}, []);

	if (errorMessage && !lat) {
		return <div>Error: {errorMessage}</div>;
	}

	if (!errorMessage && lat) {
		return <SeasonDisplay lat={lat} />;
	}

	return (
		<div className="loaderContainer">
			<span class="loader"></span>
			<p>Please accept location request</p>
		</div>
	);
}

export default App;
