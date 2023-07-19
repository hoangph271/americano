import { useState } from "react";
import AceEditor from "react-ace";
import { api } from "~/utils/api";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function CodeEditor () {
  const [rawCode, setRawCode] = useState("function main () {}");
  const runCodeMutation = api.example.runCode.useMutation();
  console.info(runCodeMutation.data);

  return (
    <div>
      <AceEditor
        value={rawCode}
        mode="java"
        theme="github"
        onChange={(rawCode) => setRawCode(rawCode)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      <button
        className="text-slate-50 rounded-full p-2 border-gray-50"
        disabled={runCodeMutation.isLoading}
        onClick={async (e) => {
          e.preventDefault();

          await runCodeMutation.mutateAsync({ text: rawCode })
        }}
      >
        Run
      </button>
    </div>
  )
}
