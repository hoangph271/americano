import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export const CodeEditor = () => {
  return (
    <AceEditor
      mode="java"
      theme="github"
      onChange={console.info}
      // name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  )
}