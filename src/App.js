import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Rooms from './Pages/Rooms';
import SingleRoomPage from './Pages/SingleRoomPage';
import Error from './Pages/Error';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/rooms' component={Rooms} />
				<Route exact path='/rooms/:slug' component={SingleRoomPage} />
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
