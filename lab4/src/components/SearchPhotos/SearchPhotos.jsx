import React, { useState } from 'react';
import axios from 'axios';

const SearchPhotos = () => {
	const [query, setQuery] = useState('');
	const [photos, setPhotos] = useState([]);

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`https://api.unsplash.com/search/photos/?client_id=-F74_eMDcmn_tUcVXSXw77VaafOCHjPHsO1gqKcjfFc&query=${query}`
			);
			setPhotos(response.data.results);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<form
				onSubmit={handleSearch}
				className="flex items-center justify-center w-[full] "
			>
				<div className="flex mx-auto gap-4 h-[40px]">
					<input
						placeholder="Search for photos"
						value={query}
						onChange={handleChange}
						id="default-search"
						class="blockp-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   w-[300px]"
						required
					/>
					<button
						type="submit"
						class="text-white  end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>
			<div className="results flex flex-wrap gap-2 items-center justify-center mt-10">
				{photos.length != 0 ? (
					photos.map((photo) => (
						<img
							key={photo.id}
							src={photo.urls.small}
							alt={photo.alt_description}
							className="w-[250px] h-[250px] object-cover"
						/>
					))
				) : (
					<p>No images</p>
				)}
			</div>
		</div>
	);
};

export default SearchPhotos;
