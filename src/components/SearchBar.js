import React from 'react'
import './searchStyling.css'
class SearchBar extends React.Component {
    state = { term: '' }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }
    render() {
        return (
            <div className="searchBar ui segment">
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui category search" style={{ width: "100%" }}>
                        <center >
                            <div className="ui icon input" style={{ top: "10px" }}>
                                <input className="prompt" value={this.state.term} type="text" placeholder="Search Videos..." onChange={this.onInputChange} />
                                <i className="search icon"></i>
                            </div>
                        </center>
                    </div>
                </form>
            </div>


        )
    }
}
export default SearchBar;