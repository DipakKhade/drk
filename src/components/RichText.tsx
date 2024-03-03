import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import ContentfulImage from "./Contentfulinage";
export const options: any = {
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      return (
        <pre className="bg-slate-950 dark:bg-slate-50 text-slate-50 dark:text-slate-900 p-3">
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      if (
        node.content.find((item: any) =>
          item.marks?.find((mark: any) => mark.type === "code"),
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p>{children}</p>;
    },

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
