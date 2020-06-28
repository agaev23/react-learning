import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import NotesList from './NotesList';
import EditNote from './EditNote';
import Archive from './Archive';

function App() {
	return (
		<>
			<Route path="/" exact component={NotesList} />
			<Route path="/archive" component={Archive} />
			<Route path="/edit/:id" component={EditNote} />
		</>
	);
}

export default App;
