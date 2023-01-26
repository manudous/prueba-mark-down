import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-themes-all";
import { javascript } from "@codemirror/lang-javascript";
import { languages } from "../constants.syntax";

interface Props {
  syntax: string;
  setCode: (code: string) => void;
}

export const CodeMirrorComponent: React.FC<Props> = (props: Props) => {
  const { syntax, setCode } = props;
  
  const handleMirrorChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const handleSyntax = (syntax: string) =>
    languages.find((lang) => lang.label === syntax)?.value;
  return (
    <CodeMirror
      value={handleSyntax(syntax)}
      height="400px"
      theme={dracula}
      extensions={[javascript({ jsx: true })]}
      onChange={handleMirrorChange}
      indentWithTab={false}
    />
  );
};
