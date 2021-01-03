import React, { Component } from 'react'; //import React Component
import { LeftMenu, RightMenu, CenterMenu } from "./Menus"
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';


export class App extends Component {
  // Initializing the state of the application
  constructor(props) {
    super(props);
    this.state = {
      /*
        {
          startTime: something,
          endTime: something,

        }
      */
      scheduleObjects: [],
      /* 
        // sticky note JSON
        {
          title: "",
          body: ""
        }
      */
      stickyNoteObjects: [
        {
          title: "Hello",
          body: "World!"
        },
        {
          title: "Tomorrow",
          body: "rest day"
        }
      ],
      /*
        {
          readingTime: 90,
          mathTime: 60,
          ...
        }
      */
     // Average math time: 45 min
     // On average personal math time: 35 min
     // Set new personalized time for our algorithm
      personalStats: [

      ],
      displayMode: "light"
    }
  }

  // test
  sayhello = () => {
    console.log("Hello World!");
  }

  updateState = (state) => {
    this.setState(
      () => {
        return state;
      }
    )
  }

  updateStickies = (stickyArray) => {
    this.setState({
      stickyNoteObjects: stickyArray
    })
  }

  toggleDisplayMode = () => {
    let mode = ""
    if(this.state.displayMode == "light") {
      mode = "dark";
    } else {
      mode = "light"
    }
    this.setState({
      displayMode: mode
    });
    console.log(this.state.displayMode);
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
    console.log(this.state.stickyNoteObjects);
    return (
      <div className="App" id="App">
        <Router>
          <div id="leftMenu" className={this.state.displayMode}>
            <LeftMenu className="menu" toggle={this.toggleDisplayMode}></LeftMenu>
          </div>
          <div id="centerMenu" className={this.state.displayMode}>
            <CenterMenu className="menu"></CenterMenu>
          </div>
          <div id="rightMenu" className={this.state.displayMode}>
            <RightMenu className="menu" updateSticky={this.updateStickies} stickyNotes={this.state.stickyNoteObjects}></RightMenu>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
