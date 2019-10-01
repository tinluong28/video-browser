import React from 'react';


class SearchBar extends React.Component{
    state = {
        term: '',
    }
    inputChange = (e) => {
        this.setState({term: e.target.value })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>Video Search</label>
                        <div className="ui search">
                            <div className="ui icon input">
                                <input
                                    onChange={this.inputChange}
                                    value={this.state.term}
                                    type="text"
                                    className="prompt"/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;