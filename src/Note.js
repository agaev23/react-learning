import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Note extends Component {
    render() {
        const isDone = this.props.note.isDone && <div>DONE</div>
        return (
            <div className={isDone ? "note" : "note note--done"}>
                <h4 className="note__title">{this.props.note.title}</h4>
                <div>{this.props.note.content}</div>
                <button className="note__done-btn" onClick={() => { this.setAsDone(this.props.note) }}>✔</button>
                <div className="note__actions">
                    <NavLink className="note__btn" to={"edit/" + this.props.note.id}>edit</NavLink>
                    <button className="note__btn" onClick={() => { this.deleteItem(this.props.note.id) }}>delete</button>
                    <button className="note__btn" onClick={() => { this.toArchive(this.props.note) }}>to archive</button>
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

    setAsDone(id) {
        this.props.setAsDone(id);
    }
}

export default Note;