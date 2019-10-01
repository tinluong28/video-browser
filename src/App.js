import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import Display from './components/Display';
import youtube from './apis/youtube';

class App extends React.Component{
    state = {
        videos: [],
        selected: null,
        max: 5,
        term: '',
    }
    componentDidMount(){
        this.onTermSubmit('building')
    }
    onTermSubmit = async (term) => {
        this.setState({term: term});
        const response = await youtube.get('/search',{
            params: {
                q: term,
                maxResults: this.state.max
            }
        })
        this.setState({videos: response.data.items});
        this.setState({selected: this.state.videos[0]})
    };
    showMore = () => {
        this.setState({max: this.state.max + 5});
        this.onTermSubmit(this.state.term);
    }
    onVideoClick = (v) => {
        this.setState({selected: v})
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <Display video={this.state.selected}/>
                        </div>
                        <div className="six wide column">
                            <VideoList videos = {this.state.videos} VideoClick={this.onVideoClick}/>
                            <p style={{color: "#0E6EB8", cursor: "pointer"}} onClick={this.showMore}>Show More...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;