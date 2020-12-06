import React, {Component} from 'react';
import './App.css';
import NewsColumn from './News/NewsColumn.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: '065e33745ec74186932fc6eddd462aa1',
            news: {
                type: 'everything',
                query: 'sources=the-washington-post',
            }
        }
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2 className="App-title">Top headlines from Washington Post</h2>
                </header>
                <div className="container">
                    <div className="row">
                        <NewsColumn news={this.state.news} apiKey={this.state.apiKey}/>
                    </div>
                </div>

            </div>
        );
    }
}


export default App;
