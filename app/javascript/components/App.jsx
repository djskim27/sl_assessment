import React, {Component} from 'react';
import PeopleTable from './PeopleTable';
import DuplicateList from './DuplicateList';
import CharacterFrequencyTable from './CharacterFrequencyTable';
import axios from 'axios';
import Button from './Button'

class App extends Component {
    state = {
        people: [],
        duplicates: [],
        characterFrequencies: [],
        title: 'SalesLoft People'
    };

    componentDidMount(){
        this._fetchPeople();
    }

    _fetchPeople = async() => {
        try {
            const res = await axios.get('/api/people');
            this.setState({
                people: res.data,
                title: 'SalesLoft People'
            });
            return res.data
        }
        catch(err) {
        }
    };

    _fetchCharacterFreq = async() => {
        try {
            const res = await axios.get('/api/character_freq_count');
            this.setState({
                characterFrequencies: res.data,
                title: 'Character Frequencies'
            });
            console.log(res)
            return res.data
        }
        catch(err) {
        }
    };

    _fetchPossibleDuplicates = async() => {
        try {
            const res = await axios.get('/api/possible_duplicates');
            this.setState({
                duplicates: res.data,
                title: 'Possible Duplicates'
            });
            console.log(res.data);
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
                        <h1 className="text-center">{this.state.title}</h1>
                        <div className='d-flex justify-content-around my-3'>
                            <Button title={"SalesLoft People"} action={()=>{this._fetchPeople()}}/>
                            <Button title={"Character Frequencies"} action={()=>{this._fetchCharacterFreq()}}/>
                            <Button title={"Possible Duplicates"} action={()=>{this._fetchPossibleDuplicates()}}/>
                        </div>
                        {(() => {
                            switch(this.state.title) {
                                case "SalesLoft People":
                                    return  <PeopleTable people={this.state.people} />;
                                case "Character Frequencies":
                                    return  <CharacterFrequencyTable characterFrequencies={this.state.characterFrequencies} />;
                                case "Possible Duplicates":
                                    return  <DuplicateList duplicates={this.state.duplicates}/>;
                                default:
                                    break;
                            }
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;