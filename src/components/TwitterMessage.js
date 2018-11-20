import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet:""
    };
  }
  handleOnChange = ({target:{value:tweet}})=>{
    this.setState({
      tweet
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange} value={this.state.tweet}/>
        <p>{this.props.maxChars-this.state.tweet.length}</p>
      </div>

    );
  }
}

export default TwitterMessage;
