import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [Data, setData] = useState([]);
	useEffect(() => {
		const getRandomPhotos = async () => {
			const res = await axios.get(
				"https://api.unsplash.com/photos?client_id=aCxPENt02AkEWKUExQ8UnI6jaCAL3oZz7tWNq52eXc0"
			);
			setData(res.data);
		};
		getRandomPhotos();
	}, []);
	return (
		<div>
			<div className="input-form">
				<input type="text" />
				<button type="button">Search</button>
			</div>
			<div className="grid-container">
				{Data.map((img) => {
					return (
						<Link to={`/${img.id}`}>
							<div>
								<img className="grid-item" src={img.urls.small} alt="" />
								<p>"I'm so happy today!"</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default Home;
