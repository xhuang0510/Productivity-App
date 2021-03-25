import React, { Component } from 'react'; //import React Component
import { LeftMenu, RightMenu, CenterMenu } from "./Menus"
import { BrowserRouter as Router } from "react-router-dom";
import './css/App.css';


export class App extends Component {
  // Initializing the state of the application
  constructor(props) {
    super(props);
    this.state = {
      scheduleObjects: [
        {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star',
          StartTime: new Date(2021, 2, 25, 9, 30),
          EndTime: new Date(2021, 2, 25, 11, 0)
        }, 
        {
          Id: 2,
          Subject: 'Thule Air Crash Report',
          StartTime: new Date(2021, 2, 26, 12, 0),
          EndTime: new Date(2021, 2, 26, 14, 0)
        }, {
          Id: 3,
          Subject: 'Blue Moon Eclipse',
          StartTime: new Date(2021, 2, 26, 9, 30),
          EndTime: new Date(2021, 2, 26, 11, 0)
        }, {
          Id: 4,
          Subject: 'Meteor Showers in 2018',
          StartTime: new Date(2021, 2, 27, 13, 0),
          EndTime: new Date(2021, 2, 27, 14, 30)
        }
      ],
      stickyNotes: [
        {
          title: "Note 1",
          body: "This is Note 1!",
          isPinned: false
        },
        {
          title: "Note 2",
          body: "This is Note 2!",
          isPinned: false
          
        },
        {
          title: "Note 3",
          body: "This is Note 3!",
          isPinned: false
        },
        {
          title: "Note 4",
          body: "This is Note 4!",
          isPinned: false
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
  logState = () => {
    console.log(this.state);
    this.render();
  }

  updateSchedule = (scheduleArray) => {
    this.setState({
      scheduleObjects: scheduleArray
    })
  }

  updateStickyNotes = (StickyArray) => {
    this.setState({
      stickyNotes: StickyArray
    })
  }

  toggleDisplayMode = () => {
    let mode = ""
    if(this.state.displayMode === "light") {
      document.getElementById('scheduleLight').disabled = true;
      mode = "dark";
    } else {
      document.getElementById('scheduleLight').disabled = false;
      mode = "light"
    }
    this.setState({
      displayMode: mode
    });
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
    console.log("Rendering App...");
    let appDisplay;
    if(this.state.displayMode === "light") {
      appDisplay = "App light"
    } else {
      appDisplay = "App dark"
    }
    return (
      <div className={appDisplay} id="App">
        <Router>
          <div id="leftMenu" className={this.state.displayMode}>
            <LeftMenu className="menu" toggle={this.toggleDisplayMode} updateSchedule={this.updateSchedule} 
                      schedule={this.state.scheduleObjects}></LeftMenu>
            <button onClick={this.logState}>Log the State</button>
          </div>
          <div id="centerMenu" className={this.state.displayMode}>
            <CenterMenu className="menu" updateSchedule={this.updateSchedule} schedule={this.state.scheduleObjects}></CenterMenu>
          </div>
          <div id="rightMenu" className={this.state.displayMode}>
            <RightMenu 
              className="menu" 
              updateStickyNotes={this.updateStickyNotes} 
              stickyNotes={this.state.stickyNotes} >
            </RightMenu>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
