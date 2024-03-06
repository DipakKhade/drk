import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import ContentfulImage from "./Contentfulinage";
import { CodeCard } from "./Code";
import { CopyButton } from "./CopyButton"
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const options: any = {
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      return (
        <CodeCard>
      {/* <pre>
          
        <code>

          {text}
        </code>
      </pre> */}
      <CopyButton className="absolute right-4" value={text}/>
       <SyntaxHighlighter
              language="html"
              style={tomorrowNight}
              customStyle={{
                padding: "8px",
              }}
            >             
              {text}
            </SyntaxHighlighter>
        </CodeCard>
      );
    },
  },
  renderNode: {


    [INLINES.ENTRY_HYPERLINK]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <Link
            className="text-red-600"
            href={`/posts/${node.data.target.fields.slug}`}
          >
            {node.data.target.fields.title}
          </Link>
        );
      }
    },

    [INLINES.HYPERLINK]: (node: any) => {
      const text = node.content.find(
        (item: any) => item.nodeType === "text",
      )?.value;
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === "video") {
        return (
          <iframe
            className="aspect-w-16 aspect-h-9"
            height="400"
            width="600"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    // post.fields.coverImage.fields.file.url
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      if (node.data.target.fields.file.contentType === "image/png") {
        return (
          <ContentfulImage
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
            className="h-20 w-20"
          />
        );
      }
    },
  },
};
