import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <button className='btn btn-success'>Hello</button>
                </div>
            </Router>
        );
    }
}

export default App;