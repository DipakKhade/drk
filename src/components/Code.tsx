import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

interface CodeCrad {
  children: ReactNode;
  heading?: ReactNode;
}
export function CodeCard({ children, heading }: CodeCrad) {
  return (
    <Alert className="max-w-2xl bg-zinc-900">
      <AlertTitle>{heading}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
