import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    remove = () => {
        this.props.remove(this.props.key);
    }

    edit = () => {

    }

    render() {
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <div className ='sticky-notes'>
                    <div className = 'note'>
                        <div className ='note-header'>
                            <button className = 'note-close' onClick={this.props.remove}>
                                {/* x button  */}
                                <i class="fas fa-times"></i>
                            </button>
                            <button className = 'note-pin'>
                                {/* pin button */}
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <div className = 'note-title' contentEditable suppressContentEditableWarning={true}>
                            {this.props.title}
                        </div>
                        <div className = 'note-body' contentEditable suppressContentEditableWarning={true}>
                            {this.props.body}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    constructor(props) {
        super(props);
    }

    updateStickyList = (index) => {
        let newArray = this.props.stickyNotes;
        newArray.splice(index, 1)
        this.props.updateSticky(newArray);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(<StickyNote key={i} remove={this.updateStickyList} title={stickyNotes[i].title} body={stickyNotes[i].body}></StickyNote>)
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
            body: "Text goes here"
        });
        this.props.updateSticky(array);
    }

    render(){
        return(
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

