import React, { useState, useMemo, useRef } from "react";
import JoditEditor from "jodit-react";
import defaultClasses from "./textEditor.module.css";

const TextEditor = (props) => {
  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };

  return (
    <div className={defaultClasses.component}>
      {useMemo(
        () => (
          <JoditEditor
            ref={editor}
            value={props.content}
            config={config}
            tabIndex={1}
            // onBlur={(newContent) => setContent(newContent)}
            onChange={props.onChange}
          />
        ),
        []
      )}
      {props.children}
    </div>
  );
};

export default TextEditor;
