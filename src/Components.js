import React, { Component } from 'react'; //import React Component
import { Button } from 'react-bootstrap';
import { Popup } from 'reactjs-popup';
import { DateTimePicker } from 'react-rainbow-components';
import 'reactjs-popup/dist/index.css';
import "./css/index.css";


export class StickyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            inputBody: this.props.body,
            black: true
        };
    }

    remove = () => {
        this.props.remove(this.props.keyNum);
    }

    editTitle = (textbox) => {
        this.setState({
            inputTitle: textbox.target.value
        }, () => {
            this.props.updateTitle(this.props.keyNum, this.state.inputTitle);
        });
    }

    editBody = (textbox) => {
        this.setState({
            inputBody: textbox.target.value
        }, () => {
            this.props.updateBody(this.props.keyNum, this.state.inputBody);
        });
    }

    pin = () => {
        this.setState({black: !this.state.black});
        this.props.pin(this.props.keyNum);
    }

    render() {
        let pinClass = this.state.black ? 'note-pin black' : 'note-pin white'
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <div className ='sticky-notes'>
                    <div className = 'note'>
                        <div className ='note-header'>
                            <button className = 'note-close' onClick={this.remove}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button className = {pinClass} onClick={this.pin}>
                                <i className="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <input value={this.props.title} className='note-title' contentEditable suppressContentEditableWarning={true} onInput={this.editTitle} size={50}/>
                        <textarea value={this.props.body} className='note-body' contentEditable suppressContentEditableWarning={true} onInput={this.editBody}/>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    updateStickyList = (index) => {
        let newArray = this.props.stickyNotes;
        newArray.splice(index, 1);
        this.props.updateStickyNotes(newArray);  
    }

    updateStickyTitle = (index, text) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: text,
            body: newArray[index].body
        };
        this.props.updateStickyNotes(newArray);
        
    }

    updateStickyBody = (index, text) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: newArray[index].title,
            body: text
        };
        this.props.updateStickyNotes(newArray);
       
    }

    pin = (index) => {
        let newArray = this.props.stickyNotes;
        let currSticky = newArray[index];
        let pinned = currSticky.isPinned;
        

        currSticky = {
            title: currSticky.title,
            body: currSticky.body,
            isPinned: !pinned
        }

        newArray.splice(index, 1);
        if (pinned) {
            newArray.push(currSticky);
        } else {
            newArray.unshift(currSticky);
        }

        this.props.updateStickyNotes(newArray);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(
                <StickyNote 
                    key={i} 
                    keyNum={i} 
                    remove={this.updateStickyList} 
                    updateTitle={this.updateStickyTitle} 
                    updateBody={this.updateStickyBody} 
                    title={stickyNotes[i].title} 
                    body={stickyNotes[i].body}
                    pin={this.pin}>
                </StickyNote>)
        }
        let renderDisplay = (
            <div className="scrollable">
                {stickyNoteDisplay}
            </div>
        )
        return renderDisplay;
    }
}

export class NewNoteButton extends Component {
    add = () => {
        let array = this.props.stickyNotes;
        array.push({
            title: "Title",
            body: "Text goes here",
            isPinned: false
        });
        this.props.updateStickyNotes(array);
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <button className='new-note-button' onClick={this.add}>
                    New Note
                    <br></br>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

export class SmartScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            toDoObjects: [],
            smartEvents: [],
            startDate: new Date(),
            endDate: new Date()
        };
    }

    // Refresh the smart scheduler when finishing (not closing)
    refresh = () => {
        this.setState({
            page: 1
        })
    }

    // Navigate to next section
    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    // Navigate to previous section
    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    // Smart algorithm to generate schedule
    smartGenerate = () => {
        this.nextPage();
        // Make a temp array to store new events
        let tempArray = [];
        // Test events to check functionality
        let testDate1 = new Date(this.state.startDate.getTime());
        testDate1.setHours(testDate1.getHours() + 1);
        let test1 = {
            Id: 5,
            Subject: 'Northern Lights Display',
            StartTime: this.state.startDate,
            EndTime: testDate1
        }
        let testDate2 = new Date(this.state.endDate.getTime());
        testDate2.setHours(testDate2.getHours() + 1);
        let test2 = {
            Id: 6,
            Subject: 'Orion Nebula At Its Brightest',
            StartTime: this.state.endDate,
            EndTime: testDate2
        }
        // Add test events REMOVE LATER
        tempArray.push(test1);
        tempArray.push(test2);
        // Set state
        this.setState({
            smartEvents: tempArray
        })
    }

    // Update the state
    // KNOWN BUG: CALENDAR DOES NOT REFRESH UNLESS ROUTE LINKED
    updateState = () => {
        let tempArray = this.props.schedule;
        this.state.smartEvents.forEach(element => tempArray.push(element));
        this.props.updateSchedule(tempArray);
    }

    render() {
        // Default options
        let defaultDisplay = "content";
        let optionsDisplay = "smartOptions displayNone";
        let resultsDisplay = "smartResults displayNone";
        let prevDisplay = "displayNone"
        let nextDisplay = "";
        let generateDisplay = "displayNone";
        let finishDisplay = "displayNone";
        let closeDisplay = "";
        // Page 2 options
        if (this.state.page === 2) {
            defaultDisplay = "content displayNone";
            optionsDisplay = "smartOptions";
            prevDisplay = "";
            nextDisplay = "displayNone";
            generateDisplay = "";
            closeDisplay = "displayNone";
        } else if (this.state.page === 3) { // Page 3 options
            defaultDisplay = "content displayNone";
            resultsDisplay = "smartResults";
            prevDisplay = "";
            nextDisplay = "displayNone";
            finishDisplay = "";
            closeDisplay = "displayNone";
        }
        return (
            <div>
                <Popup
                    trigger={<Button onClick={this.refresh}> + </Button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="pop">
                        <button className="close" onClick={() => {close();}}>
                        &times;
                        </button>
                        <div className="header"> Insert your to-do list </div>
                        <div className={defaultDisplay}>
                        {' '}
                        You clicked on the smart scheduler
                        </div>
                        {/* Where to add stuff */}
                        <div className={optionsDisplay}>
                            <b>Provide an available time range for your activities:</b>
                            <br />
                            <div className="datePickerBox">
                                <DateTimePicker value={this.state.startDate} label="Pick a start time"
                                        onChange={value => this.setState({ startDate: value })}/>
                                <DateTimePicker value={this.state.endDate} label="Pick an end time"
                                        onChange={value => this.setState({ endDate: value })}/>
                            </div>
                            {/* Enter to-do list */}
                            <div>

                            </div>
                        </div>
                        {/* Results section */}
                        <div className={resultsDisplay}>
                            Results
                        </div>
                        <div className="actions">
                        <Button className={prevDisplay} onClick={this.prevPage}> Prev </Button>
                        <Button className={nextDisplay} onClick={this.nextPage}> Next </Button>
                        <Button className={generateDisplay} onClick={this.smartGenerate}> Generate! </Button>
                        <Button className={finishDisplay} onClick={() => {this.updateState(); 
                                                                          close(); 
                                                                          this.refresh()}}> Finish </Button>
                        <Button
                            className={closeDisplay}
                            onClick={() => {
                            close();
                            }}
                        >
                            Close
                        </Button>
                        </div>
                    </div>
                    )}
                </Popup>
            </div>   
        );
    }
}
