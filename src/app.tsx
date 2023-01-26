import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkFrontmatter from "remark-frontmatter";
import { CodeMirrorComponent } from "./components/codemirror.component";
import { SelectComponent } from "./components/select.component";
import * as classes from "./app.styles";

export const App: React.FC = () => {
  const [code, setCode] = React.useState({ value: "" });
  const [syntax, setSyntax] = React.useState("");

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <SelectComponent
          syntax={syntax}
          setSyntax={(syntax) => setSyntax(syntax)}
        />
        <CodeMirrorComponent
          syntax={syntax}
          setCode={(code) => setCode({ value: code })}
        />
      </div>
      <div className={classes.container}>
        <span className={classes.span}>Código markdown</span>
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            [
              remarkFrontmatter,
              { type: "json", fence: { open: "{", close: "}" } },
            ],
          ]}
          children={code.value}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  // style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};
