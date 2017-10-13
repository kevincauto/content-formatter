import React from 'react';

export default class CCEDLiveWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
      }

      render(){
          return (
            <div id="main-form">
            <h3> Aegis Content Formatter</h3>
            <div className="label">
              {/* The name attribute should match the state.selected_template property */}
            </div>
            <div className="label">
              Title: <br />
              <input
                type="text"
                name="title"
                value={this.props.info.title}
                onChange={this.handleTextChange}
              />
            </div>

            <div className="label">
              Deck: &nbsp;
              <input
                type="text"
                name="deck"
                value={this.props.info.deck}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Author: &nbsp;
              <input
                type="text"
                name="author"
                value={this.props.info.author}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Body: &nbsp;
              <textarea
                type="text"
                name="body"
                value={this.props.info.body}
                onChange={this.handleTextChange}
              />
            </div>
          </div>
          )
      }
}


