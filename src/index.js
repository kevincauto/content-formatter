import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HTML from './components/HTML';
import Form from './components/Form'


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <HTML info={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));

