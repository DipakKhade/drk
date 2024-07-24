import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { cn } from "@/lib/utils";
import { any, z } from "zod";
import { Button } from "./ui/button";
import { FaRegCopy } from "react-icons/fa6";
import { LuCopyCheck } from "react-icons/lu";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  event?: CopyEvent;
  src?: string;
}

type CopyEvent = {
  name: any; // Making the name property type any
  properties?: Record<string, string | number | boolean | null>; // Event properties
};

interface CustomEvent extends Event {
  customProperty: string;
  name: any;
}

const eventSchema = z.object({
  name: z.enum([
    "copy_npm_command",
    "copy_usage_import_code",
    "copy_usage_code",
    "copy_primitive_code",
    "copy_theme_code",
  ]),
  // declare type AllowedPropertyValues = string | number | boolean | null
  properties: z
    .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
    .optional(),
});

function trackEvent(input: Event): void {
  const event = eventSchema.parse(input);
  if (event) {
    track(event.name, event.properties);
  }
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    trackEvent(event);
  }
}

export function CopyButton({
  value,
  className,
  src,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "relative z-10 h-6 w-6 text-zinc-50 bg-zinc-700 hover:text-zinc-500",
          className,
        )}
        onClick={() => {
          copyToClipboardWithMeta(
            value,
            event
              ? {
                  //@ts-ignore
                  name: event.name,
                  properties: {
                    code: value,
                  },
                }
              : undefined,
          );
          setHasCopied(true);
        }}
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? (
          <LuCopyCheck className="h-3 w-3 text-lg" />
        ) : (
          <FaRegCopy className="h-3 w-3 text-lg" />
        )}
      </Button>
    </>
  );
}
