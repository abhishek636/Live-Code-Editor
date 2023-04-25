import React from "react";
import Header from "./Header";
import Editor from "./Editor";
import Preview from "./Preview";

class App extends React.Component {
  state = {
    xml: '<center>\n  <img src="https://media.istockphoto.com/id/183381310/photo/html-code.jpg?s=1024x1024&w=is&k=20&c=ggg_By1Bztnymt6PjKjxn1RnY8tuY3YBdS3DOXIPbqc=" />\n  <h1>Welcom in Live Code Editor</h1>\n</center>',
    css: "h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n}",
  };

  handleChange = (value, language) => {
    this.setState({ [language]: value });
  };

  render() {
    let { xml, css } = this.state;
    return (
      <div className="view">
        <Header />
        <div className="wrapper">
          <div style={{ marginRight: "1rem" }}>
            <Editor
              language="xml"
              value={xml}
              displayName="html"
              handleChange={this.handleChange}
            />
            <Editor
              language="css"
              className="m-top"
              value={css}
              handleChange={this.handleChange}
            />
          </div>
          <Preview text="OUTPUT" xml={xml} css={css} />
        </div>
      </div>
    );
  }
}

export default App;