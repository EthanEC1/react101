import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';
import React from 'react';

// create constructor


// class FilmItemRow extends React.Component {
//   render(){
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }



class Pokemon extends  React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      // homeworld: null,
      imageUrl: null,
      // films: [],
      weight:null,
    }
    
  }

  //when updated/clicked set the state/properties i.e.: name, height, etc.

  getNewCharacter(){
    const randomNumber = Math.round(Math.random() * 905)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      
     this.setState({
      name: data.name,
      height: data.height,
      // homeworld: data.homeworld,
      // films: data.films,
      weight: data.weight,
      loadedCharacter: true,
      
    })
    })
    
  }

  //Then print it out to the page with the render function

  render() {

    // const movies = this.state.films.map((url, i) => {
    //    return <FilmItemRow key={i} url={url}/>
    // })

    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <h1>name: {this.state.name}</h1>
            <p>height: {this.state.height}</p>
            {/* <p>Homeworld <a href={this.state.homeworld}>Homeworld</a></p> */}
            <p>weight: {this.state.weight}</p>
            <ul>
              {/* {movies} */}
            </ul>
            {/* <Item name="name1"/> */}
          </div>
        }

      <button 
      type="button" 
      className='btn' 
      onClick={() => this.getNewCharacter()}
      >
        Randomize pokemon!
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Pokemon/>
      </header>
    </div>
  );
}

export default App;