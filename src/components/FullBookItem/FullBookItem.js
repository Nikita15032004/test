import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import '../FullBookItem/FullBookItem.css'
//////////////////////////////////

function FullBookItem({ description }) {
	let { id } = useParams();
	let [data, setData] = useState(0);

	useEffect(() => {
		const asyncRequest = async () => {
			let request = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
			let responceJson = request.json();
			return responceJson;
		}
		asyncRequest()
			.then(responce => {
				setData(responce.volumeInfo);
			})
			.catch(e => { console.error("Request mistake!") });
	}, []);

	return (
		<>
			<>
				<div className='full-wrapper mt-[50px]'>
					<div className='full-container max-w-[900px] mx-auto px-[20px]'>
						{data
							? <div className='full-item mb-[20px]'>
								<Link to={`/${id}`} className='full-item__title font-family-Arial text-[18px] text-blue-600'>{data.title}</Link>
								{data?.imageLinks?.thumbnail
									? <div className='full-item__img'><img src={data?.imageLinks?.thumbnail}></img></div>
									: null
								}
								<div className='full-item__description font-family-Arial text-[15px] mt-[10px] text-black'>{
									data.description ? <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
										: <span>No description!</span>
								}</div>
								<div className='full-item__link mt-[10px] inline-block bg-yellow-500 transition-all duration-500'>
									<a className='block px-[10px] py-[5px] text-white text-[14px] transition-all duration-700' href={data.infoLink} target="_blank">Buy book</a></div>
								<div className='full-item__back mt-[6px]'><Link className='text-red-800' to={`/`} href=''>Back</Link></div>
							</div>
							: <><span className='full-item__loading font-family-Arial text-base text-[#6a5a01]'>Loading...</span> <div className='full-item__back'><Link to={`/`} href=''>Back</Link></div></>
						}
					</div>
				</div>
			</>
		</>
	);
}
export default FullBookItem;