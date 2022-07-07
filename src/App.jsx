import React from "react";
import { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const [raw, setRaw] = useState(placeholder);
  const [html, setHtml] = useState("");

  const preview = marked.parse(
    "# Marked in Node.js\n\nRendered by **marked**."
  );

  const handleEditorChange = (e) => {
    setRaw(e.target.value);
  };

  const parseToHtml = (str) => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    const result = marked.parse(str);
    return result;
  };
  // React.useEffect(() => {
  //   console.log("first load");
  //   parseToHtml();
  // }, [raw]);
  return (
    <main>
      <ul id="dots">
        <li />
        <li />
        <li />
      </ul>
      <div id="editor-container">
        <textarea
          id="editor"
          spellCheck="false"
          onKeyUp={(e) => console.log(e)}
          onChange={handleEditorChange}
          value={raw}
        />
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: parseToHtml(raw) }}
      />
    </main>
  );
}

export default App;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![ReactJS Logo](https://reactjs.org/logo-og.png)
`;
