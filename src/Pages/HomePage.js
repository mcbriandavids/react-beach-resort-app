import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const HomePage = () => {
	return (
		<>
			<Hero>
				<Banner title='Luxurious Rooms' subtitle='Deluxe Room starting at $300'>
					<Link to='/rooms' className='btn-primary'>
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</>
	);
};

export default HomePage;
