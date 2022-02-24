import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const ImageDetails = () => {
	const { imageId } = useParams();
	const [Image, setImage] = useState({});
    const [Images, setImages] = useState([]);
	useEffect(() => {
		const getPhotoDetails = async () => {
			const res = await axios.get(
				`https://api.unsplash.com/photos/${imageId}?client_id=aCxPENt02AkEWKUExQ8UnI6jaCAL3oZz7tWNq52eXc0`
			);
			setImage(res.data);
		};
		getPhotoDetails();
	}, [imageId]);
	useEffect(() => {
		const getRandomPhotos = async () => {
			const res = await axios.get(
				"https://api.unsplash.com/photos?client_id=aCxPENt02AkEWKUExQ8UnI6jaCAL3oZz7tWNq52eXc0"
			);
			setImages(res.data);
		};
		getRandomPhotos();
	}, []);
	return (
		<Fragment>
			<div className="image-details">
				<img src={Image?.urls?.small} alt="" />
			</div>

			<div className="grid-container">
				{Images.map((img) => {
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
		</Fragment>
	);
};
export default ImageDetails;
