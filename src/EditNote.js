import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import HttpService from './Http.service';

class EditNote extends Component {

    state = {
        note: {},
        title: '',
        body: ''
    };

    async componentDidMount() {
        const data = await HttpService.getNote(this.props.match.params.id);

        this.setState({
            note: data,
            title: data.title,
            body: data.content,
        })
    }

    render() {
        return (
            <div className="edit">
                <NavLink className="edit__link" to="/">back</NavLink>
                <form className="create-note">
                    <input placeholder="title" value={this.state.title} type="text" className="create-note__title" onChange={this.handleTitle} />
                    <textarea placeholder="the note" value={this.state.body} type="text" className="create-note__text" onChange={this.handleNote} />
                    <button className="create-note__btn" onClick={this.saveNote}>save</button>
                    <button className="create-note__btn create-note__btn--cancel" onClick={this.cancelEdit}>revert changes</button>
                </form>
            </div>
        )
    }

    saveNote = async (event) => {
        event.preventDefault();

        const data = {
            ...this.state.note,
            title: this.state.title,
            content: this.state.body
        };
        HttpService.editNote(this.props.match.params.id, data);
    }

    cancelEdit = (event) => {
        event.preventDefault();

        this.setState({
            title: this.state.note.title,
            body: this.state.note.content,
        })
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleNote = (event) => {
        this.setState({ body: event.target.value })
    }
}

export default EditNote