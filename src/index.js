import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HTML from './components/HTML';
import Form from './components/Form'


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'cced_live_webinar',
      title: ``,
      deck: ``,
      author: ``,
      body: ``,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
      console.log(this.state);
    //preload the selected templates object with default values?
  }
  
  componentDidUpdate(){
      console.log(this.state);
  }

  handleTextChange(value, name, html) {
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div id="container">
        <Form
          info={this.state}
          onTextChange={this.handleTextChange}
        />
        <TextResults info={this.state} />
      </div>
    );
  }
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleTextChange = this.handleTextChange.bind(this);
//   }

//   handleTextChange(value, name, html) {
//     this.props.onTextChange(value, name, html);
//   }


//   render() {
//     let displayForm = <CCEDLiveWebinarForm info={this.props.info} onTextChange={this.handleTextChange}
//   />

//     return (
//       <div id="main-form">
//         <h2>Complete the information below.</h2>
//         {displayForm}
//       </div>
//     );
//   }
// }



class TextResults extends React.Component {
  render() {

    return (
        <div>
        <HTML info={this.props.info} />
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));

