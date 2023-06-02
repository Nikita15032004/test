import React from 'react';
import '../BookItem/BookItem.css'
import { Outlet, Link } from "react-router-dom";
import cartIcon from '../../Icons/shopingCart.png';
//////////////////////////////////
function BookItem({ title, description, id, img }) {
	return (
		<>
			<div className='book-item overflow-hidden'>
				<div className='book-item__wrapper flex'>
					<div className='book-item__img'>
						<img src={img}></img>
					</div>
					<div className='book-item__text-content max-w-full px-[10px] flex-basis-1/2 self-center overflow-hidden'>
						<Link to={`/${id}`} className='book-item__title'>{title}</Link>
						<div className='book-item__description'>{description ? description : <span>No description!</span>}</div>
						<div className='book-item__button rounded-lg mt-[6px] inline-block bg-yellow-600 transition-all duration-500 whitespace-nowrap overflow-hidden text-ellipsis'>
							<Link className='block px-[10px] py-[5px] text-white text-[14px] transition-all duration-700' to={`/${id}`} href=''>Show more</Link>
						</div>
						<div className='book-item__icon mt-[10px] w-[30px] h-[30px]'>
							<Link to={`/${id}`} href=''><img className='min-w-full min-h-full' src={cartIcon}></img></Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default BookItem;