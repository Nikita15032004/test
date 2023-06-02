import React, { useState, useContext } from 'react';
import '../Form/Form.css'
import { DataContext } from '../App/App';
//////////////////////////////////

function Form({ desiredPostsCount, setDesiredPostsCount }) {
	let dataContext = useContext(DataContext);

	function onSelectChange(e) {
		setDesiredPostsCount(e.target.value)
		localStorage.setItem('desiredPostsCount', e.target.value);
		dataContext.setCurrentPage(1);
		localStorage.setItem('currentPage', 1);
	}

	function onInputChange(e) {
		dataContext.setInputValue(e.target.value);
		dataContext.setCurrentPage(1);
	}

	return (
		<>
			<div className='mt-[20px]'>
				<form className='flex flex-col' onSubmit={e => e.preventDefault()}>
					<div className='input-content self-center'>
						<input onChange={onInputChange} value={dataContext.inputValue} className='found-input' placeholder='Print book name' type="text"></input>
						<button onClick={() => { dataContext.setSearchClicked(!dataContext.searchClicked) }} type='submit' className='h-[40px] p-[5px] bg-[#0091ff] rounded-[10px] text-white hover:bg-red-500 transition-colors duration-500 ease-in-out'>Search</button>
					</div>
					<div className='mt-[10px] self-center flex flex-col'>
						<div className='text-black font-family-Arial font-semibold text-sm mt-[7px]'>Chose derired posts count on the page:</div>
						<select className='cursor-pointer self-center' value={desiredPostsCount} onChange={onSelectChange}>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
							<option value="20">20</option>
						</select>
					</div>
				</form>
			</div>
		</>
	);
}
export default Form;