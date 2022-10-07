import './App.css';
import CategorySelection from './CategorySelection';
import { Component } from 'react';
import GrabQuote from './GrabQuote';
import QuoteBanner from './QuoteBanner';
import Norris from './NorrisDaMan.png';

class App extends Component {

  constructor(){
    super();
    this.state={
      categories: [],
      selectedCategory: 'random',
      quote: 'Please, choose a category and click GO!'
    }
  }

  componentDidMount(){
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(categories => this.setState({categories: categories}))
}

onSelectChange = (event) =>{
  this.setState({ selectedCategory: event.target.value });
}

onGrabQuote = () =>{

  this.state.selectedCategory === 'random' ? 
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(quote => this.setState({quote: quote.value}))
  :
  fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.selectedCategory}`)
    .then(response => response.json())
    .then(quote => this.setState({quote: quote.value}))
}

  render(){        
    return (
      <div className="App">
        <div className='container'>
          <div className='image-container'>
            <img src={Norris} alt='Chuck Norris ready to kick your butt' width='150px'/>
          </div>
          <div className='quote-container'>
            <QuoteBanner Quote={this.state.quote}/>
            <p className='selected-category'>You chose the {this.state.selectedCategory} category.</p>            
          </div>

        </div>
        <div className='controls-container'>
          <CategorySelection categories={this.state.categories} selectChange={this.onSelectChange}/>
          <GrabQuote GrabQuote={this.onGrabQuote} Category = {this.state.selectedCategory}/>
          <p>Please, note that we are not the creators of these quotes, but rather fetch them from your buddies at the api.chucknorris.io project.</p>
        </div>        
      </div>
    );
  }
}

export default App;
