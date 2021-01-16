import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            Searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value});
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        });
        return(
            <div className="tc">
                <h1 className="tc">Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
            
        );
    }
}


// function App() {
//     return(
//         <div className="tc">
//             <h1 className="tc">Robo Friends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
        
//     );
// }


export default App;