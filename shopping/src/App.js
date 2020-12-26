import React, { Component } from 'react'; //import React Component
import './App.css';
import {Item, ItemList} from "./Components"

export class App extends Component {
  // Initializing the state of the application
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      page: 0,
      results: []
    }
  }

  // Update the state with current search box query
  updateSearch = (textbox) => {
    this.setState({
      keyword: textbox.target.value
    });
  }

  // Re-render the page with new state
  refresh = () => {
    this.getAmazonData();
    this.getGoogleData();
    this.render();
  }

  // Update to previous page
  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    });
  }

  // Update to next page
  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
  }
  
  // Parsing Amazon search data
  getAmazonData() {
    let url = "https://cors-anywhere.herokuapp.com/https://www.amazon.com/s?k=" + this.state.keyword + "&page=" + this.state.page;
    console.log(url);
    let html = fetch(url)
    .then(function(data) {
      return data.text()
    })
    .then(function(data) { // We need to parse the data here
      let doc = new DOMParser().parseFromString(data, "text/html");
    })
    this.state.results.push(html);
  }

  // Parsing Google shopping search data
  getGoogleData() {
    let keywordString = this.state.keyword.replace("/\s/g", "+");
    let pageIndex = this.state.page * 20;
    let url = "https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=" + keywordString + "&tbm=shop&start=" + pageIndex;
    console.log(url);
    let html = fetch(url)
    .then(function(data) {
      return data.text()
    })
    .then(function(data) { // We need to parse the data here
      let doc = new DOMParser().parseFromString(data, "text/html");
      console.log(doc);
    })
    this.state.results.push(html);
  }

  // Resets display state to default if window is resized
  componentDidMount() {
    window.addEventListener('resize', this.render());
  } 

  // Removes the listener once the job is done
  componentWillUnmount() {
    window.removeEventListener('resize', this.render());
  }

  // Renders the application
  render() {
    console.log("Rendering...");
    return (
      <div className="App">
        <main>
          <input type="text" id="searchBox" onChange={this.updateSearch} value={this.state.keyword} />
          <button type="button" id="searchButton" onClick={this.refresh}>Search!</button>
          <div id="searchResults">
            We need the data here: 
          </div> 
          <div>
            <button type="button" id="prevPageButton" onClick={this.prevPage}>Prev</button>
            <button type="button" id="nextPageButton" onClick={this.nextPage}>Next</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
