import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'

export default class App extends Component {
  
  constructor() {
    super()
    this.state={
      gifs: []
    }
  }

  // Fetch data
  componentDidMount() {
    const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'
    axios.get(url)
      .then(res => {
        this.setState({ 
          gifs: res.data.data
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    // Get data using fetch (optional)
    // const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'
    // fetch(url)
    //   .then(res => res.json())
    //   .then(resData => {
    //     this.setState({ gifs: resData.data })
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data', error)
    //   })
  }

  render() {
    console.log(this.state.gifs) 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    )
  }
}
