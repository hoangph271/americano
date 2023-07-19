import dynamic from 'next/dynamic'

const CodeEditor = dynamic(() => import('../../components/CodeEditor'), { ssr: false })


import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function Editor () {
  return (
    <CodeEditor />
  );
}
