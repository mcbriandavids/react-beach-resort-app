import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// Get all Unique values
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

	//Get Unique Types
	let types = getUnique(rooms, 'type');

	// Add All
	types = ['all', ...types];

	// map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});
	return (
		<section className='filter-container'>
			<Title title='search rooms' />
			<form className='filter-form'>
				{/*Select Room Type*/}
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
						{types}
					</select>
				</div>
				{/*End of Select type*/}

				{/*Guest Room */}
				<div className='form-group'>
					<label htmlFor='capacity'>Guests</label>
					<select
						name='capacity'
						id='capacity'
						value={capacity}
						className='form-control'
						onChange={handleChange}>
						{people}
					</select>
				</div>
				{/*End of Guest Room*/}

				{/*Room Price*/}
				<div className='form-group'>
					<label htmlFor='price'>room price ${price}</label>
					<input
						type='range'
						name='price'
						id='price'
						min={minPrice}
						max={maxPrice}
						value={price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>

				{/*Size*/}
				<div className='form-group'>
					<label htmlFor='size'>room size</label>
					<div className='size-inputs'>
						<input
							type='number'
							name='minSize'
							id='size'
							value={minSize}
							onChange={handleChange}
							className='size-input'
						/>
						<input
							type='number'
							name='maxSize'
							id='size'
							value={maxSize}
							onChange={handleChange}
							className='size-input'
						/>
					</div>
				</div>

				{/*End of Size*/}

				{/*Extras*/}
				<div className='form-group'>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>breakfast</label>
					</div>
					<div className='single-extra'>
						<input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
						<label htmlFor='pets'>pets</label>
					</div>
				</div>
				{/*End of Extras*/}
			</form>
		</section>
	);
};

export default RoomsFilter;
