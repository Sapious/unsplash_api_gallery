import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [Data, setData] = useState([]);
	const [InputValue, setInputValue] = useState({});
	useEffect(() => {
		const getRandomPhotos = async () => {
			const res = await axios.get(
				"https://api.unsplash.com/photos?client_id=aCxPENt02AkEWKUExQ8UnI6jaCAL3oZz7tWNq52eXc0"
			);
			setData(res.data);
		};
		getRandomPhotos();
	}, []);

	const searchImage = async (e) => {
		e.preventDefault();
		const res = await axios.get(
			`https://api.unsplash.com/search/photos?query=${InputValue.search}&client_id=aCxPENt02AkEWKUExQ8UnI6jaCAL3oZz7tWNq52eXc0`
		);
		setData(res.data.results);
	};
	return (
		<div>
			<div className="input-form">
				<input
					name="search"
					onChange={(e) => {
						setInputValue({...InputValue, [e.target.name]: e.target.value });
						console.log(InputValue);
					}}
					type="text"
				/>
				<button onClick={(e) => searchImage(e)} type="button">
					Search
				</button>
			</div>
			<div className="grid-container">
				{Data.map((img) => {
					return (
						<Link key={img.id} to={`/${img.id}`}>
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
