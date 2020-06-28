import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Note from './Note';
import Search from './Search';
import CreateNote from './CreateNote';
import HttpService from './Http.service';

class NotesList extends Component {
	state = {
		searchTarget: '',
		list: [],
		filteredList: [],
	};

	async componentDidMount() {
		this.getNotes();
	}

	render() {
		const currentItems = this.state.filteredList.map((item) => {
			return (
				<Note key={item.id}
					note={item}
					deleteItem={this.deleteItem}
					toArchive={this.toArchive}
					setAsDone={this.setAsDone}>
				</Note>
			)
		});

		return (
			<div className="note-list">
				<NavLink className="note-list__link" to="/archive">go to archive</NavLink>
				<Search handleSearch={this.handleSearch}></Search>
				<CreateNote handleCreate={this.getNotes}></CreateNote>
				<div className="notes">
					{currentItems}
				</div>
			</div>
		)
	}
	deleteItem = async (id) => {
		await HttpService.deleteItem(id);
		this.getNotes();
	}


	setAsDone = async (note) => {
		await HttpService.setAsDone(note);
		this.getNotes();
	}

	toArchive = async (note) => {
		await HttpService.toArchive(note);
		this.getNotes();
	}

	handleSearch = (target) => {
		const filteredList = this.filterList(this.state.list, target);
		this.setState({
			searchTarget: target,
			filteredList: filteredList
		})
	}

	filterList(list, target) {
		const filteredList = list.filter(item => {
			const titleMatch = item.title.toLowerCase().includes(target.toLowerCase())
			const contentMatch = item.content.toLowerCase().includes(target.toLowerCase())
			return titleMatch || contentMatch;
		});

		return filteredList;
	}

	getNotes = async () => {
		const list = await HttpService.getNotes();

		this.setState({
			list: list,
			filteredList: list,
		})
	}
}

export default NotesList