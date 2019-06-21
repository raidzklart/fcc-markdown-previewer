import React, { Component } from 'react';
import './App.css';

let marked = require('marked');
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preview: "# Welcome to my React Markdown Previewer!\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "Heres some code, `<div></div>`, between 2 backticks. \n" +
        "``` \n" +
        "// this is multi-line code: \n" +
        "function anotherExample(firstLine, lastLine) { \n" +
        "  if (firstLine == '```' && lastLine == '```') { \n" +
        "    return multiLineCode;  \n" +
        "  } \n" +
        " }  \n" +
        "``` \n" +
        "You can also make text **bold**... whoa! \n" +
        "Or _italic_. \n" +
        "Or... wait for it... **_both!_** \n" +
        "And feel free to go crazy ~~crossing stuff out~~. \n" +

        "There's also [links](https://www.freecodecamp.com), and \n" +
        "> Block Quotes! \n" +

        "And if you want to get really crazy, even tables: \n" +

        "Wild Header | Crazy Header | Another Header? \n" +
        "------------ | ------------- | -------------  \n" +
        "Your content can | be here, and it | can be here.... \n" +
        "And here. | Okay. | I think we get it. \n" +

        "- And of course there are lists. \n" +
        "  - Some are bulleted. \n" +
        "     - With different indentation levels. \n" +
        "        - That look like this. \n" +


        "1. And there are numbererd lists too. \n" +
        "1. Use just 1s if you want!  \n" +
        "1. But the list goes on... \n" +
        "- Even if you use dashes or asterisks. \n" +
        "* And last but not least, let's not forget embedded images: \n" +

        "![React Logo w/ Text](https://goo.gl/Umyytc) \n"

    };
  }
  onHandleChange(e) {
    this.setState({ preview: e.target.value });


  }
  render() {
    return (
      <div>
        <div>
          <h1>Enter Markdown</h1>
          <textarea id="editor" cols="80" rows="15" value={this.state.preview} onChange={(event) => this.onHandleChange(event)}></textarea>
        </div>
        <div className="mardown-output">
          <h1>Markdown Output</h1>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.preview) }} >
          </div>
        </div>
      </div>
    )
  }
}