import logo from './logo.svg';
import './App.css';
import CategorySelection from './CategorySelection';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={
      categories: []
    }
  }

  componentDidMount(){
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(categories => this.setState({categories: categories}))
}

  render(){    
    console.log(this.state.categories)
    return (
      <div className="App">
        <CategorySelection categories={this.state.categories}/>
      </div>
    );
  }
}

export default App;
