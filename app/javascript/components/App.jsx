import React, {Component} from 'react';
import PeopleTable from './PeopleTable';
import axios from 'axios';


class App extends Component {
    state = {
        people: [],
        duplicates: [],
        character_frequencies: []
    };

    componentDidMount(){
        this._fetchPeople();
    }

    _fetchPeople = async() => {
        try {
            const res = await axios.get('/api/people');
            this.setState({people: res.data})
            return res.data
        }
        catch(err) {
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Salesloft People</h1>
                        <PeopleTable people={this.state.people} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;