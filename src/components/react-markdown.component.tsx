import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkFrontmatter from "remark-frontmatter";

interface Props {
  code: { value: string };
}

export const ReactMarkdownComponent: React.FC = (props: Props) => {
  const { code } = props;
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        [remarkFrontmatter, { type: "json", fence: { open: "{", close: "}" } }],
      ]}
      children={code.value}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dark}
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
  );
};
