import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Wysiwyg = (props) => {
  const { setWysiwygValue } = props;
  const [value, setValue] = useState(EditorState.createEmpty());

  function uploadCallback(file) {
    return new Promise((resolve, reject) => {
      if (
        file.type.toString() === "image/jpeg" |
        "image/gif" |
        "image/jpg" |
        "image/png" |
        "image/svg"
      ) {
        resolve({ data: { link: URL.createObjectURL(file) } });
      } else reject(console.log("file is not image type"));
    });
  }

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
          image: {
            defaultSize: { width: "100px", height: "100px" },
            uploadEnabled: true,
            uploadCallback: uploadCallback,
          },
        }}
      />
    </div>
  );
};

export default Wysiwyg;
