import React, { Component } from 'react'

class ArchivedNote extends Component {
	render() {
		const isDone = this.props.note.isDone && <div>DONE</div>
		return (
			<div className={isDone ? "note" : "note note--done"}>
				<h4 className="note__title">{this.props.note.title}</h4>
				<div>{this.props.note.content}</div>
				<div className="note__actions">
					<button className="note__btn" onClick={() => { this.deleteItem(this.props.note.id) }}>delete</button>
					<button className="note__btn" onClick={() => { this.toArchive(this.props.note) }}>delete from archive</button>
				</div>
			</div>
		)
	}

	deleteItem(id) {
		this.props.deleteItem(id);
	}

	toArchive(note) {
		this.props.toArchive(note);
	}
}

export default ArchivedNote;