import { useState } from "react";
import { marked } from "marked";
import "./marker-previewer.css";

const defaultMarkdown = `# Welcome to My Markdown Previewer!

## This is a sub-heading

This is a [link](https://www.freecodecamp.org/).

Here is some **bold text**.

Here is some \`inline code\`.

> This is a blockquote.

- Apple
- Banana
- Orange

\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function MarkerPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const [expanded, setExpanded] = useState(null);

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  function toggleExpand(panel) {
    setExpanded((current) => {
      if (current === panel) {
        return null;
      }

      return panel;
    });
  }

  function getPreview() {
    return {
      __html: marked(markdown, {
        breaks: true
      })
    };
  }

  return (
    <div className="app">

      {/* EDITOR */}

      <div
        className={`window editor-window ${
          expanded === "editor" ? "expanded-window" : ""
        } ${
          expanded === "preview" ? "hidden-window" : ""
        }`}
      >

        <div className="window-header">

          <span>⌘ Editor</span>

          <button
            className="expand-button"
            onClick={() => toggleExpand("editor")}
          >
            ⛶
          </button>

        </div>

        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />

      </div>


      {/* PREVIEWER */}

      <div
        className={`window preview-window ${
          expanded === "preview" ? "expanded-window" : ""
        } ${
          expanded === "editor" ? "hidden-window" : ""
        }`}
      >

        <div className="window-header">

          <span>⌘ Previewer</span>

          <button
            className="expand-button"
            onClick={() => toggleExpand("preview")}
          >
            ⛶
          </button>

        </div>

        <div
          id="preview"
          dangerouslySetInnerHTML={getPreview()}
        />

      </div>

    </div>
  );
}

export default MarkerPreviewer;