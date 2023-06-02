import React, { useContext, useEffect, useState } from 'react';
import BookItem from '../BookItem/BookItem';
import '../BookPage/BookPage.css';
import { DataContext } from '../App/App';
//////////////////////////////////
function BookPage({ currentPage, desiredPostsCount, data }) {
	let context = useContext(DataContext);

	let [pageData, setPageData] = useState([]);
	let startIndex = (currentPage * desiredPostsCount) - desiredPostsCount;

	useEffect(() => {
		console.log("work")
		const asyncRequest = async () => {
			let request;
			if (context.inputValue == "") {
				request = await fetch(`https://www.googleapis.com/books/v1/volumes?q={search%20terms}&_startIndex=${startIndex}&_maxResults=${desiredPostsCount}`);
			} else { request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${context.inputValue}&_startIndex=${startIndex}&_maxResults=${desiredPostsCount}`); }

			let responceJson = request.json();
			return responceJson;
		}
		asyncRequest()
			.then(responce => {
				setPageData(responce.items);
			})
			.catch(e => { console.error("Request mistake!") });
	}, [currentPage, desiredPostsCount, context.searchClicked]);



	let renderItems = pageData?.map(item => {
		return <BookItem BookItem key={item.id} title={item.volumeInfo.title} description={item.volumeInfo.description} id={item.id} img={item?.volumeInfo?.imageLinks?.thumbnail} ></BookItem >
	})




	return (
		<>
			<div className='book-wrapper'>
				{renderItems}
			</div>
		</>
	);
}
export default BookPage;