import React, { Component } from 'react'
import HttpService from './Http.service';

class CreateNote extends Component {

    state = {
        title: '',
        note: ''
    };

    render() {
        return (
            <form action="" className="create-note">
                <input placeholder="title" value={this.state.title} type="text" className="create-note__title" onChange={this.handleTitle} />
                <textarea placeholder="the note" value={this.state.note} type="text" className="create-note__text" onChange={this.handleNote} />
                <button className="create-note__btn" onClick={this.createNote}>Create</button>
            </form>
        )
    }

    createNote = async (event) => {
        event.preventDefault();

        if (!this.state.title || !this.state.note) {
            alert('fill all fields')
            return;
        }

        const data = {
            title: this.state.title,
            content: this.state.note,
            isDone: false,
            isArchived: false
        };
        await HttpService.createNote(data);
        this.setState({
            title: '',
            note: ''
        })
        this.props.handleCreate();
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleNote = (event) => {
        this.setState({ note: event.target.value })
    }
}

export default CreateNote