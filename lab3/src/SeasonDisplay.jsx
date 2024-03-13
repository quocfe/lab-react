import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: 'Nong qua, them VitaminC!',
		iconName: 'sun',
	},
	winter: {
		text: 'Trời ơi, nó lạnh!',
		iconName: 'snowflake',
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = ({ lat }) => {
	const season = getSeason(lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<img
				src={
					season === 'winter'
						? 'https://cdn-icons-png.flaticon.com/512/2336/2336319.png'
						: 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
				}
				className={`icon-left massive ${iconName} icon`}
			/>

			<h1>{text}</h1>
			<img
				src={
					season === 'winter'
						? 'https://cdn-icons-png.flaticon.com/512/2336/2336319.png'
						: 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
				}
				className={`icon-right massive ${iconName} icon`}
			/>
		</div>
	);
};

export default SeasonDisplay;
