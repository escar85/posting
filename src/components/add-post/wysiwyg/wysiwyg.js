import React, { useState } from "react";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const EditorConvertToJSON = () => {
  
  const [contentState, setContentState] = useState(convertFromRaw(content));

  const onContentStateChange = (contentState) => {
    setContentState({ contentState });
  };

  console.log(contentState);

  return (
    <Editor
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onContentStateChange={onContentStateChange}
    />
  );
};

export default EditorConvertToJSON;
