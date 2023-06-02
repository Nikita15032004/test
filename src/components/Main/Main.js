import React, { createContext, useEffect, useState, useMemo, useContext } from 'react';
import '../Main/Main.css'
import BookPage from '../BookPage/BookPage'
import Form from '../Form/Form'
import { DataContext } from '../App/App';
//////////////////////////////////


function Main() {
	let context = useContext(DataContext);
	let pagesCount = Math.ceil(context.postsCount / context.desiredPostsCount);
	let pagesCountArr = [];


	for (let i = 1; i <= pagesCount; i++) pagesCountArr.push(i);
	let renderNavigation = pagesCountArr.map(item => {
		return <button
			className={context.currentPage == item ? "paginaton-button _active" : "paginaton-button"}
			key={item}
			onClick={(e) => {
				e.preventDefault();
				context.setCurrentPage(item)
				window.scrollTo(0, 0);
				localStorage.setItem('currentPage', item);
			}}
		>{item}</button>
	})

	return (
		<>
			<div className='wrapper'>
				<div className='my-container px-[25px] min-h-screen flex flex-col'>
					<div className='text-[30px] text-center mt-[30px]'>Search by Book Name</div>
					<Form desiredPostsCount={context.desiredPostsCount} setDesiredPostsCount={context.setDesiredPostsCount}></Form>
					<div className='flex-grow'>
						{context.data ? <BookPage currentPage={context.currentPage} desiredPostsCount={context.desiredPostsCount} data={context.data.items}></BookPage>
							: <span className='font-family-Arial text-yellow-500 text-[22px]'>Loading...</span>
						}
					</div>
					<div className='footer mt-[40px] block bg-gray-900'>
						<div className='pagination-wrapper p-[10px]'>
							{renderNavigation}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Main;