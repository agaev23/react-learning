import React, { Component } from 'react'

class Search extends Component {

    render() {
        return (
            <form action="" className="search">
                <input placeholder="find a notes" type="search" className="search__field" onChange={this.handleSearch} />
            </form>
        )
    }

    handleSearch = (event) => {
        const target = event.target.value.trim();
        this.props.handleSearch(target);
    }
}

export default Search
