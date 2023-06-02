import React from 'react';
import { useEffect, useState, createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import myRouter from '../../Routes/myRouter';
//////////////////////////////////
export let DataContext = createContext();
function App() {
	let [searchClicked, setSearchClicked] = useState(0);
	let [data, setData] = useState(null);
	let [searchingData, setSearchingData] = useState(null);
	let [inputValue, setInputValue] = useState('');
	let [postsCount, setPostsCount] = useState(0);
	let [currentPage, setCurrentPage] = useState(1);
	let [desiredPostsCount, setDesiredPostsCount] = useState(() => {
		let storedDesiredCount = localStorage.getItem('desiredPostsCount');
		return storedDesiredCount ? parseInt(storedDesiredCount) : 10;
	});

	useEffect(() => {
		const asyncRequest = async () => {
			let request;
			if (inputValue == "") {
				request = await fetch(`https://www.googleapis.com/books/v1/volumes?q={search%20terms}`);
			} else { request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`); }

			let responceJson = request.json();
			return responceJson;
		}
		asyncRequest()
			.then(responce => {
				setData(responce);
				setPostsCount(responce.totalItems);
			})
			.catch(e => { console.error("Request mistake!") });
	}, [searchClicked]);




	return (
		<>
			<DataContext.Provider value={
				{
					data: data,
					postsCount: postsCount,
					currentPage: currentPage,
					setCurrentPage: setCurrentPage,
					desiredPostsCount: desiredPostsCount,
					setDesiredPostsCount: setDesiredPostsCount,
					inputValue: inputValue,
					setInputValue: setInputValue,
					searchClicked: searchClicked,
					setSearchClicked: setSearchClicked,
				}
			}>
				<RouterProvider router={myRouter}></RouterProvider>
			</DataContext.Provider>
		</>
	);
}
export default App;	