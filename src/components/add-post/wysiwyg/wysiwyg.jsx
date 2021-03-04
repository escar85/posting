import React from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Wysiwyg = (props) => {
  const { setWysiwygValue } = props;
  const [value, setValue] = React.useState(EditorState.createEmpty());

  return (
    <div>
      <Editor
        editorState={value}
        wrapperClassName="demo-wrapper"
        editorClassName="editor"
        onEditorStateChange={(value) => {
          setValue(value);
          setWysiwygValue(draftToHtml(convertToRaw(value.getCurrentContent())));
        }}
        toolbar={{
          image: { defaultSize: { width: "100px", height: "100px" } },
        }}
      />
    </div>
  );
};

export default Wysiwyg;
