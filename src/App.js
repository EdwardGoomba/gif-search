import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'

export default class App extends Component {
  
  constructor() {
    super()
    this.state={
      gifs: [],
      loading: true
    }
  }

  // Fetch data
  componentDidMount() {
    this.performSearch()
  }

  performSearch = (search = 'minion') => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&limit=24&api_key=dc6zaTOxFJmzC`
    axios.get(url)
      .then(res => {
        this.setState({
          gifs: res.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.gifs) 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
              : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    )
  }
}
