import React, { useState, useMemo, useRef } from "react";
import JoditEditor from "jodit-react";
import defaultClasses from "./textEditor.module.css";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);

  const config = {
    readonly: false,
  };

  return useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => {
          setContent(newContent);
        }}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    ),
    []
  );
};

export default TextEditor;
